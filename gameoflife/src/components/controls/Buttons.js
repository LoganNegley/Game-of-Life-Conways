import React, {useState, useEffect} from 'react';
// Component imports
import Grid from '../game/Grid';

function ControlButtons() {
    const [startSimulation, setStartSimulation]= useState(false);
    const [generation, setGeneration] = useState(0);
    const [isClear, setIsClear] = useState(false);

    // Button functions
       const clearGrid = ()=>{
        !isClear ? setIsClear(true) : setIsClear(false)
        console.log(isClear)
    }

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
        <button onClick={clearGrid}>Clear</button>
        <button>Random</button>
        <h2>Generations: {generation}</h2>
        <Grid running ={startSimulation} generation={generation} clearBoard={isClear}/>
    </div>
  );
}

export default ControlButtons;