import React, {useState, useEffect} from 'react';
// Component imports
import Grid from '../game/Grid';

function ControlButtons() {
    const [running, setRunning]= useState(false);
    const [isClear, setIsClear] = useState(false);
    const [random, setRandom] = useState(false)

    // Button functions
    const clearGrid = ()=>{
        !isClear ? setIsClear(true) : setIsClear(false)
    }
    // Start and stop simulation buttons
    const simulationStart= ()=>{
        setRunning(true)
    };
    const simulationStop= ()=>{
        setRunning(false)
    };

    const selectRandom =()=>{
        setRandom(true)
    };
 

  return (
    <div className="control_buttons">
        <button onClick={simulationStart}>Start</button>
        <button onClick={simulationStop}>Stop</button>
        <button onClick={clearGrid}>Clear</button>
        <button onClick={selectRandom}>Random</button>
        <Grid setIsClear={setIsClear} running ={running} clearBoard={isClear} random={random}/>
    </div>
  );
}

 

export default ControlButtons;