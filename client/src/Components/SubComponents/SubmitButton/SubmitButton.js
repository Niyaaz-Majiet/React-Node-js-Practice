import React from "react";
import styles from './SubmitButton.module.css';

const SubmitButton = ({btnClass = "",handleSubmit,text}) => {
    return (
        <button className={`${styles['submit-btn']} ${btnClass}`} onClick={() => handleSubmit()}>{text}</button>
    );
}

export default SubmitButton;
