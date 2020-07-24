import React, {useState} from 'react';
import './App.css';
import Grid from '../src/components/game/Grid';
import GenerationCount from '../src/components/controls/Generation';
import Buttons from '../src/components/controls/Buttons';

// imported context files for app
import ControlsContext from '../src/context/ControlsContext';

function App() {
const [generation, setGeneration] = useState(0)
const [random, setRandom] = useState(false)

  return (
    <div className="App">
      <h1>Game Of Life</h1>
      <ControlsContext.Provider value= {random,generation}>
        <Buttons random={random}/>
        <GenerationCount generation={generation}/>
        <Grid/>
      </ControlsContext.Provider>
    </div>
  );
}

export default App;
