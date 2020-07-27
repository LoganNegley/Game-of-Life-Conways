import React, {useState, useEffect} from 'react';
import {CloneGrid} from '../helpers/helperFunc';
import findNeighbors from '../data/data';

function Grid(props){
    const [rowNum, setRowNum] = useState(25)
    const [colsNum, setColsNum] = useState(25)
    const [grid, setGrid] = useState(Array(rowNum).fill().map(() => Array(colsNum).fill(false)))
    const [interval, setInterval] = useState('')
    const [generation, setGeneration] = useState(0);

// Runs simulation of game
    const runGame = ()=>{
        grid.map((row, r)=>{     //for each row in grid
            row.map((col, c) =>{   // for each col in row
                const newGrid = CloneGrid(grid)  //Create a new grid
                let neighbors = 0;
                findNeighbors.map((x,y) =>{
                });
            });
        });

        console.log('running')
        setInterval(setTimeout(runGame, 1000))// Conditional to simulate game
    };

// Stops simulation of game
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
            <h2>Generations: {generation}</h2>
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
