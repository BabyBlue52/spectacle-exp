import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const [currentPercent, setCurrentPercent] = useState(0);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(
    () =>
      yRange.onChange((v) => {
        setCurrentPercent(Math.trunc(yRange.current));
      }),

    [yRange]
  );
  const pageChecker = () => {
    if (currentPercent === 100) {
      console.log("End Page");
    } else if (currentPercent === 0) {
      console.log("Start Page");
    }
  };

  pageChecker();

  return (
    <React.Fragment>
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />  
    </React.Fragment>
  );
}
