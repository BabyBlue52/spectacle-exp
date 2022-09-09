import React, {useState, useEffect} from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollProgress from "../components/ScrollProgress";


function Fragmenatation() {
    const empty = '';
    const head = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1662169571/spectacular/marmalade_head_hzfaox.png';
    const dress = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1662169571/spectacular/marmalade_dress_zo8par.png';
    const leggy = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1662169600/spectacular/marmalade_legs_xcbnrr.png';

    const { scrollYProgress } = useScroll();
    const [currentPercent, setCurrentPercent] = useState(0);
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
    
    const [headTrigger, setHeadTrigger] = useState(false);
    const [legsTrigger, setLegsTrigger] = useState(false);

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
        
    function getPosition() {
        if(yRange.current > 15) {
            setHeadTrigger(true)
            setLegsTrigger(true)
        } else {
            setHeadTrigger(false)
            setLegsTrigger(false)
        }
    }    

    const variants = {
        initial: {
            x: 0,
            scale: 1.0,
            transition: { duration: 3 }
        },
        driftLeft: {
            x: '-25vw',
            scale: 1.1,
            transition: { duration: 3 }
        },
        driftRight: {
            x: '25vw',
            scale: 1.1,
            transition: { duration: 3 }
        }
    }

    return (
        <div className="page manila">
            <div className="fragmentation"> 
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
            <ScrollProgress/>
        </div>
    )
}

export default Fragmenatation