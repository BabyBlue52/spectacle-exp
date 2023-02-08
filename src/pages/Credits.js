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
                <div className='content-wrapper'>
                    <h1>Credits</h1>
                    <motion.div variants={variants} animate={reveal ? 'show': 'hide'}>
                        <div className='link-set'>
                            <p><strong>Fragmentation</strong></p>
                            <a href="https://www.atomretro.com/product_info.cfm?product_id=16595&d=MARMALADE-RETRO-60s-MOD-FITTED-CONTRAST-TRIM-DRESS" target="_blank" rel="noreferrer">
                                <p>https://www.atomretro.com/product_info.cfm?product_id=16595&d=MARMALADE-RETRO-60s-MOD-FITTED-CONTRAST-TRIM-DRESS</p>
                            </a>
                        </div>
                        <div className='link-set'>
                            <p><strong>Commodifcation</strong></p>
                            <a href="https://www.fulltable.com/VTS/g/globe/gl.htm" target="_blank" rel="noreferrer">
                                <p>https://www.fulltable.com/VTS/g/globe/gl.htm</p>
                            </a>
                            <a href="https://www.ebay.com/itm/155201501443?chn=ps&mkevt=1&mkcid=28" target="_blank" rel="noreferrer">
                                <p>https://www.ebay.com/itm/155201501443?chn=ps&mkevt=1&mkcid=28</p>
                            </a>
                            <a href="https://www.flickr.com/photos/91591049@N00/16518783025/in/photostream/" target="_blank" rel="noreferrer">
                                <p>https://www.flickr.com/photos/91591049@N00/16518783025/in/photostream/</p>
                            </a>
                            <a href="http://www.therustycar.com/the-rusty-car/vintage-ad-1967-ford-thunderbird/2014/9/23" target="_blank" rel="noreferrer">
                                <p>http://www.therustycar.com/the-rusty-car/vintage-ad-1967-ford-thunderbird/2014/9/23</p>
                            </a>
                            <a href="https://www.heinzhistorycenter.org/blog/history-by-the-day-tuning-holidays-recalling-pittsburghs-connections-tv-holiday-special/" target="_blank" rel="noreferrer">
                                <p>https://www.heinzhistorycenter.org/blog/history-by-the-day-tuning-holidays-recalling-pittsburghs-connections-tv-holiday-special/</p>
                            </a>
                            <a href="https://www.thehistoryoftv.com/american-tv-ads" target="_blank" rel="noreferrer">
                                <p>https://www.thehistoryoftv.com/american-tv-ads</p>
                            </a>
                            <a href="https://www.pinterest.com/bluetantra/console-stereos-of-the-20th-century/" target="_blank" rel="noreferrer">
                                <p>https://www.pinterest.com/bluetantra/console-stereos-of-the-20th-century/</p>
                            </a>
                        </div>
                        <div className='link-set'>
                            <p><strong>Negation</strong></p>
                            <a href="https://www.flickr.com/photos/13476480@N07/7635043238" target="_blank" rel="noreferrer">
                                <p>https://www.flickr.com/photos/13476480@N07/7635043238</p>
                            </a>
                        </div>
                        <div className='link-set'>
                            <p><strong>Alienation</strong></p>
                            <a href="https://ultrakillblast.com/post/184203268843/earth-vs-the-flying-saucers-1956" target="_blank" rel="noreferrer">
                                <p><span>[1]</span>https://ultrakillblast.com/post/184203268843/earth-vs-the-flying-saucers-1956</p>
                            </a>
                            <a href="https://fineartamerica.com/featured/1960s-unhappy-sad-depressed-woman-vintage-images.html" target="_blank" rel="noreferrer">
                                <p><span>[2]</span>https://fineartamerica.com/featured/1960s-unhappy-sad-depressed-woman-vintage-images.html</p>
                            </a>
                        </div>
                        <div className='link-set'>
                            <p><strong>Homogenization</strong></p>
                            <a href="http://artscash.com/paintings-30.html" target="_blank" rel="noreferrer">
                                <p>http://artscash.com/paintings-30.html</p>
                            </a>
                        </div>
                        <div className='link-set'>
                            <p><strong>Small Screen</strong></p>
                            <a href="https://twitter.com/mubi/status/1510212125146456074" target='_blank' rel="noreferrer">
                                <p>https://twitter.com/mubi/status/1510212125146456074</p>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Link to="/homogenization">
                <PrevButton/>
             </Link>
        </div>
    )
}

export default CreditsPage