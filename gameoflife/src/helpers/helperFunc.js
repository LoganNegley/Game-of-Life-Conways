// Makes a new grid from original grid state
export function CloneGrid (original){
return JSON.parse(JSON.stringify(original))
};

export function generateRandom(g, rN, cN){
        let newGrid = CloneGrid(g)
        for(let a = 0; a < rN; a++){
            for(let b = 0; b < cN; b++){
                   if(Math.random() < 0.5/2){
                    newGrid[a][b] = true;
                }
            }}
        return newGrid;
    };

export function simulation(g, rN, cN){
        let newGrid = g
        let copyGrid = CloneGrid(g)
        for(let r = 0; r < rN; r++){ //going through each cell in grid
            for(let c = 0; c < cN; c++){
                let neighbors = 0;
                if(r > 0){
                     if(newGrid[r - 1][c]){
                         neighbors++;
                     } 
                }
                if(r < rN - 1 && cN - 1){
                    if(newGrid[r + 1][c + 1]){
                        neighbors++
                    }
                }
                if(r < rN -1){
                    if(newGrid[r + 1][c]){
                        neighbors++
                    }
                }
                if(r > 0 && c >0){
                    if(newGrid[r-1][c-1]){
                        neighbors++
                    }
                }
                if(r > 0 && c < cN - 1){
                    if(newGrid[r-1][c +1]){
                        neighbors ++
                    }
                }
                if(r < rN - 1 && c > 0){
                    if(newGrid[r + 1][c - 1]){
                        neighbors++
                    }
                }
                if(c < cN - 1){
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
                if(!newGrid[r][c] && neighbors === 3) copyGrid[r][c] =true //if cell is dead and has 3 neighbors it is born
            }
        }
        return copyGrid;
}