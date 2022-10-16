import React, {useEffect, useState} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import ScrollProgress from "../components/ScrollProgress";
import { NextButton, PrevButton } from "../components/Buttons";
import SpaceInvader from '../components/SpaceInvader';


function Alienation () {
    const theDumps = "https://res.cloudinary.com/dzaaowrv5/image/upload/v1665627873/spectacular/1960s-unhappy-sad-depressed-woman-vintage-images_copy_xgs80t.png";
    
    // Scroll Progress Boiler plate
     const { scrollYProgress } = useScroll();
     const [currentPercent, setCurrentPercent] = useState(0);
     const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
     
     const [textReveal, setTextReveal] = useState(false);
     const [showNext, setShowNext] = useState(false);
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
         }
         if (yRange.current > 20) {
             setTextReveal(true)
             setShowNext(false)
         } if ( yRange.current > 90) {
            setShowNext(true);
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
        <div className='page manila'>
            <SpaceInvader/>
            <div className="alienation">
                <img src={theDumps} className="unhappy"/>
            </div>
            <ScrollProgress/>
        </div>
    ) 
}

export default Alienation 
