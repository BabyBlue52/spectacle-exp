import React, {useEffect, useState} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import ScrollProgress from "../components/ScrollProgress";
import { NextButton, PrevButton } from "../components/Buttons";
import { Link } from 'react-router-dom';
import Ripple from '../components/Ripple';
import CursorTracker from '../components/CursorTracking';

function Negation () {
    const timeMag = "https://res.cloudinary.com/dzaaowrv5/image/upload/v1664660424/spectacular/05ec98d72cbb5b7d2800112285f8a816_yunmiz.jpg";
     // Scroll Progress Boiler plate
     const { scrollYProgress } = useScroll();
     const [currentPercent, setCurrentPercent] = useState(0);
     const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
     
     const [textReveal, setTextReveal] = useState(false);
 
     /* Track scroll position */
     useEffect(() =>
           yRange.onChange((v) => {
             setCurrentPercent(Math.trunc(yRange.current))
           }
     ),[yRange]);
 
     /* Secondary event listener for change in scroll position */
     useEffect(() => {
         let loopInterval = 100
         let loop = setTimeout(getPosition, loopInterval);
         // Clear the timeout when unmounting the component :
         return () => {
             clearTimeout(loop);
         };
     })
     // Check to see where User scroll is    
     function getPosition() {
         if ( yRange.current < 20 ) {
             setTextReveal(false)
         } else if  (yRange.current > 20) {
             setTextReveal(true)
         }
 
     }    
 
     const  textAnimation = {
         hide: {
             opacity: 0,
             transition: { duration: 2 }
         },
         reveal: {
             opacity: 1,
             transition: { duration: 2 }
         },
         delayed: {
             opacity: 1,
             transition: { duration: 2, delay: 2 },
         }
     }

    return (
        <div className='page tin'>
            <CursorTracker/>        
            {/* <div className='negation'>
            
                <div className='magazine-cover'>                    
                    
                </div>
            </div> */}
                {/* Turbulence */}
            <div>
                <div className='wave-container'>
                    <div className='left'>
                        <Ripple/>    
                    </div>
                    <div className='right'>
                        <Ripple/>    
                    </div>
                </div>
            </div>

            <ScrollProgress/>
        </div>
        
    )
}

export default Negation;