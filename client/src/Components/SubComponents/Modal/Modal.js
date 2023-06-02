import React from "react";
import "./Modal.css"
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
                    className={"modal-portal-container"}
                >
                    <div
                        className={"modal-content"}
                    >
                        {render(children) || children}
                        <hr/>
                        <SubmitButton handleSubmit={close} btnClass={"modal-btn"} text={"Close"}/>
                        <SubmitButton handleSubmit={() => clearGameSession() } btnClass={"modal-btn"} text={"Clear Session Data"}/>
                        <SubmitButton handleSubmit={() => handleReset()} btnClass={"modal-btn reset"} text={"Reset"}/>
                    </div>

                </div>
                <div
                    className={"background-overlay"}
                />
            </div>
        </Portal>
    );
};

export default Modal;
