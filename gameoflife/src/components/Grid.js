import React, {useState} from 'react';

let rowNum = 25;
let colsNum= 25

function Grid(){
    const [isAlive, setIsAlive] = useState(false)
    const [grid, setGrid] = useState(Array(rowNum).fill().map(() => Array(colsNum).fill(isAlive)))

    return (
        <div className = "board">
            <div className = "cell_container">
                {grid.map((rows,r) =>
                    rows.map((col,c) => 
                    <div className="cell" 
                    key={`${r}-${c}`}
                    >
                        {grid[r]}
                    </div>
                ))}
            </div>
        </div>
    );
}

 export default Grid;
