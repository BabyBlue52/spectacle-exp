import React, {useState, useEffect} from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import ScrollProgress from "../components/ScrollProgress";
import { NextButton } from "../components/Buttons";


function Fragmenatation() {
    const head = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1662169571/spectacular/marmalade_head_hzfaox.png';
    const dress = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1662169571/spectacular/marmalade_dress_zo8par.png';
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
        if ( 90 < yRange.current) {
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

    const paragraph1 = "The Commodity takes all of the human wants and desires which are made into an objects of attaining to simulate that lifestyle."
    const paragraph2 = "It shatters these realities to reconstruct in its own narrative form. a cohesion in which dissidence is swiftly met with flak, mockery."

    return (
        <div className="page manila">
            <div className="fragmentation"> 
                <div className="text-content">
                    <div className="blurb" >
                        <motion.div variants={textAnimation} animate={textReveal ? 'reveal' : 'hide'}>
                            <p>{paragraph1}</p>
                        </motion.div>
                        <motion.div variants={textAnimation} animate={textReveal ? 'delayed' : 'hide'}>
                            <p style={{'bottom': '20px'}}>{paragraph2}</p>
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
                {/* Staging */}
                 <p className="sticky">{currentPercent}</p>
                 
            </div> 
            <ScrollProgress />

            {/* Reveal nexxt button */}
            <motion.div variants={textAnimation} animate={showNext ? 'reveal' : 'hide'}>
                <Link to="/commodification"><NextButton/></Link>
            </motion.div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       counter: state
    };
 };
 
export default connect(mapStateToProps)(Fragmenatation)