import React, { useState, useEffect } from 'react'
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    ///   backgroundColor: theme.palette.background.paper,
  },
}));

function CheckboxList(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [text , setText] = React.useState("")

  const handleDelete = (id) => {
    props.setArrayy(props.arrayy.filter((elem) => elem.key !== id));
  };
  
  const onChange1 = (e) => {
      setText(e.target.value)
      console.log(text)



    // const elem = props.arrayy[id];
    // props.setArrayy([
    //   ...props.arrayy.slice(0, id),
    //   { ...elem, text: e.target.value },
    //   ...props.arrayy.slice(id + 1),
    // ]);
  };

  const handleCheck = (id) => {
    const myElement = props.arrayy[id];
    props.setArrayy([
      ...props.arrayy.slice(0, id),
      { ...myElement, isComplete: !myElement.isComplete },
      ...props.arrayy.slice(id + 1),
    ]);
  };

useEffect(() => {
  console.log(props.arrayy)
}, [])

  const handleEdit = (id) => {
    const elem = props.arrayy[id];
    props.setArrayy([
      ...props.arrayy.slice(0, id),
      { ...elem, editMode: true },
      ...props.arrayy.slice(id + 1),
    ]);
  };
  const handleUpdate = (id2) => {
    axios
    .post(
      'http://localhost:8000/todolist/updatelistTitle',
      {
        Todolist : {
            id : id2,
            title : text
        }
      },
      { headers: { auth: window.localStorage.getItem('auth') } }
    )
    .then((res) => {
      console.log(res)
      if (res.data.statusCode === 0) props.setChange(!props.change)
    })
    .catch((err) => console.log(err))


    // const elem = props.arrayy[id];
    // props.setArrayy([
    //   ...props.arrayy.slice(0, id),
    //   { ...elem, editMode: false },
    //   ...props.arrayy.slice(id + 1),
    // ]);
  };

  const handleToggle = (value) => () => {
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
    <>
      <div />
      <List className={classes.root}>
        {props.arrayy.map((elem, index) => (
          <ListItem
            key={elem}
            role={undefined}
            dense
            button
            onClick={() => handleToggle(elem)}
          >
            {/* <Checkbox checked={ checked.indexOf(elem.isComplete) !== -1} tabIndex={-1} disableRipple  onClick={() => handleCheck(elem.key)}   id={elem.key}/> */}
            <Checkbox
              checked={elem.isComplete}
              tabIndex={-1}
              disableRipple
              onClick={() => handleCheck(index)}
              id={elem.key}
            />

            {elem.editMode === false ? (
              <ListItemText
                className="listText"
                primary={elem.text}
                onClick={() => handleEdit(index)}
                id={elem.key}
              />
            ) : (
              <div className="divEdit">
                <TextField
                  id="standard-basic"
                  label=""
                  value={elem.title}
                  onChange={onChange1}
                />
                {/* <EditText/> */}
                <IconButton
                  aria-label="Comments"
                  onClick={() => handleUpdate(elem._id)}
                  
                >
                  <DoneIcon />
                </IconButton>
              </div>
            )}
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Comments"
                onClick={() => handleDelete(elem.key)}
                id={elem.key}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <div />
    </>
  );
}

export default CheckboxList;
