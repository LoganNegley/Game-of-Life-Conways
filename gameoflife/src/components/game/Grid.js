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
            });
        });
    // Need code here////////////////
        console.log('running')
        setInterval(setTimeout(runGame, 1000))// Conditional to simulate game
    };

// Stops simulation of game
    const stopGame =()=>{
        setInterval(clearTimeout(interval))
    };

// Populate board with random live cells
    const randomBoard = ()=>{
        let newGrid = CloneGrid(grid)
        for(let a = 0; a < rowNum; a++){
            for(let b = 0; b < colsNum; b++){
                   if(Math.random() < 0.5/2){
                    newGrid[a][b] = true;
                }
            }}
        setGrid(newGrid)
    };

// Runs when running state changes
    useEffect(()=>{
        if(props.running){
            runGame();
        }else{
            stopGame()
        }
    },[props.running])

// Runs when random state changes
    useEffect(()=>{
        if(props.random === true && !props.running){
            randomBoard();
        }
    },[props.random])

    useEffect(()=>{
        let newGrid = CloneGrid(grid)
        for(let a = 0; a < rowNum; a++){
            for(let b = 0; b < colsNum; b++){
                if(newGrid[a][b] === true){
                    newGrid[a][b] = false
                }
            }}
        props.setRandom(false)
        setGrid(newGrid)
    },[props.isClear])


    return (
        <div className = "board">
            <h2>Generations: {generation}</h2>
            <div className = "cell_container"
                style ={{gridTemplateColumns: `repeat(${rowNum},20px)`, 
                        gridTemplateRows: `repeat(${colsNum},20px)`}} >
                {grid.map((rows,r) =>
                    rows.map((col,c) => 
                    <div className="cell" 
                    style = {{backgroundColor: grid[r][c] ? 'white' : undefined}} 
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
