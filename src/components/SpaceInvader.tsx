import { motion } from "framer-motion";
import { useState } from "react";
import ReactPlayer from "react-player"; 

export default function SpaceInvader() {
  const [struggle, setStruggle] = useState(false);
  const [stun, setStun] = useState(false);

  const spaceShip = "https://res.cloudinary.com/dzaaowrv5/image/upload/v1665628394/spectacular/tumblr_pq0aw3S3x91x6m6njo1_1280_copy_tnrndi.png"
  const boop = "https://res.cloudinary.com/dzaaowrv5/video/upload/v1669683075/spectacular/344310__musiclegends__laser-shoot_zxldag.wav"
  
  const shipStruggle = () => {
    setStruggle(true);
  };
  const releaseMe = () => {
    setStruggle(false);
  };
  const strike = () => {
    setStun(true);
    setTimeout(() => {
      setStun(false);
    }, 1000);
  };

  const variants = {
    hide: { opacity: 0 },
    show: { opacity: [1, 0.5, 0], y: ["0%", "150%"] }
  };
  const transition = {
    duration: 15,
    ease: "linear",
    repeat: Infinity
  };

  return (
    <div>
      <div className="flight-path">
        <motion.div
          className="box"
          animate={{
            x: ["-1vw", "81vw", "-1vw"]
          }}
          transition={transition}
        >
          <motion.div
            className={struggle ? "space-ship wiggle " : "space-ship"}
            onHoverStart={(e) => {
              shipStruggle();
            }}
            onHoverEnd={(e) => {
              releaseMe();
            }} 
            onTap={(e) => {
              strike();
            }}
          >
            <div className="hidden">
              <ReactPlayer
                volume={0.5} 
                url={boop}
                playing={stun? true : false} 
              />
            </div>
            <img src={spaceShip} />
          </motion.div>
        </motion.div>
      </div>
      <div className="skyfall">
        <motion.div
          className="container"
          animate={{
            x: ["-1vw", "81vw", "-1vw"]
          }}
          transition={transition}
        >
          <motion.div
            className="lightning"
            initial="hide"
            animate={stun ? "show" : "hide"}
            variants={variants}
            transition={{
              duration: 0.7,
              ease: "linear"
            }}
          >
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fpaomedia%2Fsmall-n-flat%2F1024%2Flightning-icon.png&f=1&nofb=1&ipt=2a642b94cda134fc9ef76c748d8298c4869569e9a5cae078b6b8ffd5268f4cc1&ipo=images" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
