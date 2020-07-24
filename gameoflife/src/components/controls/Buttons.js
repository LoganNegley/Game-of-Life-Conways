import React, {useState, useContext} from 'react';
import ControlsContext from './../../context/ControlsContext';

function ControlButtons(props) {
    const {random, generation} = useContext(ControlsContext)
  return (
    <div className="control_buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Clear</button>
        <button>Random</button>
    </div>
  );
}

export default ControlButtons;