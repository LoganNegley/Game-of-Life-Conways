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


const handleChange =(event, changeRows) =>{
setValue(changeRows)
props.setRowNum(value)
}


  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Drag to Change Grid size
      </Typography>
      <Slider
      value={value}
        defaultValue={value}
        aria-labelledby="discrete-slider"
        step={25}
        valueLabelDisplay="on"
        marks
        min={25}
        max={100}
        onChange ={handleChange}
      />
    </div>
  );
};

export default GridSize;