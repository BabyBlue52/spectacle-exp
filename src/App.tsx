import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HUD from './components/HUD';
import Fragmenatation from './pages/Fragmentation';
import Commodification from './pages/Commodification';
import Negation from './pages/Negation';
import Alienation from './pages/Alienation';
import { MenuDrawer } from './components/MenuDrawer';

function App() {
  const [shift, setShift] = useState(false);
  function upShift() {
    setShift(!shift);
  }
  return (
    <div >
      <MenuDrawer/>
      <Routes>
        <Route path='/' element={<Fragmenatation/>} />
        <Route path='/commodification' element={<Commodification/>} />
        <Route path='/negation' element={<Negation/>} />
        <Route path='/alienation' element={<Alienation/>} />
      </Routes>
      <HUD/>
    </div>
  );
}

export default App;
