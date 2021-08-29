import React from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
 ///   backgroundColor: theme.palette.background.paper,
  },
}));

function CheckboxList(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);


  const handleDelete=(id) => {
    
    console.log('ayhaga')
  }
  


  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {props.arrayy.map(value => (
        <ListItem key={value} role={undefined} dense button onClick={()=>handleToggle(value)}>
          <Checkbox checked={ checked.indexOf(value) !== -1} tabIndex={-1} disableRipple />
          <ListItemText primary={`Lss ${value + 1}`} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Comments" onClick={() => handleDelete(value.key)} id={value.key}>
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default CheckboxList;