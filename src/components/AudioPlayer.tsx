import React from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import SoundWaveAnimation from "../animations/SoundWaveAnimation";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [muted, setMute] = React.useState<boolean>(false);
  const [replay, setReplay] = React.useState<boolean>(false);
  const url = "https://res.cloudinary.com/dzaaowrv5/video/upload/v1660598449/spectacular/theelevatorbossanova_zukgc3.mp3";

  const volume  = 0.2
  const onMute = () => {
    setMute(!muted);
  };
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setReplay(false);
  };
  const toggleReplay = () => {
    setReplay(true);
    setIsPlaying(false);
  };

  // Keyboard Shourtcuts
  React.useEffect(() => {
    const handle = (e: { code: string; }) => {
      if (e.code === "KeyP") {
        setIsPlaying(!isPlaying);
      } else {
        return
      }
    };

    window.addEventListener("keydown", handle);
    return () => {
      // On unmount
      window.removeEventListener("keydown", handle);
    };
  }, [isPlaying]);
  
  const Line = () => {
    return (
      <div className="line">
        <svg id="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 10">
          <g id="Layer_1-2">
            <rect y="0" width="166" height="5" rx="4.5" ry="4.5" />
          </g>
        </svg>
      </div>
    );
  };

  return (
    <div className="audio-wrapper _dropShadow">
      <ReactPlayer
        url={url}
        playing={isPlaying}
        className="hide"
        muted={muted}
        volume={volume}
        onEnded={toggleReplay}
      />
      {/* Begin Audio only controls + Animation */}
      <div className="audio-controls _dropShadow">
        <div className="mute" onClick={onMute}>
          {muted ? (
            <div id="mute" className="icon">
              <FaVolumeMute />
            </div>
          ) : (
            <div id="unmute" className="icon">
              <FaVolumeUp />
            </div>
          )}
        </div>
        <div className={replay ? "hide" : "play-pause"} onClick={togglePlay}>
          {isPlaying ? (
            <div id="pause" className="icon">
              <FaPause />
            </div>
          ) : (
            <div id="play" className="icon">
              <FaPlay />
            </div>
          )}
        </div>
        {/* Replay action */}
        <div className={replay ? "replay" : "hide"} onClick={togglePlay}>
          <div id="replay" className="icon">
            <MdReplay />
          </div>
        </div>
        {/* Animation  */}
        <div className="animation" onClick={togglePlay}>
          {isPlaying ? <SoundWaveAnimation /> : <Line />}
        </div>
      </div>
    </div>
  );
}
