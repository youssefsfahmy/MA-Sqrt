import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { createContext } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));



export default function BasicTextFields(props) {
  const classes = useStyles();


  const [text , setText] = React.useState("")

  const clickHandle=(e) =>
   {
    props.setaddd(true)
    console.log(text)
    const newTodo = {
      isComplete: false,
      text,
      key :props.arrayy[props.arrayy.length-1].key +1
  }
    props.setArrayy([newTodo,...props.arrayy])
    
 

  }

  const handleInputChange=(e) =>{
    setText(e.target.value)
    console.log(e.target.value)
}
  

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      <TextField id="filled-basic" label="" variant="filled" value={text} onChange={handleInputChange} InputProps={{
          startAdornment: (
            <AddBoxIcon onClick={clickHandle} className="addbox" />

          ),
        }}/>

    </form>
  );
}