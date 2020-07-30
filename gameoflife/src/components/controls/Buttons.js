import React, {useState, useEffect} from 'react';
// Component imports
import Grid from '../game/Grid';

function ControlButtons() {
    const [running, setRunning]= useState(false);
    const [isClear, setIsClear] = useState(false);
    const [random, setRandom] = useState(false);
    const [generation, setGeneration] = useState(0);

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
        <Grid generation={generation} setGeneration={setGeneration} running ={running} isClear={isClear} setRandom={setRandom} random={random}/>
        <div className="control_container">
            <h2>Generations: {generation}</h2>
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