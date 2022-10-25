import React, { useEffect, useState } from "react";
import { Pixelify } from "react-pixelify";


export const Pixelation = (props) => {
    const [pixelSize, setPixelSize] = useState("0");
    const [countUp, setCountUp] = useState(true);
    let timer = 0;

    const elvis = "https://res.cloudinary.com/dzaaowrv5/image/upload/v1666654833/spectacular/Andy-Warhol-Eight-Elvises-1963_copy_oe3lau.jpg"
  
    function increment() {
        if (countUp === true) {
            if (timer === 15) {
                timer = 0
            } else {
                timer = timer + 1;
                setPixelSize(timer.toString());
            }
        }
    }
    function decrement() {
        if (countUp === false) {
            if (timer === 0) {
                setCountUp(true);
            } else {
                timer = timer - 1;
                setPixelSize(timer.toString());
            }
        }
        
    }
    useEffect(() => {
        const interval = setInterval(() => {
            increment();
          }, 350);
          
          return () => clearInterval(interval);
    },[])
    
    return (
    <div className="pixelator">
        <Pixelify
        src={elvis}
        pixelSize={props.blur}
        />
    </div>
  );
};
