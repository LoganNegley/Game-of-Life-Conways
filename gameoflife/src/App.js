import React, {useState} from 'react';
import './App.css';
import Grid from '../src/components/game/Grid';
import GenerationCount from '../src/components/controls/Generation';

function App() {
const [generation, setGeneration] = useState(0)

  return (
    <div className="App">
      <h1>Game Of Life</h1>
      <GenerationCount generation={generation}/>
      <Grid/>
    </div>
  );
}

export default App;
