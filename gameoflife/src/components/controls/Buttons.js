import React, {useState, useContext} from 'react';
// Component imports
import GenerationCount from '../controls/Generation';
// Context imports
import ControlsContext from './../../context/ControlsContext';

function ControlButtons() {
    const [startSimulation, setStartSimulation]= useState(false)
    // State managment from ControlsContext
    const {random, generation} = useContext(ControlsContext)

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
        <GenerationCount generation={generation}/>
    </div>
  );
}

export default ControlButtons;