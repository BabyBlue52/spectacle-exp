import React, { useEffect, useState } from "react";
import FlipNumbers from "react-flip-numbers";
import { useLocation } from 'react-router-dom';
export default (props) => {
  const [slug, setSlug]= useState('');  
  const [chapter, setChapter] = useState('1')
  const [isCredits, setIsCredits] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSlug(location.pathname);
    getURL();
 },[location.pathname])

 const getURL = () => {
    //  window.alert(slug)
     switch (slug) {
             case '/fragmentation':
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
                
                setIsCredits(true)
                break
             default:
                 break
         }
 }
  return (
    <div className={isCredits ? "hidden" : "page-counter"}>
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
