import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function GridSize(props) {
  const classes = useStyles();
  const [value, setValue] = useState(25)


const handleChange =(event, changeCols) =>{
setValue(changeCols)
props.setColsNum(value)
}


  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        <p className="drag">Drag to Change Grid size</p>
      </Typography>
      <Slider
      value={value}
        defaultValue={value}
        aria-labelledby="discrete-slider"
        step={5}
        valueLabelDisplay="on"
        marks
        min={25}
        max={45}
        onChange ={handleChange}
      />
    </div>
  );
};

export default GridSize;