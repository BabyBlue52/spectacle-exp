import React = require("react")
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Link } from 'react-router-dom';

import HUD from './components/HUD';
import Fragmenatation from './pages/Fragmentation';
import Commodification from './pages/Commodification';
import Negation from './pages/Negation';
import Alienation from './pages/Alienation';
import Homogenization from './pages/Homogenization';

import { MenuDrawer } from './components/MenuDrawer';
import CoverPage from './pages/Cover';
import CreditsPage from './pages/Credits';
import ToastMessage from './components/ToastMessage';
import shades from './img/shades.svg';

function App() {
  const [isCover, setIsCover] = useState<boolean>(false);
  const [pageTitle, setPageTitle]= useState<string>('Fragmentation');
  const [slug, setSlug]= useState<string>('');
  let [chapter, setChapter] = useState<string>('');
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const location = useLocation();
  

  useEffect(() => {
    
    getURL();
    window.addEventListener("resize", detectMobile);
    setWidth(window.innerWidth)
    detectMobile();
  })

  useEffect(() => {
    getURL();
    
    window.scrollTo(0, 0);
  },[location.pathname])

  const detectMobile = () => {
    if((window.innerWidth < 900)) {    
      setIsMobile(true);
    } else {
      setIsMobile(false)
    }
  }
  

 const getURL = () => {
  setSlug(location.pathname); 
  
    switch (slug) {
              case '/':
                setIsCover(true);
                break
              case '/fragmentation':
                setIsCover(false);
                 setPageTitle('fragmentation')
                 setChapter(chapter = '1')
                 break
              case '/commodification':
                setIsCover(false);
                 setPageTitle('commodification')
                 setChapter(chapter = '2')
                 break
              case '/negation':
                setIsCover(false);
                 setPageTitle('negation')
                 setChapter(chapter = '3')
                 break
              case '/alienation':
                setIsCover(false);
                 setPageTitle('alienation')
                 setChapter(chapter = '4')
                 break
              case '/homogenization':
                setIsCover(false);
                 setPageTitle('homogenization')
                 setChapter(chapter = '5')
                 break
              case '/credits':
                 setIsCover(false);
                 setPageTitle('Credits')
                 break
             default:
                 break
         }
 }
  if(!isMobile){
    return (
      <>
      <div className='app'>
        <div className='overlay'></div>
        <MenuDrawer/>
        <Routes>
          <Route path="/" element={<CoverPage/>}/>
          <Route path='/fragmentation' element={<Fragmenatation/>} />
          <Route path='/commodification' element={<Commodification/>} />
          <Route path='/negation' element={<Negation/>} />
          <Route path='/alienation' element={<Alienation/>} />
          <Route path='/homogenization' element={<Homogenization/>} />
          <Route path='/credits' element={<CreditsPage/>} />
        </Routes>
        <div className={isCover ? 'hidden' : ''}>
          <HUD chapter={chapter} pageTitle={pageTitle} pageNumber={chapter}/>
        </div>
        <ToastMessage/>
      </div>
      
      </>
    ); 
  } return (
      <>
      <div className='detect-mobile'>
        <img className='jack' src='https://res.cloudinary.com/dzaaowrv5/image/upload/v1673929863/spectacular/sorryJack_lj8d5y.png' />
        <div className='centered'>
          <div className='content'>
            <img src={shades}/>
            <h1> Sorry, jack...</h1>
            <p> This device is to small to display <br/> <span>Society of The Spectacle.</span></p>  
            <p> Please try again on a desktop screen at least <i>1024px</i> wide, ya dig?</p>
            <a href="https://chrishennemann.xyz">
              <button className='resume'>Check Out my website</button>
            </a>
          </div>
        </div>
      </div>
      </>
    )  
}

export default App;
