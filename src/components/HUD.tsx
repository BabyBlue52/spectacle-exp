import React = require("react")

import Header from './Header';
import AudioPlayer from './AudioPlayer';
import CircleText from './CircleText';
import PageCounter from './PageCounter';



function HUD(props:any) {
  
  return (
    <div className='hud wrapper'>
      <Header chapter={props.chapter} pageTitle={props.pageTitle}/>
      <AudioPlayer/>
      <CircleText/>
      <PageCounter/>
    </div>
  );
}

export default HUD;
