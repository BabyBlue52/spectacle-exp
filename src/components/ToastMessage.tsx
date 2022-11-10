import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Hint } from "../img/hint.svg";

function ToastMessage() {
  const [showHint, setShowHint] = useState<boolean>(false);

  useEffect(() => {
    //Let hint sit for 10 seconds

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
