import React, {useState, useEffect} from 'react';
// Component imports
import Grid from '../game/Grid';

function ControlButtons() {
    const [running, setRunning]= useState(false);
    const [isClear, setIsClear] = useState(false);
    const [random, setRandom] = useState(false);
    


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
    // Random button activated
    const selectRandom =()=>{
        setRandom(true)
    };
 

  return (
    <>
    <div className="flex_child controls">
        <Grid running ={running} setRunning={setRunning} isClear={isClear} setRandom={setRandom} random={random}/>
        <div className="control_container">
        {(running ? <p>Simulation is running</p> : <p>Simulation has stopped</p>)}
            <button onClick={simulationStart}>Start</button>
            <button onClick={simulationStop}>Stop</button>
            <button onClick={clearGrid}>Clear</button>
            <button onClick={selectRandom}>Random</button>
        </div>
       
    </div>
    
    </>
  );
}

export default ControlButtons;