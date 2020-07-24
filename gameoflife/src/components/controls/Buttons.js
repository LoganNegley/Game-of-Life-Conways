import React, {useState, useContext} from 'react';
// Component imports
import GenerationCount from '../controls/Generation';
// Context imports
import ControlsContext from './../../context/ControlsContext';

function ControlButtons() {
    // State managment from ControlsContext
    const {random, generation} = useContext(ControlsContext)

  return (
    <div className="control_buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Clear</button>
        <button>Random</button>
        <GenerationCount generation={generation}/>
    </div>
  );
}

export default ControlButtons;