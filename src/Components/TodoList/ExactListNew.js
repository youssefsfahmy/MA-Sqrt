import React from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
// import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from "@material-ui/icons/Delete";
// import { Filter } from '@material-ui/icons';
// import reactDom from 'react-dom';
import DoneIcon from "@material-ui/icons/Done";
// import Textbox1 from './Textbox1'
import EditText from "./EditText";

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
  // const [edited,setEdited]

  const handleDelete = (id) => {
    console.log(id);
    props.setArrayy(props.arrayy.filter((elem) => elem.key !== id));
    console.log("ay haga");
    console.log(id);
  };
  const onChange1 = (e, id) => {
    const elem = props.arrayy[id];
    props.setArrayy([
      ...props.arrayy.slice(0, id),
      { ...elem, text: e.target.value },
      ...props.arrayy.slice(id + 1),
    ]);
  };

  const handleCheck = (id) => {
    const myElement = props.arrayy[id];
    props.setArrayy([
      ...props.arrayy.slice(0, id),
      { ...myElement, isComplete: !myElement.isComplete },
      ...props.arrayy.slice(id + 1),
    ]);
  };

  const handleEdit = (id) => {
    const elem = props.arrayy[id];
    props.setArrayy([
      ...props.arrayy.slice(0, id),
      { ...elem, editMode: true },
      ...props.arrayy.slice(id + 1),
    ]);
  };
  const handleUpdate = (id) => {
    const elem = props.arrayy[id];
    props.setArrayy([
      ...props.arrayy.slice(0, id),
      { ...elem, editMode: false },
      ...props.arrayy.slice(id + 1),
    ]);
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
                  value={elem.text}
                  onChange={(e) => onChange1(e, index)}
                />
                {/* <EditText/> */}
                <IconButton
                  aria-label="Comments"
                  onClick={() => handleUpdate(index)}
                  id={elem.key}
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
