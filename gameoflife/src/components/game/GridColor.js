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

export default function GridColor(props) {
  const classes = useStyles();
//   const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    props.setGridColor(event.target.value);
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
        Grid Color
      </Button>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.gridColor}
          onChange={handleChange}>
          <MenuItem value={'#eb4514'}>Green</MenuItem>
          <MenuItem value={'#ff0278'}>Pink </MenuItem>
          <MenuItem value={'#ff002b'}>Red</MenuItem>
          <MenuItem value={'#ff4d00'}>Orange</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}