import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HUD from './components/HUD';
import Fragmenatation from './pages/Fragmentation';
import Commodification from './pages/Commodification';
import Negation from './pages/Negation';

function App() {
  return (
    <div className=''>
      <HUD/>
      <Routes>
        <Route path='/' element={<Fragmenatation/>} />
        <Route path='/commodification' element={<Commodification/>} />
        <Route path='/negation' element={<Negation/>} />
      </Routes>
      
    </div>
  );
}

export default App;
