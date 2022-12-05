import React, {useEffect, useState} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import ScrollProgress from "../components/ScrollProgress";
import { NextButton, PrevButton } from "../components/Buttons";
import SpaceInvader from '../components/SpaceInvader';
import { LoadingBar } from '../animations/LoadSpinner';


function Alienation () {
    const theDumps = "https://res.cloudinary.com/dzaaowrv5/image/upload/v1665627873/spectacular/1960s-unhappy-sad-depressed-woman-vintage-images_copy_xgs80t.png";
    
    // Scroll Progress Boiler plate
     const { scrollYProgress } = useScroll();
     const [currentPercent, setCurrentPercent] = useState(0);
     const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
     
     const [textReveal, setTextReveal] = useState(false);
     const [textReveal2, setTextReveal2] = useState(false);
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
         }
         if (yRange.current > 50) {
            setTextReveal2(true)
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
         },
         delayed: {
             opacity: 1,
             transition: { duration: 2, delay: 2 },
         }
     }

    return (
        <div className='page manila'>
            <LoadingBar/>
            <SpaceInvader/>
            <div className="alienation">
                <img src={theDumps} className="unhappy"/>
                <div className='text-content'>
                    <div className="blurb">
                        <motion.div className="left" variants={textAnimation} animate={textReveal ? 'reveal' : 'hide'}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. In ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit. Nisi vitae suscipit tellus mauris a diam maecenas. Dictum varius duis at consectetur lorem. Est sit amet facilisis magna etiam tempor orci. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Placerat in egestas erat imperdiet sed euismod nisi porta. Gravida rutrum quisque non tellus orci.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. In ante metus dictum at tempor commodo ullamcorper. </p>
                        </motion.div>
                        <motion.div className="right" variants={textAnimation} animate={textReveal2 ? 'reveal' : 'hide'}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. In ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit. Nisi vitae suscipit tellus mauris a diam maecenas. Dictum varius duis at consectetur lorem. Est sit amet facilisis magna etiam tempor orci. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Placerat in egestas erat imperdiet sed euismod nisi porta. Gravida rutrum quisque non tellus orci.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. In ante metus dictum at tempor commodo ullamcorper. </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <ScrollProgress/>
            {/* Reveal nexxt button */}
            <motion.div variants={textAnimation} animate={showNext ? 'reveal' : 'hide'}>
                <Link to="/homogenization">
                    <NextButton/>
                </Link>
            </motion.div>

             <Link to="/negation">
                <PrevButton/>
             </Link>
        </div>
    ) 
}

export default Alienation 
