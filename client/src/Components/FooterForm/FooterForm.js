import React, {useState} from "react";
import TextInput from "../SubComponents/TextInput/TextInput";
import CheckBox from "../SubComponents/CheckBox/CheckBox";
import SubmitButton from "../SubComponents/SubmitButton/SubmitButton";
import {upsertDocument} from "../../Services/firebaseServices";
import "./FooterForm.css"

const FooterForm = ({
                        submitButtonText,
                        inputPlaceholderOne,
                        inputPlaceholderTwo,
                        checkBoxOneText,
                        checkBoxTwoText,
                        paragraphOneText,
                        paragraphTwoText
                    }) => {
    const [formData, updateFormData] = useState({
        name: "",
        email: "",
        isSeller: false,
        signedUpForNewsFeed: false
    });

    const handleFormDataChange = (e, isCheckBox = false) => {
        let elementName = e.target.name;
        let value = isCheckBox ? e.target.checked : e.target.value
        updateFormData({
            ...formData,
            [elementName]: value
        });
    }

    const handleSubmit = async () => {
        if (formData.name.trim() !== "" || formData.email.trim() !== "") {

            let isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email);

            if (isValidEmail) {
                const upsert = await upsertDocument("user-contact-info", formData);
                if (!upsert.error) {
                    alert("User details have been forwarded.");
                    updateFormData({
                        name: "",
                        email: "",
                        isSeller: false,
                        signedUpForNewsFeed: false
                    });
                } else {
                    alert("Unable to add user. Please try again later.");
                }
            } else {
                alert("Please enter a valid email.");
            }
        } else {
            alert("Missing Data");
        }
    }

    return (
        <div className={"footer-group"}>
            <div className="col-div section">
                <p className="text-content bold">{paragraphOneText}</p>
                <p className="text-content small">{paragraphTwoText}</p>
            </div>
            <div className="col-div section">
                <TextInput name={"name"} value={formData.name} placeHolder={inputPlaceholderOne}
                           handleChange={(e) => handleFormDataChange(e)} inputClass={"input-margin-bottom"}/>
                <TextInput name={"email"} value={formData.email} placeHolder={inputPlaceholderTwo}
                           handleChange={(e) => handleFormDataChange(e)}/>
            </div>
            <div className="col-div">
                <CheckBox checked={formData.isSeller} name={"isSeller"} text={checkBoxOneText}
                          handleChange={(e) => handleFormDataChange(e, true)}/>
                <CheckBox checked={formData.signedUpForNewsFeed} name={"signedUpForNewsFeed"}
                          text={checkBoxTwoText} handleChange={(e) => handleFormDataChange(e, true)}/>
            </div>
            <div className="col-div">
                <SubmitButton text={submitButtonText} handleSubmit={() => handleSubmit()}
                              btnClass={"submit-btn-class"}/>
            </div>
        </div>
    );
}

export default FooterForm;
