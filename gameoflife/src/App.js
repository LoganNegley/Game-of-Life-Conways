import React, {useState} from 'react';
import './App.css';
import Grid from '../src/components/game/Grid';
import GenerationCount from '../src/components/controls/Generation';
import Buttons from '../src/components/controls/Buttons';

function App() {
const [generation, setGeneration] = useState(0)
const [random, setRandom] = useState(false)

  return (
    <div className="App">
      <h1>Game Of Life</h1>
      <Buttons random={random}/>
      <GenerationCount generation={generation}/>
      <Grid/>
    </div>
  );
}

export default App;
