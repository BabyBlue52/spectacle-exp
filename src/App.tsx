import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HUD from './components/HUD';
import Fragmenatation from './pages/Fragmentation';
import Commodification from './pages/Commodification';
import Negation from './pages/Negation';
import Alienation from './pages/Alienation';
import Homogenization from './pages/Homogenization';

import { MenuDrawer } from './components/MenuDrawer';

function App() {
  const [shift, setShift] = useState(false);
  function upShift() {
    setShift(!shift);
  }
  const [pageTitle, setPageTitle]= useState<string>('Fragmentation');
  const [slug, setSlug]= useState<string>('Fragmentation');
  const [chapter, setChapter] = useState<string>()
  const location = useLocation();

  useEffect(() => {
      getURL();
 },[location])

 const getURL = () => {
     setSlug(window.location.pathname);
     switch (slug) {
             case '/':
                 setPageTitle('fragmentation')
                 setChapter('1')
                 break
             case '/commodification':
                 setPageTitle('commodification');
                 setChapter('2')
                 break
             case '/negation':
                 setPageTitle('negation')
                 setChapter('3')
                 break
             case '/alienation':
                 setPageTitle('Alienation')
                 setChapter('4')
                 break
             case '/homogenization':
                 setPageTitle('homogenization')
                 setChapter('5')
                 break
             case '/credits':
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
        <Route path='/' element={<Fragmenatation/>} />
        <Route path='/commodification' element={<Commodification/>} />
        <Route path='/negation' element={<Negation/>} />
        <Route path='/alienation' element={<Alienation/>} />
        <Route path='/homogenization' element={<Homogenization/>} />
      </Routes>
      <HUD chapter={chapter} pageTitle={pageTitle} pageNumber={chapter}/>
    </div>
  );
}

export default App;
