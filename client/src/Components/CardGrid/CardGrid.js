import React, {useEffect, useState} from "react";
import CardImage from "../CardImage/CardImage";
import {getLocalStorageObject, ImagePaths, setLocalStorageObject} from "../../Util";
import styles from "./CardGrid.module.css";

const CardGrid = ({isMobile, reset}) => {
    let dataInStorage;
    if (typeof window !== 'undefined') {
        dataInStorage = getLocalStorageObject("card-data")
    }

    const [cardData, updateCardData] = useState(dataInStorage ? dataInStorage : ImagePaths);

    const resetCardList = () => {
        const initialData = cardData.map((x) => {
            x.flipped = false;
            x.set = false;
            return x;
        });
        let game_session = getLocalStorageObject("game-session");

        game_session.tries = 0;
        game_session.rounds = game_session.rounds + 1;
        game_session.numberOfSetCards = 0;
        game_session.percentDone = 0;

        setLocalStorageObject("game-session", game_session)
        setLocalStorageObject("card-data", initialData)
        updateCardData(initialData);
    }

    useEffect(() => {
        if (reset) {
            resetCardList();
        }

        const setGameStatus = (gameData) => {
            let game_session = getLocalStorageObject("game-session");
            let data = gameData.filter(element => element.flipped === true && element.set === true);
            let numberOfSetCards = data.length;

            game_session.percentDone = (numberOfSetCards / cardData.length) * 100;
            game_session.numberOfSetCards = numberOfSetCards;

            setLocalStorageObject("game-session", game_session)

            if(numberOfSetCards === cardData.length){
                alert(`Done. You won in (${game_session.tries}) tries in round - [${game_session.rounds}]`);
                resetCardList();
            }
        }

        const updateCardGroup = () => {
            let tempArr = [...cardData]
            let getFlipped = tempArr.filter(element => element.flipped === true && element.set === false);

            if (getFlipped.length === 2) {
                let card_one = getFlipped[0];
                let card_two = getFlipped[1];

                let indexOfCardOne = tempArr.findIndex(obj => {
                    return obj.imageName === card_one.imageName
                });
                let indexOfCardTwo = tempArr.findIndex(obj => {
                    return obj.imageName === card_two.imageName
                });

                if (card_one.ref === card_two.ref) {
                    tempArr[indexOfCardOne].set = true;
                    tempArr[indexOfCardTwo].set = true;
                } else {
                    tempArr[indexOfCardOne].flipped = false;
                    tempArr[indexOfCardTwo].flipped = false;
                }

                setLocalStorageObject("card-data", tempArr);

                updateCardData(tempArr);
                setGameStatus(tempArr);
            }
        }

        setTimeout(() => {
            updateCardGroup();
        }, 1000);
    }, [cardData, reset]);

    const handleFlip = (item) => {
        let game_session = getLocalStorageObject("game-session");
        game_session.tries = game_session.tries + 1;
        game_session.totalTries = game_session.totalTries + 1;

        let indexOfItem = cardData.findIndex(obj => {
            return obj.imageName === item.imageName
        });

        let tempArr = [...cardData];
        tempArr[indexOfItem].flipped = !item.flipped;

        setLocalStorageObject("game-session", game_session);
        setLocalStorageObject("card-data", tempArr);

        updateCardData(tempArr);
    }

    return (
        <div className={styles["card-grid-group"]}>
            {
                cardData.map((value) => {
                    return (<CardImage key={value.imageName} data={value} isMobile={isMobile}
                                       handleFlip={() => handleFlip(value)}/>);
                })
            }
        </div>
    );
}

export default CardGrid;
