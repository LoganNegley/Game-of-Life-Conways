import React, {useState} from 'react';

function Grid(){
    const [isAlive, setIsAlive] = useState(false)

// Grid array to hold cells
    const grid = []
    // Creating grid with 25x25 cells
    for(let i = 1; i <= 625; i++){
        grid.push(Array.from(Array(625), () => isAlive))
    }; 

// onclick to change weather cell is alive or not
    const changeCellState= event => {
        event.preventDefault();
        setIsAlive(!isAlive)
    };

    return (
        <div className = "board">
            <div className = "cell_container">
                {grid.map((item, i) => (
                    <div 
                    className={!isAlive ? 'cell' : 'live' } 
                    key={i}
                    onClick = {changeCellState}>
                    </div>
                ))}
            </div>
        </div>
    );
}

 export default Grid;
