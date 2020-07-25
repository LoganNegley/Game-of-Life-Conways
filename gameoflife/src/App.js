import React, {useState} from 'react';
import './App.css';
// Imported Components
import Buttons from '../src/components/controls/Buttons';

function App() {
const [random, setRandom] = useState(false)


  return (
    <div className="App">
      <h1>Game Of Life</h1>
        <Buttons/>
    </div>
  );
}

export default App;
