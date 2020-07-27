import React, {useState, useEffect} from 'react';
// Component imports
import Grid from '../game/Grid';

function ControlButtons() {
    const [running, setRunning]= useState(false);
    
    const [isClear, setIsClear] = useState(false);

    // Button functions
       const clearGrid = ()=>{
        !isClear ? setIsClear(true) : setIsClear(false)
        console.log(isClear)
    }
    // Start and stop simulation buttons
    const simulationStart= ()=>{
        setRunning(true)
    };
    const simulationStop= ()=>{
        setRunning(false)
    };
 

  return (
    <div className="control_buttons">
        <button onClick={simulationStart}>Start</button>
        <button onClick={simulationStop}>Stop</button>
        <button onClick={clearGrid}>Clear</button>
        <button>Random</button>
        <Grid running ={running} clearBoard={isClear}/>
    </div>
  );
}

export default ControlButtons;