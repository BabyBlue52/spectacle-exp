import React from 'react';
import { motion } from 'framer-motion';

function CreditsPage () {
    const src = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1667870918/spectacular/guyDebord_ywqidh.jpg'
    return (
        <div className='credits page'>
            <div>
                <a href="https://en.wikipedia.org/wiki/Guy_Debord" target="_blank">
                <img src={src}/>
                </a>
            </div>
            
            <motion.div className='content-wrapper'>
                <h1>Credits</h1>
            </motion.div>
        </div>
    )
}

export default CreditsPage