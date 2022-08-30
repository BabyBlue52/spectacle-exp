import React from 'react';
import Header from './components/Header';
import AudioPlayer from './components/AudioPlayer';
import CircleText from './components/CircleText';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <AudioPlayer/>
      <CircleText/>
    </div>
  );
}

export default App;
