import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import axios from "axios";
import Todohaya from "./Todohaya";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "whitesmoke",
    // maxWidth: 360,
    ///   backgroundColor: theme.palette.background.paper,
  },
}));

function CheckboxList(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  React.useEffect(() => {
    console.log("idddd", props.curId);
    // if (props.curId === '') return
    console.log("wlwlw", props.arrayy);
    // axios
    //   .post(
    //     'http://localhost:8000/todo/todos',
    //     { id: props.curId },
    //     { headers: { auth: window.localStorage.getItem('auth') } }
    //   )
    //   .then((res) => {
    //     if (res.data.statusCode === 0) {
    //       props.setListTitle(res.data.todos.title)
    //       setArray(res.data.todos.todos)
    //     }
    //     console.log('hiiiii', res.data)
    //     // console.log('sdbskvbrwdhcxb')
    //   })
    //   .catch((err) => console.log(err))
    // if (props.cur === -1) return
    // setTitle(props.all[props.cur].title)
    // props.setAll([
    //   ...props.all.slice(0, props.cur),
    //   { ...props.all[props.cur], todos: [...array] },
    //   ...props.all.slice(props.cur + 1),
    // ])
  }, [props.curId]);
  // const handleDelete = (id) => {
  //   props.setArrayy(props.arrayy.filter((elem) => elem.key !== id))
  // }
  // const onChange1 = (e, id) => {
  //   const elem = props.arrayy[id]
  //   props.setArrayy([
  //     ...props.arrayy.slice(0, id),
  //     { ...elem, text: e.target.value },
  //     ...props.arrayy.slice(id + 1),
  //   ])
  // }

  const handleCheck = (id) => {
    const myElement = props.arrayy[id];
    props.setArrayy([
      ...props.arrayy.slice(0, id),
      { ...myElement, isComplete: !myElement.isComplete },
      ...props.arrayy.slice(id + 1),
    ]);
  };

  // const handleEdit = (id) => {
  //   const elem = props.arrayy[id]
  //   props.setArrayy([
  //     ...props.arrayy.slice(0, id),
  //     { ...elem, editMode: true },
  //     ...props.arrayy.slice(id + 1),
  //   ])
  // }
  // const handleUpdate = (id) => {
  //   const elem = props.arrayy[id]
  //   props.setArrayy([
  //     ...props.arrayy.slice(0, id),
  //     { ...elem, editMode: false },
  //     ...props.arrayy.slice(id + 1),
  //   ])
  // }

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value)
  //   const newChecked = [...checked]

  //   if (currentIndex === -1) {
  //     newChecked.push(value)
  //   } else {
  //     newChecked.splice(currentIndex, 1)
  //   }

  //   setChecked(newChecked)
  // }

  return (
    <>
      <div style={{ backgroundColor: "whitesmoke" }} />
      <List className={classes.root}>

        {props.arrayy .sort((a, b) => b.priority - a.priority)

        .map((elem, index) => (
          // <ListItem
          //   key={elem}
          //   role={undefined}
          //   dense
          //   button
          //   onClick={() => handleToggle(elem)}
          // >
          //   {/* <Checkbox checked={ checked.indexOf(elem.isComplete) !== -1} tabIndex={-1} disableRipple  onClick={() => handleCheck(elem.key)}   id={elem.key}/> */}
          //   <Checkbox
          //     checked={elem.isComplete}
          //     tabIndex={-1}
          //     disableRipple
          //     onClick={() => handleCheck(index)}
          //     id={elem.key}
          //   />

            //   {elem.editMode !== false ? (
            //     <ListItemText
            //       className='listText'
            //       primary={elem.content}
            //       onClick={() => handleEdit(index)}
            //       id={elem.key}
            //     />
            //   ) : (
            //     <div className='divEdit'>
            //       <TextField
            //         id='standard-basic'
            //         label=''
            //         value={elem.text}
            //         onChange={(e) => onChange1(e, index)}
            //       />
            //       {/* <EditText/> */}
            //       <IconButton
            //         aria-label='Comments'
            //         onClick={() => handleUpdate(index)}
            //         id={elem.key}
            //       >
            //         <DoneIcon />
            //       </IconButton>
            //     </div>
            //   )}
            //   <ListItemSecondaryAction>
            //     <IconButton
            //       aria-label='Comments'
            //       onClick={() => handleDelete(elem.key)}
            //       id={elem.key}
            //     >
            //       <DeleteIcon />
            //     </IconButton>
            //   </ListItemSecondaryAction>
            // </ListItem>
            <Todohaya
              setOpen={props.setOpen}
              setPopup={props.setPopup}
              elem={elem}
              change2={props.change2}
              setChange2={props.setChange2}
              curId={props.curId}
              setCurId={props.setCurId}
            ></Todohaya>
          ))}
      </List>
      <div />
    </>
  );
}

export default CheckboxList;
