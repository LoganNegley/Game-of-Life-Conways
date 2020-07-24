import React, {useState} from 'react';

let rowNum = 25;
let colsNum= 25

function Grid(){
    const [isAlive, setIsAlive] = useState(false)
    const [grid, setGrid] = useState(Array(rowNum).fill().map(() => Array(colsNum).fill(false)))

    console.log(grid)

    // const rows = []
    // for (var r = 0; r < rowNum; r++){
    //     for (var c = 0; c < colsNum; c++){
    //         rows.push(grid)
    //     }
    // }

    return (
        <div className = "board">
            <div className = "cell_container">
                {grid.map((rows,r) =>
                    rows.map((col,c) => 
                    <div className="cell">
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

 export default Grid;
