import React, { useState, useEffect } from 'react';
import ScrollAnimation from '../animations/ScrollAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';
import svg from '../icon/society.svg';

function SplashPage () {
    // Scroll Progress Boiler plate
    const { scrollYProgress } = useScroll();
    const [currentPercent, setCurrentPercent] = useState(0);
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
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
        if ( yRange.current > 10 ) {
            window.location.pathname = '/fragmentation'
        }
    }
    return(
        <motion.div className='splash page'>
            <div className='society'>
                <img src={svg}/>
            </div>
            <ScrollAnimation/>
        </motion.div>
    )
}
export default SplashPage