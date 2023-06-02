import React from "react";
import styles from "./Modal.module.css"
import Portal from "./Portal";
import SubmitButton from "../SubmitButton/SubmitButton";
import {removeStorageObjectByPath} from "../../../Util";

const Modal = ({children, close, render, resetGame}) => {
    const handleReset = () => {
        resetGame();
        close();
    }

    const clearGameSession = () => {
        removeStorageObjectByPath("game-session");
        close();
    }

    return (
        <Portal>
            <div>
                <div
                    className={styles['modal-portal-container']}
                >
                    <div
                        className={styles['modal-content']}
                    >
                        {render(children) || children}
                        <hr/>
                        <SubmitButton handleSubmit={close} btnClass={styles['modal-btn']} text={"Close"}/>
                        <SubmitButton handleSubmit={() => clearGameSession() } btnClass={styles['modal-btn']} text={"Clear Session Data"}/>
                        <SubmitButton handleSubmit={() => handleReset()} btnClass={styles['modal-btn']} text={"Reset"}/>
                    </div>

                </div>
                <div
                    className={styles['background-overlay']}
                />
            </div>
        </Portal>
    );
};

export default Modal;
