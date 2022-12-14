import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

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

function App() {
  const [isCover, setIsCover] = useState<boolean>(false);
  const [pageTitle, setPageTitle]= useState<string>('Fragmentation');
  const [slug, setSlug]= useState<string>('');
  let [chapter, setChapter] = useState<string>('');
  const location = useLocation();
  let token

  useEffect(() => {
    getURL();
    // setChapter('')
  })

  useEffect(() => {
    getURL();
    window.scrollTo(0, 0);
  },[location.pathname])

  

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
  return (
    <div>
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
  );
}

export default App;
