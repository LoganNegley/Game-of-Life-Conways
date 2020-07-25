import React, {useState, useContext} from 'react';
// Component imports
import Grid from '../game/Grid';

function ControlButtons() {
    const [startSimulation, setStartSimulation]= useState(false);
    const [generation, setGeneration] = useState(0);

    // Button functions
    const simulationStart= ()=>{
        if (!startSimulation ){
            setStartSimulation(true)
        } else{
            setStartSimulation(false)
        }
    };

  return (
    <div className="control_buttons">
        <button onClick={simulationStart}>{!startSimulation ? 'Start' : 'Stop'}</button>
        <button>Clear</button>
        <button>Random</button>
        <h2>Generations: {generation}</h2>
        <Grid/>
    </div>
  );
}

export default ControlButtons;