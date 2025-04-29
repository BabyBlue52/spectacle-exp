import React from "react"
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { motion } from 'framer-motion';

export const LoadingBar = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [disable, setDisable] = useState<Boolean>(true); 

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        setTimeout(() => {
            setDisable(false);
        }, 3600);
    });
  
    const variants = {
        show: { 
            opacity: 1,
            transition: { duration: 1 }
        },
        hide: { 
            opacity: 0,
            transition: { duration: 1 }
        }
    }
  
    return (
        <motion.div 
            variants={variants}
            animate={isLoading ? 'show' : 'hide'}
            className={disable ? "loading-screen" : "hidden"} >
            <div className= "loading-animation" >
                <BarLoader color="#050517"/>
                <p>Keep Scrolling</p>
            </div>
            {}
        </motion.div>
    );
  }

