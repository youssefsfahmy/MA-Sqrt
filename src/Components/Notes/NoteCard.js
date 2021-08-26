import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
    maxWidth: 345
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
  const [value, setValue] = React.useState("Hi");
  const [value2, setValue2] = React.useState("ssjksssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssssssssss");
  

  ///////////////// callbacks//////////////
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const onDelete = (event) => {
      console.log('xx')
      const xx=props.arr.filter((elem)=>elem.id!==props.elem.id)
      props.setArr([...xx]) 
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /////// desgin ///////////
  return (
      <>
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <AiOutlinePushpin />
          </IconButton>
        }
        title={props.elem.title}
        subheader="September 14, 2016"
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
            rows={4}
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
            close
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}
