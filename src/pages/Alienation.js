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
                            <p>Not just from others, but also from one’s self. What pieces of fragmented identity can be cobbled together can never exist as a complete personal mosaic. To promulgate this ostracization, the spectacle flings the pieces of psyche far from the host and drills down on the vulnerable shards. Each shard yearns for completeness, but in every direction they turn they are met with the spectacle armed to the teeth with inadequacies. </p>
                            <p>The person is even alienated from the rewards of her labor, dissociated from other departments let alone the profits of her services rendered. An individual is self-interested, isolated from her friends, colleagues and community. Harkening back to the marxist outcry, work is losing its meaning. </p>
                        </motion.div>
                        <motion.div className="right" variants={textAnimation} animate={textReveal2 ? 'reveal' : 'hide'}>
                            <p>It begins to define the tempo of her life instead of her expressing herself and orchestrating the parts into a harmony.</p>
                            <p>These communities she finds herself in are just a stack of individuals always, defined by their differences. The spectacle sees these differences and adds a layer of abstract freedom to their lives to pacify the outrage. Realizing that human desire for meaning, the spectacle parades new better alternative commodities to replace the old, but not to break rank, points to a version of the same old distraction from the economic strife required for the system to operate. </p>
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
            <Link to="/homogenization">
                    <NextButton/>
                </Link>
             <Link to="/negation">
                <PrevButton/>
             </Link>
        </div>
    ) 
}

export default Alienation 
