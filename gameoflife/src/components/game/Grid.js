import React, {useState, useEffect} from 'react';
import {CloneGrid} from '../helpers/helperFunc';



function Grid(props){
    const [rowNum, setRowNum] = useState(25)
    const [colsNum, setColsNum] = useState(25)
    const [grid, setGrid] = useState(Array(rowNum).fill().map(() => Array(colsNum).fill(false)))
    const [interval, setInterval] = useState('')
    // props passed down
    // running = false
    // generation = 0
    // clearBoard = false

    const runGame = ()=>{
        console.log('running')
        setInterval(setTimeout(runGame, 1000))// Conditional to simulate game
    };

    const stopGame =()=>{
        setInterval(clearTimeout(interval))
        console.log('Stopped')
    };

    useEffect(()=>{
        if(props.running){
            runGame();
        }else{
            stopGame()
        }
    },[props.running])

    return (
        <div className = "board">
            <div className = "cell_container">
                {grid.map((rows,r) =>
                    rows.map((col,c) => 
                    <div className="cell" 
                    style= {{backgroundColor: grid[r][c] ? 'white' : undefined}} 
                    key={`${r}-${c}`}
                    onClick={()=>{
                        const copyGrid = CloneGrid(grid)
                        copyGrid[r][c] = grid[r][c] ? false : true
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
