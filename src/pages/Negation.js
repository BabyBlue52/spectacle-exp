import React, {useEffect, useState} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import ScrollProgress from "../components/ScrollProgress";
import { NextButton, PrevButton } from "../components/Buttons";
import { Link } from 'react-router-dom';
import Ripple from '../components/Ripple';
import CursorTracker from '../components/CursorTracking';
import { LoadingBar } from '../animations/LoadSpinner';

function Negation () {
    const timeMag = "https://res.cloudinary.com/dzaaowrv5/image/upload/v1664660424/spectacular/05ec98d72cbb5b7d2800112285f8a816_yunmiz.jpg";
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
         } if ( yRange.current > 80) {
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
         }
     }

    return (
        <>
        <div className='page tin'>
            <LoadingBar/>
            <CursorTracker/>        
            {/* Turbulence */}
            <div className='negation'>
                <div className='wave-container'>
                    <div className='left'>
                        <Ripple/>    
                    </div>
                    <div className='right'>
                        <Ripple/>    
                    </div>
                </div>

                <div className='text-content'>
                    <div className="blurb">
                        <motion.div className="left" variants={textAnimation} animate={textReveal ? 'reveal' : 'hide'}>
                            <p>The spectacle is intelligent. Dissension and those who hope to destroy it are absorbed back into the fold. A revolutionary mindset or radical change are ridiculed for breaking away from the status quo.</p>
                            <p>
                            The media is a watchdog of the spectacle, to undermine any considerable threat. Paradigmatic shifts eventually succumb to the toxic bile and are pillaried until they become shadows of their former greatness. Movements become symbols brandied about for ideological clout and signaling progressive thinking. A strawman to simulate an true opposition, while unseen forces pull the tide of culture towards something much more simple and palatable.
                            </p>
                        </motion.div>
                        <motion.div className="right" variants={textAnimation} animate={textReveal ? 'reveal' : 'hide'}>
                            <p>Radicals and the rebellious spirit are negated by the spectacle. A news cycle can break the back of a movement by inundating the public with images and opinion pieces, burying attentive viewers to the point of nausea, one sees it so often it goes from shocking to banal. A death note for any recruitment effort.</p>
                            <p>Riot attire is sold, signs are produced and manufactured and the narrative is drawn. The narrative is a double-edged sword. Uniting the angry while at the same time pigeonholing the entire movement as something that creates a sense of a unitary perspective, pledged not to deviate from the rules of the game. As soon as a protest turns violent, one no longer can them on from the sidelines and labels them as savages.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
           
            <ScrollProgress/>
        
            <Link to="/alienation">
                    <NextButton/>
                </Link>
             <Link to="/commodification">
                <PrevButton/>
             </Link>
        </div>
        </>
    )
}

export default Negation;