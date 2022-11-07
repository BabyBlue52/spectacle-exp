import React, { useState, useEffect } from 'react';
import ScrollAnimation from '../animations/ScrollAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';
import svg from '../icon/society.svg';

function CoverPage () {
    const [hidden, setHidden] = useState(false);

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
        if (( yRange.current < 1 )) {
            setHidden(false)
        }
        if (( yRange.current > 1 )) {
            setHidden(true)
        }
        if ( yRange.current > 5 ) {
            window.location.pathname = '/fragmentation'
        }
    }

    const variants = {
        show: {
            opacity: 1,
            transition: { duration: .5 }
        },
        hide: {
            opacity: 0,
            transition: { duration: .5 }
        }
    }
    return(
        <div className='page cover'>
            <motion.div className='society' 
            variants={variants}
            animate={hidden ? 'hide' :'show'}>
                <img src={svg}/>
            </motion.div>
            <ScrollAnimation/>
        </div>
    )
}
export default CoverPage