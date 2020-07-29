// Makes a new grid from original grid state
export function CloneGrid (original){
return JSON.parse(JSON.stringify(original))
};