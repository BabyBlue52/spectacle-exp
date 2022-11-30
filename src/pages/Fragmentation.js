import React, {useState, useEffect} from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import ScrollProgress from "../components/ScrollProgress";
import { NextButton } from "../components/Buttons";
import { LoadingBar } from "../components/LoadSpinner";


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
                                <p>The Commodity takes all of the human wants and desires which are made into an objects of attaining to simulate that lifestyle.</p> 
                                <p>Neque convallis a cras semper auctor neque vitae tempus quam. Semper auctor neque vitae tempus quam pellentesque nec nam. At lectus urna duis convallis convallis. Cras ornare arcu dui vivamus arcu. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Arcu dictum varius duis at consectetur. Eu facilisis sed odio morbi quis. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Vulputate mi sit amet mauris commodo. Tristique senectus et netus et malesuada fames ac turpis. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Quam id leo in vitae turpis massa.</p>
                                <p>Egestas diam in arcu cursus euismod. Ut placerat orci nulla pellentesque dignissim enim. Penatibus et magnis dis parturient. Massa tincidunt dui ut ornare lectus. Elit duis tristique sollicitudin nibh sit amet. Nisl tincidunt eget nullam non nisi est sit. Sed ullamcorper morbi tincidunt ornare massa eget. In pellentesque massa placerat duis ultricies lacus sed turpis. Orci dapibus ultrices in iaculis nunc sed augue. Pellentesque dignissim enim sit amet. Sed adipiscing diam donec adipiscing tristique. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Id nibh tortor id aliquet lectus proin.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={textAnimation} animate={textReveal ? 'delayed' : 'hide'}>
                                <div className="right">
                                <p> It shatters these realities to reconstruct in its own narrative form. a cohesion in which dissidence is swiftly met with flak, mockery.</p>
                                <p>Neque convallis a cras semper auctor neque vitae tempus quam. Semper auctor neque vitae tempus quam pellentesque nec nam. At lectus urna duis convallis convallis. Cras ornare arcu dui vivamus arcu. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Arcu dictum varius duis at consectetur. Eu facilisis sed odio morbi quis. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Vulputate mi sit amet mauris commodo. Tristique senectus et netus et malesuada fames ac turpis. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Quam id leo in vitae turpis massa.</p>

                                <p>Egestas diam in arcu cursus euismod. Ut placerat orci nulla pellentesque dignissim enim. Penatibus et magnis dis parturient. Massa tincidunt dui ut ornare lectus. Elit duis tristique sollicitudin nibh sit amet. Nisl tincidunt eget nullam non nisi est sit. Sed ullamcorper morbi tincidunt ornare massa eget. In pellentesque massa placerat duis ultricies lacus sed turpis. Orci dapibus ultrices in iaculis nunc sed augue. Pellentesque dignissim enim sit amet. Sed adipiscing diam donec adipiscing tristique. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Id nibh tortor id aliquet lectus proin.</p>
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
        </div>
        </div>
    )
}

 
export default Fragmenatation