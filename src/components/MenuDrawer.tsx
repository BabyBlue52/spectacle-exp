import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose, MdOutlineMenuOpen } from "react-icons/md";

export const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chapters = [
    { name: "chapter 1", subtitle: "Fragmentation" },
    { name: "chapter 2", subtitle: "Commodification" },
    { name: "chapter 3", subtitle: "Negation" },
    { name: "chapter 4", subtitle: "Alienation" },
    { name: "chapter 5", subtitle: "Homogenization" },
    { name: "credits" }
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
      <h2>{chapter.name}</h2>
      <p className="subtitle">{chapter.subtitle}</p>
    </motion.div>
  ));

  return (
    <>
      {/* Menu Button Toggle */}
      <button className={isOpen ? "menu-btn invert" : "menu-btn "} onClick={openMenu}>
        {isOpen ? <MdOutlineClose /> : <MdOutlineMenuOpen />}
      </button>

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
