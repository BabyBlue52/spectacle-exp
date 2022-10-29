import React, { useEffect, useState } from "react";
import FlipNumbers from "react-flip-numbers";
import { useLocation } from 'react-router-dom';
export default (props) => {
  const [slug, setSlug]= useState('Fragmentation');  
  const [chapter, setChapter] = useState('1')

  const location = useLocation();

  useEffect(() => {
    getURL();
 },[location])

 const getURL = () => {
  
     setSlug(window.location.pathname);
     switch (slug) {
             case '/':
                 setChapter('1')
                 break
             case '/commodification':
                 
                 setChapter('2')
                 break
             case '/negation':
                 
                 setChapter('3')
                 break
             case '/alienation':
                 
                 setChapter('4')
                 break
             case '/homogenization':
                 
                 setChapter('5')
                 break
             case '/credits':
                 break
             default:
                 break
         }
 }
  return (
    <div className="page-counter">
      <FlipNumbers
        height={21}
        width={21}
        background="white"
        play
        perspective={130}
        numbers={chapter}
      />
      <p className="page-max">
        <span className="slash">/</span>
        <span className="max">5</span>
      </p>
    </div>
  );
};
