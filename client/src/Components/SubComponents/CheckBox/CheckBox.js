import React from "react";
import "./CheckBox.css"

const CheckBox = ({checkBoxClass = "",name,text,checked,handleChange}) => {
    return (
        <div className="checkbox-wrapper">
            <label htmlFor={name} className="check-label">
                <input
                    id={name}
                    name={name}
                    type="checkbox"
                    className={`check-box ${checkBoxClass}`}
                    checked={checked}
                    onChange={(e)=>handleChange(e)}
                /> {text}
            </label>
        </div>
    );
}

export default CheckBox;
