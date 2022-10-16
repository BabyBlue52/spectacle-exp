import React, { useState, useEffect, useRef } from "react";
import { setCommentRange } from "typescript";

export default function CursorTracker() {
  // UseRef allows use later on, refer2
  const dot = useRef(null);
  const dotOutline = useRef(null);
  const svg = useRef(null);

  // const delay = 3;

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const [isHover, setIsHover] = useState(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  const timeMag = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1664660424/spectacular/05ec98d72cbb5b7d2800112285f8a816_yunmiz.jpg';

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    animateDotOutline();

    return () => {
      
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  });
  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(0.75)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(2)";
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };

  const mouseEnterEvent = (e) => {
    cursorEnlarged.current = true;
    toggleCursorSize();
    setIsHover(true)
    
  };

  const mouseLeaveEvent = (e) => {
    cursorEnlarged.current = false;
    toggleCursorSize();
    setIsHover(false);
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  const animateDotOutline = () => {
    _x.current += endX.current - _x.current;
    _y.current += endY.current - _y.current;

    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };


  return (
    <div className="tracking-area">
      <div ref={dot} className="cursor-dot"></div>
      <div ref={dotOutline} className="cursor-dot-outline"></div>

      <img 
        src={timeMag} 
        onMouseEnter={mouseEnterEvent} 
        onMouseLeave={mouseLeaveEvent} 
      />
     
    </div>
  );
}
