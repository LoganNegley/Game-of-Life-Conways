import React, {useState} from 'react';
import './App.css';
// Imported Components
import Buttons from '../src/components/controls/Buttons';
import Rules from '../src/components/game_info/Rules';

function App() {
const [random, setRandom] = useState(false)


  return (
    <div className="App">
    <h1>Conway Game Of Life</h1>
      <div className='flex-wrapper'>
        <Rules/>
        <Buttons/>
      </div>
    </div>
  );
}

export default App;
