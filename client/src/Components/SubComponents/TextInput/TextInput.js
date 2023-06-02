import React from "react";
import styles from "./TextInput.module.css";

const TextInput = ({value,placeHolder,name,inputClass = "",handleChange,readOnly}) => {
    return (
        <input name={name} readOnly={readOnly} className={`${styles['input-border']} ${inputClass}`} type={"text"} placeholder={placeHolder} value={value} onChange={(e)=>handleChange(e)}/>
    );
}

export default TextInput;
