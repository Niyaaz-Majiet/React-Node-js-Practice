import React from "react";
import './LegendBlock.css';
import TextInputWithLabel from "../SubComponents/TextInputWithLabel/TextInputWithLabel";
import {getLocalStorageObject, setLocalStorageObject} from "../../Util";

const LegendBlock = () => {
    if (localStorage.getItem("game-session") === null) {
        setLocalStorageObject("game-session", {
            tries: 0,
            rounds: 1,
            totalTries: 0,
            numberOfSetCards: 0,
            percentDone:0
        })
    }

    const game_data = getLocalStorageObject("game-session");

    return (
        <div className="legend-block-container">
            <TextInputWithLabel
            value={game_data.tries}
            placeHolder={""}
            inputClass={"label-item"}
            handleChange={()=>{}}
            name={"tries"}
            title={"Number of tries in current round :"}
            readOnly={true}
            />

            <TextInputWithLabel
                value={game_data.rounds}
                placeHolder={""}
                inputClass={"label-item"}
                handleChange={()=>{}}
                name={"rounds"}
                title={"Current round :"}
                readOnly={true}
            />

            <TextInputWithLabel
                value={game_data.numberOfSetCards}
                placeHolder={""}
                inputClass={"label-item"}
                handleChange={()=>{}}
                name={"numberOfSetCards"}
                title={"Number of cards set :"}
                readOnly={true}
            />

            <TextInputWithLabel
                value={game_data.totalTries}
                placeHolder={""}
                inputClass={"label-item"}
                handleChange={()=>{}}
                name={"totalTries"}
                title={"Total Amount of tries in game :"}
                readOnly={true}
            />

            <TextInputWithLabel
                value={game_data.percentDone}
                placeHolder={""}
                inputClass={"label-item"}
                handleChange={()=>{}}
                name={"percentDone"}
                title={"Percentage Done :"}
                readOnly={true}
            />
        </div>
    );
}

export default LegendBlock;
