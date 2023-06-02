import React, {useEffect, useState} from "react";
import CardGrid from "../../Components/CardGrid/CardGrid";
import {InfoSection, Paragraph} from "../../Components/InfoSection/InfoSection";
import FooterForm from "../../Components/FooterForm/FooterForm";
import Modal from "../../Components/SubComponents/Modal/Modal";
import SubmitButton from "../../Components/SubComponents/SubmitButton/SubmitButton";
import LegendBlock from "../../Components/LedgendBlock/LegendBlock";
import useModal from "../../Hooks/useModal";
import {getAllDocumentsInCollection} from "../../Services/firebaseServices";
import {getLocalStorageObject, setLocalStorageObject} from "../../Util";
import styles from './Home.module.css';

const Home = () => {
    const { open, openModal, closeModal } = useModal();
    const [isMobile, setIsMobile] = useState(false);
    const [siteData, setSiteData] = useState({});
    const [shouldReset,setReset] = useState(false);

    const fetchLatestSiteData = async () => {
        const res = await getAllDocumentsInCollection("site-data");
        if(res.documents){
            setSiteData(res.documents[res.documents.length-1])
        }else{
            fetch("http://localhost:3001/mock-site-settings")
                .then(response => response.json())
                .then(json => setSiteData(json));
        }
    }

    useEffect(()=>{
        if(shouldReset){
            setReset(false);
        }
    },[shouldReset])

    useEffect(() => {
        fetchLatestSiteData();
        setIsMobile(window.innerWidth <= 600);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth <= 600);
    }

    const resetGame = () => {
        let game_session = getLocalStorageObject("game-session");
        game_session.rounds+=1;
        game_session.tries = 0;
        game_session.numberOfSetCards = 0;
        game_session.percentDone = 0;

        setLocalStorageObject("game-session", game_session);

        setReset(true);
    }

    return (
        <div className={styles['ome-page-container']}>
            <div>
                <SubmitButton
                    text={"Game Details"}
                    btnClass={`${styles['modal-btn']} ${styles['margin-all']}`}
                    handleSubmit={()=>openModal()}
                />
                {open ? (
                    <Modal
                        close={()=>closeModal()}
                        render={() => <LegendBlock/>}
                        resetGame={()=>resetGame()}
                    />
                ) : null}
            </div>


            <div className={isMobile ? styles['content-container-mobile'] : styles['content-container']}>
                {isMobile && <Paragraph text={siteData['text']}/>}

                <CardGrid isMobile={isMobile} reset={shouldReset}/>

                {!isMobile &&
                <div className={styles['side-container']}>
                    <InfoSection
                    textOne={siteData['text']}
                    textTwo={siteData['description']}
                    />
                </div>
                }

                {isMobile && <Paragraph text={siteData['description']}/>}
            </div>

            <FooterForm
            submitButtonText={siteData['footer-submit-btn-text']}
            inputPlaceholderOne={siteData['input-place-holder-one']}
            inputPlaceholderTwo={siteData['input-place-holder-two']}
            checkBoxOneText={siteData['check-box-one-text']}
            checkBoxTwoText={siteData['check-box-two-text']}
            paragraphOneText={siteData['paragraph-one']}
            paragraphTwoText={siteData['paragraph-two']}
            />
        </div>
    );
}

export default Home;
