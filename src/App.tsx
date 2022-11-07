import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HUD from './components/HUD';
import Fragmenatation from './pages/Fragmentation';
import Commodification from './pages/Commodification';
import Negation from './pages/Negation';
import Alienation from './pages/Alienation';
import Homogenization from './pages/Homogenization';

import { MenuDrawer } from './components/MenuDrawer';
import SplashPage from './pages/Splash';

function App() {
  const [isSplash, setIsSplash] = useState<boolean>(false);
  const [pageTitle, setPageTitle]= useState<string>('Fragmentation');
  const [slug, setSlug]= useState<string>('');
  const [chapter, setChapter] = useState<string>()
  const location = useLocation();

  useEffect(() => {
    
    getURL();
    console.log(slug)
    window.scrollTo(0, 0)
  },[location.pathname])

  useEffect (() => {
      
      
  },[])
  
 const getURL = () => {
  setSlug(location.pathname);
    switch (slug) {
              case '/':
                setIsSplash(true);
                break
              case '/fragmentation':
                setIsSplash(false);
                 setPageTitle('fragmentation')
                 setChapter('1')
                 break
              case '/commodification':
                setIsSplash(false);
                 setPageTitle('commodification');
                 setChapter('2')
                 break
              case '/negation':
                setIsSplash(false);
                 setPageTitle('negation')
                 setChapter('3')
                 break
              case '/alienation':
                setIsSplash(false);
                 setPageTitle('Alienation')
                 setChapter('4')
                 break
              case '/homogenization':
                setIsSplash(false);
                 setPageTitle('homogenization')
                 setChapter('5')
                 break
              case '/credits':
                 setIsSplash(true);
                 setPageTitle('Credits')
                 break
             default:
                 break
         }
 }
  return (
    <div>
      <div className='overlay'></div>
      <MenuDrawer/>
      <Routes>
        <Route path="/" element={<SplashPage/>}/>
        <Route path='/fragmentation' element={<Fragmenatation/>} />
        <Route path='/commodification' element={<Commodification/>} />
        <Route path='/negation' element={<Negation/>} />
        <Route path='/alienation' element={<Alienation/>} />
        <Route path='/homogenization' element={<Homogenization/>} />
      </Routes>
      <div className={isSplash ? 'hidden' : ''}>
        <HUD chapter={chapter} pageTitle={pageTitle} pageNumber={chapter}/>
      </div>
    </div>
  );
}

export default App;
