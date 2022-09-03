import React from "react";
import { motion } from 'framer-motion';
import ScrollProgress from "../components/ScrollProgress";

function Fragmenatation() {
    const head = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1662169571/spectacular/marmalade_head_hzfaox.png';
    const dress = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1662169571/spectacular/marmalade_dress_zo8par.png';
    const leggy = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1662169600/spectacular/marmalade_legs_xcbnrr.png';
    return (
        <div className="page">
            <div className="fragmentation">
                <motion.div className="moving">
                    <img src={head} alt="" className="head"/>
                </motion.div>
                <motion.div className="moving">
                    <img src={dress} alt="" className="dress"/>
                </motion.div>
                <motion.div className="moving">
                    <img src={leggy} alt="" className="leggy"/>
                </motion.div>
            </div> 
            <ScrollProgress/>
        </div>
    )
}

export default Fragmenatation