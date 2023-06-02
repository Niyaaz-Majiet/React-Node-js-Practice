import React from "react";
import "./InfoSection.css"

const InfoSection = ({textOne,textTwo}) => {
    return (
        <div className="info-content">
            <Paragraph text={textOne}/>
            <Paragraph text={textTwo}/>
        </div>
    );
}

const Paragraph = ({text = `The perfect place to <b>buy & sell</b> premium, pre-loved fashion  for little ones!`}) => {
    return (
            <p className="paragraph-top" dangerouslySetInnerHTML={{__html: text}}/>
    );
}



export {InfoSection,Paragraph};
