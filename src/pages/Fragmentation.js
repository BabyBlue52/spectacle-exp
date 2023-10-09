import React, {useState, useEffect} from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import ScrollProgress from "../components/ScrollProgress";
import { NextButton } from "../components/Buttons";
import { LoadingBar } from "../animations/LoadSpinner";


function Fragmenatation() {
    const head = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1662169571/spectacular/marmalade_head_hzfaox.png';
    const dress = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1666233496/spectacular/marmalade_dress_iz6jak.png';
    const leggy = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1662169600/spectacular/marmalade_legs_xcbnrr.png';

    const { scrollYProgress } = useScroll();
    const [currentPercent, setCurrentPercent] = useState(0);
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
    
    const [headTrigger, setHeadTrigger] = useState(false);
    const [legsTrigger, setLegsTrigger] = useState(false);
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
            setHeadTrigger(false)
            setLegsTrigger(false)
            setTextReveal(false)
        }
        if ( 25 < yRange.current ) {
            setTextReveal(true)
        }
        if ( 33 < yRange.current ){ 
            setHeadTrigger(true)
            setLegsTrigger(true)
        }   
        if ( 80 < yRange.current) {
            setShowNext(true)
        }
    }    

    const variants = {
        initial: {
            x: 0,
            scale: 1.0,
            transition: { duration: 5 }
        },
        driftLeft: {
            x: '-25vw',
            scale: 1.25,
            transition: { duration: 5 }
        },
        driftRight: {
            x: '25vw',
            scale: 1.05,
            transition: { duration: 5 }
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
        <div>
        
        <div className="page manila">
            <LoadingBar/>    
            <div className="fragmentation"> 
                <div className="text-content">
                    <div className="blurb" >
                        <motion.div variants={textAnimation} animate={textReveal ? 'reveal' : 'hide'}>
                            <div className="left">
                                <p>The spectacle shatters larger illusions and the pieces cannot be reassembled. An economy or market is a good example. Commerce of one item is categorized and cataloged into an industry, bound to compete only with like objects.</p> 
                                <p>These shards mirror the way a fragmented populace relates to each other, in reference, in mere signs. One’s life is separated into segments: work/leisure, hobby/career, week/weekend. This bifurcation applies on different orders of magnitude. The spectacle conjures “being” into “having.</p>
                                <p>What does one’s possessions say about them? How do they fit together to for a grander, holistic self? Even as trivial as shoe choice conveys a personality trait on the wearer. They come as</p>
                            </div>
                        </motion.div>
                        <motion.div variants={textAnimation} animate={textReveal ? 'delayed' : 'hide'}>
                                <div className="right">
                                <p> reference to the image and setting from which they have been carefully crafted and sold to the public.</p>
                                <p>The most common response is loyalty. A tithe paid to these commodities as a way of no longer having to consider the wide array of options for any and all objects of desire. </p>
                                <p>A <span style={{"display":"contents"}}>society of the spectacle</span> is asleep to the fact that its bedrock is the fragmenting economy. Classes, sub-classes, imaginary lines drawn in the sand, while the beach is eroded away. The spectacle lapping at the shores ready to washaway and redefine the landscape as per the whims of a fickle mass market.</p>
                                </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div className="moving" variants={variants} animate={headTrigger ? 'driftLeft' : 'initial'}>
                    <img src={head} alt="" className="head"/>
                </motion.div>
                <motion.div className="moving">
                    <img src={dress} alt="" className="dress"/>
                </motion.div>
                <motion.div className="moving" variants={variants} animate={legsTrigger ? 'driftRight' : 'initial'}>
                    <img src={leggy} alt="" className="leggy"/>  
                </motion.div>
            </div> 
            <ScrollProgress />

            {/* Reveal nexxt button */}
            <motion.div variants={textAnimation} animate={showNext ? 'reveal' : 'hide'}>
                <Link to="/commodification"><NextButton/></Link>
            </motion.div>
            <Link to="/commodification"><NextButton/></Link>
        </div>
        </div>
    )
}

 
export default Fragmenatation