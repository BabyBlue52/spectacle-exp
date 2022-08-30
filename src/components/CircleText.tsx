import React from "react";
import Lottie from "lottie-react";
import * as animationData from '../animations/circle-text.json';

export default function CircleText() {
    const style = {
        height: 100
    }
    return (
        <div>
            <Lottie
                loop={true}
                autoplay={true}
                animationData={animationData}
                style={style}
                className="circle-text-animation"
            />
        </div>
    )
}
