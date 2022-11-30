import React, {useEffect, useState} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import ScrollProgress from "../components/ScrollProgress";
import { EndButton, PrevButton } from "../components/Buttons";
import { Pixelation } from '../components/Pixelation';
import { LoadingBar } from '../components/LoadSpinner';

function Homogenization () {

    // Scroll Progress Boiler plate
    const { scrollYProgress } = useScroll();
    const [currentPercent, setCurrentPercent] = useState(0);
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
    
    const [textReveal, setTextReveal] = useState(false);
    const [textReveal2, setTextReveal2] = useState(false);
    const [textReveal3, setTextReveal3] = useState(false);

    const [showNext, setShowNext] = useState(false);
    const [pixelRatio, setPixelRatio] = useState(0);

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
        if ( yRange.current < 25 ) {
            setTextReveal(false)
            setPixelRatio(0)
        }
        if (yRange.current > 25) {
            setTextReveal(true)
            setShowNext(false)
            setPixelRatio(5)
        }
        if (yRange.current > 50) {
            setTextReveal2(true)
            setPixelRatio(10)
        }
        if (yRange.current > 75) {
            setTextReveal3(true)
            setPixelRatio(15)
        }
         if ( yRange.current > 80) {
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
        <div className='page tin'>
            <LoadingBar/>
            <div className="homogenization">
                <Pixelation blur={pixelRatio}/>
            
                <div className="text-content">
                    <div className="blurb row">
                        <motion.div variants={textAnimation} animate={textReveal ? 'reveal' : 'hide'}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. In ante metus dictum at tempor commodo ullamcorper. </p>
                        </motion.div>
                        <motion.div variants={textAnimation} animate={textReveal2 ? 'reveal' : 'hide'}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. In ante metus dictum at tempor commodo ullamcorper. </p>
                        </motion.div>
                        <motion.div variants={textAnimation} animate={textReveal3 ? 'reveal' : 'hide'}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. In ante metus dictum at tempor commodo ullamcorper. </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <ScrollProgress/>
            <Link to="/Alienation">
                <PrevButton/>
            </Link>
            <motion.div variants={textAnimation} animate={showNext ? 'reveal' : 'hide'}>
                <Link to="/credits"><EndButton/></Link>
            </motion.div>
       </div>
    )
}

export default Homogenization