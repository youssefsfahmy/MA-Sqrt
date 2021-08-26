import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Icon from "@material-ui/core/Icon";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import AddBoxIcon from '@material-ui/icons/AddBox'
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1),
    // width: "48vw"
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "25ch"
  },
  box:{
      width: "49vw"
  },
//   fourtys:{
//       width: "48vw"
//   }
}));
export default function NoteInput(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        // amount: "",
        // password: "",
        // weight: "",
        // weightRange: "",
        // showPassword: false,4
        id:"",
        title:"",
        content:""
      });
    const [note,setNote]=React.useState({title:"",content:""})
    const [expand,setExpand]=React.useState(false)
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    const handleExpand = ()=>{
        setExpand(!expand) 
    }
    const addNote = ()=>{
        // props.arr.unshift(values)
        const vals= {id:props.id,title:values.title,content:values.content}
        props.setArr([vals,...props.arr])
        props.setId(props.id+1)
    } 
    return (
        <div>
            {!expand?         
            <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Take a note</InputLabel>
          <OutlinedInput
            className={classes.box}
            id="outlined-adornment-amount"
            value={values.amount}
            onClick={handleExpand}
            onChange={handleChange("amount")}
            labelWidth={90}
          />
        </FormControl>:
        <Card style={{maxWidth: "50vw",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
        <OutlinedInput
          className={classes.box}
          id="outlined-adornment-amount"
          value={values.title}
          onChange={handleChange("title")}
          labelWidth={60}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-amount">Take a note</InputLabel>
      <OutlinedInput
        className={classes.box}
        id="outlined-adornment-amount"
        value={values.content}
        onChange={handleChange("content")}
        labelWidth={90}
      />
    </FormControl>
    <div style={{display:"flex",justifyContent: "flex-end"}}>
    <IconButton color="primary" onClick={addNote}>
      <AddBoxIcon/>
    </IconButton>
    </div>
    </Card>
        
        }
 
        </div>
    )
}
