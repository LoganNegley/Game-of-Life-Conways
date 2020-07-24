import React, {useState} from 'react';

function ControlButtons(props) {
  return (
    <div className="control_buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Clear</button>
    </div>
  );
}

export default ControlButtons;