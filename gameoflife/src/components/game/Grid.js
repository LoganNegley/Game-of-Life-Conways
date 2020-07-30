import React, {useState, useEffect} from 'react';
import {CloneGrid, generateRandom, simulation} from '../../helpers/helperFunc';
import GridSize from '../game/GridSize';

function Grid(props){
    const [rowNum, setRowNum] = useState(25)
    const [colsNum, setColsNum] = useState(25)
    const [grid, setGrid] = useState(Array(rowNum).fill().map(() => Array(colsNum).fill(false)))
    const [interval, setInterval] = useState('')
    const [generation, setGeneration] = useState(0);

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

// Clears the board of all live cells
    useEffect(()=>{
        let newGrid = CloneGrid(grid)
        for(let a = 0; a < rowNum; a++){
            for(let b = 0; b < colsNum; b++){
                if(newGrid[a][b] === true){
                    newGrid[a][b] = false
                }
            }}
        props.setRandom(false)
        setGeneration(0)
        setGrid(newGrid)
    },[props.isClear])

// Runs simulation of game
    const runGame = ()=>{
        setGrid((grid)=>{
            return simulation(grid, rowNum, colsNum)
            }) //helper function run simulation
        setGeneration((generation)=>{
            return generation + 1
            })
        console.log('running')
        setInterval(setTimeout(runGame, 250))
    };

// Stops simulation of game
    const stopGame =()=>{
        props.setRunning(false)
        clearTimeout(interval)
        console.log('game stopped')
    };
    
// Random board function
    const randomBoard = () =>{
        setGrid(generateRandom(grid, rowNum, colsNum)) //helper func to make board random
    };



    return (
        <div className = "board"
        style = {{width: `${colsNum}` * 22}}>
            <GridSize setColsNum={setColsNum} setRowNum={setRowNum}/>
            <div className = "cell_container"
                style ={{gridTemplateColumns: `repeat(${colsNum},20px)`, 
                        gridTemplateRows: `repeat(${rowNum},20px)`}} >
                {grid.map((rows,r) =>
                    rows.map((col,c) => 
                    <div className="cell" 
                    style = {{backgroundColor: grid[r][c] ? '#eb4514' : undefined}} 
                    key={`${r}-${c}`}
                    onClick={()=>{
                        if(!props.running){
                        const copyGrid = CloneGrid(grid)
                        copyGrid[r][c] = grid[r][c] ? false : true
                        setGrid(copyGrid)
                        }
                    }}
                    >
                    </div>
                ))}
            </div>
            <h2>Generations: {generation}</h2>
        </div>
    );
}

 export default Grid;
