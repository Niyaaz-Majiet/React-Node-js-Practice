import React from "react";
import styles from "./CheckBox.module.css"

const CheckBox = ({checkBoxClass = "",name,text,checked,handleChange}) => {
    return (
        <div className={styles['checkbox-wrapper']}>
            <label htmlFor={name} className={styles['check-label']}>
                <input
                    id={name}
                    name={name}
                    type="checkbox"
                    className={`${styles['check-box']} ${checkBoxClass}`}
                    checked={checked}
                    onChange={(e)=>handleChange(e)}
                /> {text}
            </label>
        </div>
    );
}

export default CheckBox;
