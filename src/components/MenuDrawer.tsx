import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose, MdOutlineMenuOpen } from "react-icons/md";
import { Link } from 'react-router-dom';

export const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chapters = [
    { name: "Cover", link: '/' },
    { name: "chapter 1", subtitle: "Fragmentation", link: '/fragmentation' },
    { name: "chapter 2", subtitle: "Commodification", link: '/commodification' },
    { name: "chapter 3", subtitle: "Negation", link: '/negation' },
    { name: "chapter 4", subtitle: "Alienation", link: '/alienation' },
    { name: "chapter 5", subtitle: "Homogenization", link: '/homogenization' },
    { name: "credits", link: '/credits'}
  ];

  const slideIn = {
    x: 250
  };
  const initial = {
    x: 0
  };

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    visible: { x: 0 },
    hidden: { x: -250 }
  };

  const locked = {
    opacity: .33,
  }

  const unlocked = {
    opacity: 0,
  }

  // Keyboard Shourtcuts
  useEffect(() => {
    const handle = (e: { code: string; }) => {
      if (e.code === "KeyM") {
        setIsOpen(!isOpen);
      } else {
        return
      }
    };

    window.addEventListener("keydown", handle);
    return () => {
      // On unmount
      window.removeEventListener("keydown", handle);
    };
  }, [isOpen]);


  const chapterLoop = chapters.map((chapter, i) => (
    <motion.div
      key={i}
      className="block"
      animate={isOpen ? slideIn : initial}
      transition={{
        duration: 0.1,
        delay: i * 0.15
      }}
    >
      <Link to={`${chapter.link}`}>
        <h2>{chapter.name}</h2>
        <p className="subtitle">{chapter.subtitle}</p>
      </Link>
    </motion.div>
  ));

  
 

  return (
    <>
      {/* Menu Button Toggle */}
      <button className={isOpen ? "menu-btn invert" : "menu-btn"} onClick={openMenu}>
        {isOpen ? <MdOutlineClose /> : <MdOutlineMenuOpen />}
      </button>
      <motion.div 
      className={ isOpen ? "locked" : ""}
      animate={isOpen ? locked : unlocked}
      transition= {{
        delay: 0.33
      }}
      onClick={() => {setIsOpen(false)}}
      ></motion.div>
      <motion.div
        className="menu-wrapper"
        animate={isOpen ? "visible" : "hidden"}
        initial="hidden"
        variants={variants}
        transition={{
          duration: 0.7
        }}
      >
        <div className="menu-container">
          <div className="menu-header"></div>
          <div className="chapters">{chapterLoop}</div>
        </div>
      </motion.div>
        
    </>
  );
};
