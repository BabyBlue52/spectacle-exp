import React = require("react")
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Hint } from "../img/hint.svg";

function ToastMessage() {
  const [showHint, setShowHint] = useState<boolean>(false);
  const [cookie, setCookie] = useState<boolean>(false);
  let token

  useEffect(() => {
    checkToken()
    //Let hint sit for 30 seconds
    setTimeout(() => {
        dismiss()
    }, 30000);
    
  }, []);
  const variants = {
    show: { 
        y: [0, 300]
    },
    hide: { 
        y: [300, 0],
        transition: {delay: 5}
    }

  };
  const dismiss = () => {
    setShowHint(true);
    // localStorage.setItem('toast dismissed','1'); 
  }

  const checkToken = () => {
    token = localStorage.getItem('toast dismissed')
    if(token === '1') {
      setCookie(true);
    }
  }
  if(cookie) {
    return (
      <div/>
    )
  }
  return (
    <motion.div
      initial="show"
      variants={variants}
      animate={showHint ? "show" : "hide"}
      onTap={() => {
        dismiss();
      }}
      className="toast-wrapper"
      transition={{
        duration: 1,
        ease: "linear"
      }}
    >
      <div className="icon">
        <Hint />
      </div>
      <div className="text">
        <p>
          Press <span>M</span> to toggle menu
        </p>
      </div>
    </motion.div>
  );
}

export default ToastMessage;
