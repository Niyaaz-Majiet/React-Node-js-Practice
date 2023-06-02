import React from "react";
import "./TextInput.css";

const TextInput = ({value,placeHolder,name,inputClass = "",handleChange,readOnly}) => {
    return (
        <input name={name} readOnly={readOnly} className={`input-border ${inputClass}`} type={"text"} placeholder={placeHolder} value={value} onChange={(e)=>handleChange(e)}/>
    );
}

export default TextInput;
