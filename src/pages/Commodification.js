import React, {useEffect, useState} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import ScrollProgress from "../components/ScrollProgress";
import { NextButton, PrevButton } from "../components/Buttons";
import { Link } from 'react-router-dom';

function Commodification() {
    const carousel = [
        {'img' :'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/yonok0b5t4oapm_psis4y.jpg'},
        {'img' : 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/8vzxxdpwr0im1o_nnnokh.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/scq3iftpeydq22_j0ubwb.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/k0hf6pqs9hefj4_wjrvgz.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/almjf2sebcg2u6_xkbgwm.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/38s8y1qdt2jk7i_jjov9h.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/2i21gyrbm6n40a_azcapj.jpg'},
        {'img' :'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/yonok0b5t4oapm_psis4y.jpg'},
        {'img' : 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/8vzxxdpwr0im1o_nnnokh.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/scq3iftpeydq22_j0ubwb.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/k0hf6pqs9hefj4_wjrvgz.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/almjf2sebcg2u6_xkbgwm.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/38s8y1qdt2jk7i_jjov9h.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/2i21gyrbm6n40a_azcapj.jpg'},
    ]

    // Scroll Progress Boiler plate
    const { scrollYProgress } = useScroll();
    const [currentPercent, setCurrentPercent] = useState(0);
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
    
    const [textReveal, setTextReveal] = useState(false);

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
        } else if  (yRange.current > 20) {
            setTextReveal(true)
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

    return(
        <div className="page sunset">
            <div className="commodification"> 
            <div className="text-content">
                    <div className="blurb" >
                        <motion.div variants={textAnimation} animate={textReveal ? 'reveal' : 'hide'}>
                            <p>reveal</p>
                        </motion.div>
                    </div>
                </div>
                <div class='slider'>
                    <div className='slide-track'>
                    {carousel.map((picture, i) => (
                        <div key={i} className='slide'>
                            <img src={carousel[i].img}/>
                        </div>
                    ))} 
                    </div>
                </div>
             </div>
             
             <ScrollProgress/>
             <Link to="/negation">
                <NextButton/>
             </Link>
             <Link to="/">
                <PrevButton/>
             </Link>
        </div>
    )
}

export default Commodification