import React from "react";
import styles from "./InfoSection.module.css"

const InfoSection = ({textOne,textTwo}) => {
    return (
        <div className={styles['info-content']}>
            <Paragraph text={textOne}/>
            <Paragraph text={textTwo}/>
        </div>
    );
}

const Paragraph = ({text = `The perfect place to <b>buy & sell</b> premium, pre-loved fashion  for little ones!`}) => {
    return (
            <p className={styles['paragraph-top']} dangerouslySetInnerHTML={{__html: text}}/>
    );
}



export {InfoSection,Paragraph};
