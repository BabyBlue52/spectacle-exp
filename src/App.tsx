import React from 'react';
import Header from './components/Header';
import AudioPlayer from './components/AudioPlayer';
import CircleText from './components/CircleText';
import PageCounter from './components/PageCounter';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <AudioPlayer/>
      <CircleText/>
      <PageCounter/>
    </div>
  );
}

export default App;
