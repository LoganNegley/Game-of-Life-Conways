import React, {useState} from 'react';
import './App.css';
import Grid from '../src/components/game/Grid';

import Buttons from '../src/components/controls/Buttons';

// imported context files for app
import ControlsContext from '../src/context/ControlsContext';

function App() {
const [generation, setGeneration] = useState(0)
const [random, setRandom] = useState(false)
const [startSimulation, setStartSimulation]= useState(false)

  return (
    <div className="App">
      <h1>Game Of Life</h1>
      <ControlsContext.Provider value= {{random,generation, startSimulation}}>
        <Buttons/>
        
        <Grid/>
      </ControlsContext.Provider>
    </div>
  );
}

export default App;
