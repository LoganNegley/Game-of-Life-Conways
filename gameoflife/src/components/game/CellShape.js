import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  }
}));

export default function SpeedAdjuster(props) {
  const classes = useStyles();
//   const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    props.setShape(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="speed_adjuster">
      <Button className={classes.button} onClick={handleOpen}>
        Cell Shape
      </Button>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.shape}
          onChange={handleChange}>
          <MenuItem value={'square'}> Squares</MenuItem>
          <MenuItem value={'rectangle'}> Rectangles</MenuItem>
          <MenuItem value={'circle'}> Circles</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
