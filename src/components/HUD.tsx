import React from 'react';

import Header from './Header';
import AudioPlayer from './AudioPlayer';
import CircleText from './CircleText';
import PageCounter from './PageCounter';


function HUD() {
  return (
    <div className='hud wrapper'>
      <Header/>
      <AudioPlayer/>
      <CircleText/>
      <PageCounter/>
    </div>
  );
}

export default HUD;
