import React from "react";
import { motion } from "framer-motion";

const SoundWaveAnimation = () => {
  const waveCount = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  const animation = {
    height: [5, 15, 5]
    // y: [-5, 0, -5]
  };
  const waves = waveCount.map((wave, i) => (
    <motion.div
      key={i}
      animate={animation}
      transition={{
        repeat: Infinity,
        duration: 2,
        delay: i * 0.33
      }}
      className="wave"
    ></motion.div>
  ));

  return (
    <>
      <motion.div className="d-flex container">{waves}</motion.div>
    </>
  );
};

export default SoundWaveAnimation;
