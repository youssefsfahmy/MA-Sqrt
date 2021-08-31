import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import Icon from "@material-ui/core/Icon";
import FormControl from "@material-ui/core/FormControl";
// import Button from "@material-ui/core/Button";
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
        content:"",
        date:"",
        curDate:""
      });
    // const [note,setNote]=React.useState({title:"",content:""})
    const [expand,setExpand]=React.useState(false)
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    const handleExpand = ()=>{
        setExpand(true) 
    }
    const ti=(num)=>{
      if(num<10){
        return "0"+num
      }
      return num
    }
    const addNote = ()=>{
        // props.arr.unshift(values)
        // const vals= {id:props.id,title:values.title,content:values.content,date:}
        if(values.content.slice(" ").length===0){
          props.setOpen(2)
          return
        }
        var currentdate = new Date(); 
        var datetime = "" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + ti(currentdate.getHours()) + ":"  
                + ti(currentdate.getMinutes()) + ":" 
                + ti(currentdate.getSeconds());
        const vals={...values,date:datetime,id:props.id,isPinned:false,curDate:currentdate}
        props.setArr([vals,...props.arr])
        setValues({...values,title:"",content:""})
        props.setId(props.id+1)
        setExpand(false)
        props.setOpen(1)
    } 
    return (
        <div>

        <Card style={{maxWidth: "50vw",display:"flex",flexDirection:"column",justifyContent:"center"}}>
       {expand?<FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
        <OutlinedInput
          className={classes.box}
          id="outlined-adornment-amount"
          value={values.title}
          onChange={handleChange("title")}
          labelWidth={60}
          autoComplete={"off"}
        />
      </FormControl>:<></>
      }
      <FormControl fullWidth className={classes.margin} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-amount">Take a note</InputLabel>
      <OutlinedInput
        className={classes.box}
        id="outlined-adornment-amount"
        value={values.content}
        onChange={handleChange("content")}
        onClick={handleExpand}
        multiline
        rows={expand?5:1}
        labelWidth={90}
        autoComplete={"off"}
      />
    </FormControl>
    {expand?
    <div style={{display:"flex",justifyContent: "flex-end"}}>
    <IconButton color="primary" onClick={addNote}>
      <AddBoxIcon/>
    </IconButton>
    </div>:<></>
    }
    </Card>
        
        
 
        </div>
    )
}
