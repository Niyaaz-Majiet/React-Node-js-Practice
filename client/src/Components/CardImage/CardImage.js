import React from "react";

const CardImage = ({data, isMobile, handleFlip}) => {
    let shouldFlip = data.set;
    if (shouldFlip === false) shouldFlip = data.flipped;

    const getImageSrc = () => {
        let imageSrc;
        if (shouldFlip) {
            if(data.set === true){
                imageSrc = isMobile ? require(`../../../public/svg/GameTiles/GameTileComplete/Mobile/${data.imageName}-complete-mobile.svg`) : require(`../../../public/svg/GameTiles/GameTileComplete/${data.imageName}-complete.svg`);
            }else{
                imageSrc = isMobile ? require(`../../../public/svg/GameTiles/GameTileSideTwo/Mobile/${data.imageName}-turned-mobile.svg`) : require(`../../../public/svg/GameTiles/GameTileSideTwo/${data.imageName}-turned.svg`);
            }
        } else {
            imageSrc = isMobile ? require(`../../../public/svg/GameTiles/${data.imageName}-mobile.svg`) : require(`../../../public/svg/GameTiles/${data.imageName}.svg`);
        }

        return imageSrc;
    }

    return <img alt={data.imageName} onClick={() => handleFlip()}
                src={getImageSrc()}/>
}

export default CardImage;
