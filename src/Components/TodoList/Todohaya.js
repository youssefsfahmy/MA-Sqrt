import React from "react";
import { makeStyles, mergeClasses } from "@material-ui/styles";
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
import Dropdown from "./Dropdown";

const useStyles = makeStyles((theme) => ({
  item: {
    width: "30vw",
    // display:"flex",
    // justifyContent:"spaceBetween"
  },
}));
export default function Todohaya(props) {
  const classes = useStyles();
  const [editMode, setEditMode] = React.useState(false);
  const [todoContent, setTodoContent] = React.useState({
    // text: '',
    priority: props.elem.priority,
    content: props.elem.content,
  });
  //   const handleToggle = (value) => () => {
  //     const currentIndex = checked.indexOf(value)
  //     const newChecked = [...checked]

  //     if (currentIndex === -1) {
  //       newChecked.push(value)
  //     } else {
  //       newChecked.splice(currentIndex, 1)
  //     }

  //     setChecked(newChecked)
  //   }
  const handleCheck = (id) => {
    console.log(props.elem.isComplete);
    axios
      .post(
        "http://localhost:8000/todo/updatetask",
        {
          Todo: {
            id,
            content: props.elem.content,
            priority: props.elem.priority,
            isComplete: !props.elem.isComplete,
          },
        },
        { headers: { auth: window.localStorage.getItem("auth") } }
      )
      .then((res) => {
        if (res.data.statusCode === 0) {
          //   props.setListTitle(res.data.todos.title)
          //   setArray(res.data.todos.todos)
          props.setChange2(!props.change2);
          setEditMode(false);
          //   props.setPopup({ message: res.data.message, severity: 'success' })
        } else {
          //error
          props.setPopup({ message: res.data.error, severity: "error" });
          props.setOpen(true);
        }
        console.log("hiiiii", res.data);
        // console.log('sdbskvbrwdhcxb')
      })
      .catch((err) => console.log(err));
  };
  const handleEdit = (id) => {
    setEditMode(true);
  };

  const handleUpdate = (id) => {
    axios
      .post(
        "http://localhost:8000/todo/updatetask",
        {
          Todo: {
            id,
            content: todoContent.content,
            priority: props.elem.priority,
            isComplete: props.elem.isComplete,
          },
        },
        { headers: { auth: window.localStorage.getItem("auth") } }
      )
      .then((res) => {
        if (res.data.statusCode === 0) {
          //   props.setListTitle(res.data.todos.title)
          //   setArray(res.data.todos.todos)
          props.setChange2(!props.change2);
          setEditMode(false);
          props.setPopup({ message: res.data.message, severity: "success" });
        } else {
          //error
          props.setPopup({ message: res.data.error, severity: "error" });
        }
        props.setOpen(true);
        console.log("hiiiii", res.data);
        // console.log('sdbskvbrwdhcxb')
      })
      .catch((err) => console.log(err));
  };

  const onChange1 = (e, prop) => {
    setTodoContent({ ...todoContent, [prop]: e.target.value });
  };
  const handleDelete = (id) => {
    axios
      .post(
        "http://localhost:8000/todo/deletetask",
        {
          Todo: {
            id,
            listId: props.curId,
          },
        },
        { headers: { auth: window.localStorage.getItem("auth") } }
      )
      .then((res) => {
        if (res.data.statusCode === 0) {
          //   props.setListTitle(res.data.todos.title)
          //   setArray(res.data.todos.todos)
          props.setChange2(!props.change2);
          props.setPopup({ message: res.data.message, severity: "success" });
        } else {
          //error
          props.setPopup({ message: res.data.error, severity: "error" });
        }
        props.setOpen(true);
        console.log("hiiiii", res.data);
        // console.log('sdbskvbrwdhcxb')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.item}>
      
      <ListItem
        style={{ height: "5vw" }}
        role={undefined}
        dense
        buttons
        // onClick={() => handleToggle(props.elem.isComplete)}
      >
        <Checkbox
          checked={props.elem.isComplete}
          tabIndex={-1}
          disableRipple
          onClick={() => handleCheck(props.elem._id)}
          //   id={elem.key}
        />

        {!editMode ? (
          <div className="prioDiv">
          <ListItemText
            className='listText'
            primary={props.elem.content}
            onClick={() => handleEdit(props.elem._id)}

            // id={elem.key}
          />
        
          </div>
        ) : (
          <div className="divEdit">
            <TextField
              id="standard-basic"
              label=""
              value={todoContent.content}
              onChange={(e) => onChange1(e, "content")}
            />

            {/* <EditText/> */}
            <IconButton
              aria-label="Comments"
              onClick={() => handleUpdate(props.elem._id)}
              //   id={elem.key}
            >
              
              <DoneIcon />
            </IconButton>
          </div>
        )}
        <ListItemSecondaryAction
         
        >
          {/* <Dropdown
            className="dropdown"
            setTodo={setTodoContent}
            todoContent={todoContent}
          /> */}
          <IconButton
            aria-label="Comments"
            onClick={() => handleDelete(props.elem._id)}
            // id={elem.key}
          >
             <Dropdown className="dropdown"  
          setTodo={setTodoContent} 
          todoContent={todoContent}
          change2={props.change2}
          setChange2={props.setChange2}/>
          <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}
