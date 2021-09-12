import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (e , prio ) => {
      props.setTodo({ ...props.todoContent,[prio]:e.target.value })
    console.log(props.todoContent.priority)
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.todoContent.priority}
          onChange={(e)=> handleChange(e, 'priority')}
        >
          <MenuItem value={0}>   </MenuItem>
          <MenuItem value={1}>!</MenuItem>
          <MenuItem value={2}>!!</MenuItem>
          <MenuItem value={3}>!!!</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
