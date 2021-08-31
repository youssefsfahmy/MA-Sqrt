import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { AiOutlinePushpin,AiFillPushpin,AiFillDelete } from "react-icons/ai";
import {RiAlarmFill} from "react-icons/ri"
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin:"1vw"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  title: {
    display: "flex",
    justifyContent: "center"
  },
  dial: {
    display: "flex",
    flexDirection: "column",
    width: "30vw",
    // height: "30vw",
    justifyContent: "center",
    // overflow: "hidden"
  },
  dial2: {
    // display: "flex",
    // flexDirection: "column",
    // width: "40vw",
    // justifyContent: "center",
    // overflowX: "hidden"
  },
  noteContent:{
      // width: "12vfitw"
  },
  pp:{
    wordBreak: "break-all"
  }
}));

export default function NoteCard(props) {
  const classes = useStyles();

  //////////// STATES /////////////////
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  
  React.useEffect(()=>{
    setValue(props.elem.title)
    setValue2(props.elem.content)
  },[])

  ///////////////// callbacks//////////////
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const onDelete = (event) => {
      // console.log('xx')
      // console.log(props.arr)
      const xx=props.arr.filter((elem)=>elem.id!==props.elem.id)
      props.setArr([...xx]) 
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handlePin = () => {
    const array=props.arr
    const myel=props.arr[props.index]
    // [].splice()
    props.setArr([...array.slice(0,props.index),{...myel,isPinned:!myel.isPinned},...array.slice(props.index+1)])
  };
  const ti=(num)=>{
    if(num<10){
      return "0"+num
    }
    return num
  }
  const handleClose = () => {
    //update title, content, and edit date
    if(value2.slice(" ").length===0){
      props.setOpen(3)
      return
    }
    setOpen(false);
    props.setOpen(4)

    var currentdate = new Date(); 
        var datetime = "" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + ti(currentdate.getHours()) + ":"  
                + ti(currentdate.getMinutes()) + ":" 
                + ti(currentdate.getSeconds());
    const array=props.arr
    const myel=props.arr[props.index]
    // [].splice()
    props.setArr([...array.slice(0,props.index),{...myel,title:value,content:value2,date:datetime,curDate:currentdate},...array.slice(props.index+1)])
  };
  /////// desgin ///////////
  return (
      <>
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handlePin}>
            {props.elem.isPinned?<AiFillPushpin/>:<AiOutlinePushpin />}
          </IconButton>
        }
        title={props.elem.title}
        subheader={props.elem.date}
      />
      <CardContent onClick={handleClickOpen} className={classes.noteContent}>
        {/* <Typography variant="body2" color="textSecondary" component="p" className={classes.noteContent}>
          {value2}
        </Typography> */}
        <p className={classes.pp}>{props.elem.content}</p>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="alarm">
          <RiAlarmFill />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={onDelete}>
          <AiFillDelete />
        </IconButton>

      </CardActions>
    </Card>
    <Dialog
      //  className={classes.dial2}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >        
      <DialogContent className={classes.dial}>
          <TextField
            id="outlined-multiline-flexible"
            // label="Multiline"
            multiline
            maxRows={4}
            value={value}
            defaultValue={""}
            onChange={handleChange}
            variant="outlined"
            style={{overflow:'hidden'}}
          />
          <TextField
            id="outlined-multiline-static"
            // label="Multiline"
            multiline
            rows={5}
            // defaultValue="Default Value"
            value={value2}
            variant="outlined"
            onChange={handleChange2}
            className={classes.field}
            style={{overflow:'hidden'}}

          />
            
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}
