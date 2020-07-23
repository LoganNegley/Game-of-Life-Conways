import React, {useState} from 'react';

function Grid(){
    const [gridCells, setGridCells] = useState([])
    const [isAlive, setIsAlive] = useState(false)

    const grid = []
    for(let i = 1; i <= 625; i++){
        grid.push(Array.from(Array(625), () => 0))
    }; 

    function changeCellState()=>{
        
    };

    return (
        <div className = "board">
            <div className = "cell_container">
                {grid.map((item, i) => (
                    <div className="cell" 
                    key={i}
                    onClick = {changeCellState}>
                        {/* empty divs as cells with value of 0 */}
                    </div>
                ))}
            </div>
        </div>
    );
}

 export default Grid;
