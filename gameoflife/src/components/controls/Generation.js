import React, {useState} from 'react';

function GenerationCount(props) {
  return (
    <div className="generation_container">
        <h3>Generation: {props.generation}</h3>
    </div>
  );
}

export default GenerationCount;