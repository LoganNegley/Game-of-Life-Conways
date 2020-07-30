import React, {useState, useEffect} from 'react';
import {CloneGrid} from '../../helpers/helperFunc';
import findNeighbors from '../data/data';
import GridSize from '../game/GridSize';

function Grid(props){
    const [rowNum, setRowNum] = useState(25)
    const [colsNum, setColsNum] = useState(25)
    const [grid, setGrid] = useState(Array(rowNum).fill().map(() => Array(colsNum).fill(false)))
    const [interval, setInterval] = useState('')

// Runs simulation of game
    const runGame = ()=>{
        let newGrid = grid
        let copyGrid = CloneGrid(grid)
        for(let r = 0; r < rowNum; r++){
            for(let c = 0; c < colsNum; c++){
                let neighbors = 0;
                if(r > 0){
                     if(newGrid[r - 1][c]){
                         neighbors++;
                     } 
                }
                if(r > 0 && c >0){
                    if(newGrid[r-1][c-1]){
                        neighbors++
                    }
                }
                if(r > 0 && c < colsNum - 1){
                    if(newGrid[r-1][c +1]){
                        neighbors ++
                    }
                }
                if(r < rowNum -1){
                    if(newGrid[r + 1][c]){
                        neighbors++
                    }
                }
                if(r < rowNum - 1 && c > 0){
                    if(newGrid[r + 1][c - 1]){
                        neighbors++
                    }
                }
                if(r < rowNum - 1 && colsNum - 1){
                    if(newGrid[r + 1][c + 1]){
                        neighbors++
                    }
                }
                if(c < colsNum - 1){
                    if(newGrid[r][c +1]){
                        neighbors++
                    }
                }
                if(c > 0){
                    if(newGrid[r][c - 1]){
                        neighbors++
                    }
                }

                if(newGrid[r][c] && (neighbors < 2 || neighbors > 3)) copyGrid[r][c] = false;
                if(!newGrid[r][c] && neighbors === 3) copyGrid[r][c] =true
            }
        }


        setGrid(copyGrid)
        console.log('running')
        setInterval(setTimeout(runGame, 1000))// Conditional to simulate game
    };


// Stops simulation of game
    const stopGame =()=>{
        setInterval(clearTimeout(interval))
        console.log('game stopped')
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
        setGrid(newGrid)
    },[props.isClear])


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
