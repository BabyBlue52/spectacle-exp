import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { PrevButton } from '../components/Buttons';
import wiki from '../img/wikipedia.svg';
import book from '../img/book.svg';
import { LoadingBar } from '../animations/LoadSpinner';

function CreditsPage () {
    const [reveal, setReveal] = useState(false);

    const src = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1667870918/spectacular/guyDebord_ywqidh.jpg'
    
    useEffect(() => {
        setTimeout(() => {
            setReveal(true)
        }, 750)
        
    })
    const variants = {
        hide: {
            opacity: 0,
            y: '1000px',
        },
        show: {
            opacity: 1,
            y: '0px',
            transition: { duration: 1 , delayChildren: 0.5}
        }
    }
    return (
        <div className='page'>
            <div className='credits'>
                <div className='credit-link'>
                    
                    <img src={src} className="photo _dropShadow" alt="guy debord and the boys"/>
                    <img src="http://www.clker.com/cliparts/B/V/P/X/Z/e/thumbtack-pushpin-2-hi.png" className='pin'/>
                    <div className='flex author'>
                        <img className="svg" src={wiki}/>
                        <a href="https://en.wikipedia.org/wiki/Guy_Debord" target="_blank" rel="noreferrer">
                            <div className='border'>
                                <h3>Guy Debord, 1931 - 1994</h3>
                                <div/>
                            </div>
                        </a>
                    </div>
                    <div className='flex author'>
                        <img className="svg" src={book} style={{'overlay':'white'}}/>
                        <a href="https://www.goodreads.com/book/show/381440.The_Society_of_the_Spectacle" target="_blank" rel="noreferrer">
                            <div className='border'>
                                <h3>Society of the spectacle, 1967 </h3>
                                <div/>
                            </div>
                        </a>
                    </div>
                </div>
                
                <motion.div className='content-wrapper' variants={variants} animate={reveal ? 'show': 'hide'}>
                    <h1>Credits</h1>
                    <p>Negation</p>
                    <a href="https://www.flickr.com/photos/13476480@N07/7635043238" target="_blank" rel="noreferrer">
                        
                        <p><span>[1]</span>https://www.flickr.com/photos/13476480@N07/7635043238</p>
                    </a>
                </motion.div>
            </div>
            <Link to="/homogenization">
                <PrevButton/>
             </Link>
        </div>
    )
}

export default CreditsPage