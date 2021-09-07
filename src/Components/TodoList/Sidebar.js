import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";

// import { Height } from "@material-ui/icons";
import { AiOutlineUnorderedList } from "react-icons/ai";

import AddBoxIcon from "@material-ui/icons/AddBox";
import { useContext } from "react";
import Titlecontext from "./Titlecontext";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  button: {
    fontSize: "2vw",
    fontFamily: "sans-serif",
  },
});

export default function Sidebar(props) {



  const [title, setTitle] = useContext(Titlecontext);
  const classes = useStyles();
  const [key, setKey] = React.useState(0);
  //  const [curr, setCurr] = React.useState(0);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
 /// const [lists, setLists] = React.useState([]);
  const onClick = () => {
  ///  setLists([...lists, { title: "Untitled_" + key, key }]);
    props.setAll([
      ...props.all,
      { title: "Untitled_" + key, key, arrTodos: [] },
    ]);
    setKey(key + 1);
    //console.log(props.all)
  };
  const handleDelete = (id,index) => {
    
    props.setAll([...props.all.filter((elem) => elem.key !== id)]);
    console.log(index ,"  ", props.cur)
    // if(index !== props.cur)
       props.setCur(props.cur - 1)
    console.log()
  }

  const onClick2 = (e, id) => {
    console.log("hi", id)
    console.log(props.all)
    props.setCur(id);
    // setTitle(lists[props.cur].title);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
  

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {props.all.map((object, index) => (
          <ListItem button key={object.title} >
            <ListItemIcon >
              <DeleteIcon onClick={() => handleDelete(object.key,index)}
                id={object.key}/>
            </ListItemIcon>
            <ListItemText onClick={(e) => onClick2(e, index)} primary={object.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem button key={"Add"} onClick={onClick}>
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary={"New List"} />
      </ListItem>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div style={{ width: "25vw", Height: "100vw" }}>
      <>
        {["My Lists"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              className={classes.button}
              onClick={toggleDrawer(anchor, true)}
            >
              {anchor}
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </>
      {/* <Button onClick={toggleDrawer("Add", true)}>Add</Button> */}
    </div>
  );
}
