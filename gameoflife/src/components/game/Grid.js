import React, {useState} from 'react';

let rowNum = 25;
let colsNum= 25;

function Grid(){
    const [grid, setGrid] = useState(Array(rowNum).fill().map(() => Array(colsNum).fill(false)))

    return (
        <div className = "board">
            <div className = "cell_container">
                {grid.map((rows,r) =>
                    rows.map((col,c) => 
                    <div className="cell" 
                    style= {{backgroundColor: grid[r][c] ? 'white' : undefined}} 
                    key={`${r}-${c}`}
                    onClick={()=>{
                        const copyGrid = [...grid]
                        copyGrid[r][c] = true
                        setGrid(copyGrid)
                    }}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
}

 export default Grid;
