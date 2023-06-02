import React from "react";
import './SubmitButton.css';

const SubmitButton = ({btnClass = "",handleSubmit,text}) => {
    return (
        <button className={`submit-btn ${btnClass}`} onClick={() => handleSubmit()}>{text}</button>
    );
}

export default SubmitButton;
