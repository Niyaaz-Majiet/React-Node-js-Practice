import React from "react";
import styles from "./TextInputWithLabel.module.css"
import TextInput from "../TextInput/TextInput";

const TextInputWithLabel = ({inputClass = "",name,title,placeHolder,value,handleChange,readOnly=false}) => {
    return (
        <div className={styles['input-wrapper']}>
            <label htmlFor={name} className={styles['input-label']} title={title}>{title}</label>
            <TextInput
            name={name}
            handleChange={(e)=>handleChange(e)}
            inputClass={inputClass}
            placeHolder={placeHolder}
            value={value}
            readOnly={readOnly}
            />
        </div>
    );
}

export default TextInputWithLabel;
