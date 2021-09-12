import React, { useContext } from "react";
import Textbox1 from "./Textbox1";
import ExactlistNew from "./ExactListNew";
import Titlecontext from "./Titlecontext";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
import UserIdcontext from "../LogIn/UserIdcontext";
import DoneIcon from "@material-ui/icons/Done";
import TodoListCard from "./TodoListCard";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function TodoList(props) {
  const [add, setAdd] = React.useState(false);
  const [change2, setChange2] = React.useState(false);

  // const [title, setTitle] = useContext(Titlecontext);
  const [title, setTitle] = React.useState({
    title2: "",
    editMode: false,
  });
  // const [listTitle, setListTitle] = React.useState('')
  // const [id, setId] = useContext(UserIdcontext)

  // console.log(props);

  const editTitleHandle = () => {
    setTitle({ ...title, editMode: true });
  };
  const handleClick2 = () => {
    // setTitle({ ...title, editMode: false })
    axios
      .post(
        "http://localhost:8000/todolist/updatelistTitle",
        { Todolist: { id: props.curId, title: title.title2 } },
        { headers: { auth: window.localStorage.getItem("auth") } }
      )
      .then((res) => {
        if (res.data.statusCode === 0) {
          props.setListTitle(title.title2);
          setTitle({ ...title, editMode: false });
          props.setChange(!props.change);
          // setArray(res.data.todos.todos)
          props.setPopup({ message: res.data.message, severity: "success" });
        } else {
          //add error
          props.setPopup({ message: res.data.error, severity: "error" });
        }
        props.setOpen(true);
        console.log("hiiiii", res.data);
        // console.log('sdbskvbrwdhcxb')
      })
      .catch((err) => console.log(err));
  };
  const titleTextHandle = (e) => {
    setTitle({ ...title, title2: e.target.value });
  };

  const [array, setArray] = React.useState([]);

  React.useEffect(() => {
    console.log("idddd", props.curId);
    if (props.curId === "") return;
    axios
      .post(
        "http://localhost:8000/todo/todos",
        { id: props.curId },
        { headers: { auth: window.localStorage.getItem("auth") } }
      )
      .then((res) => {
        if (res.data.statusCode === 0) {
          props.setListTitle(res.data.todos.title);
          setTitle({ ...title, title2: res.data.todos.title });
          setArray(res.data.todos.todos);
          console.log("hola", res.data.todos.todos);
          // props.setPopup({ message: res.data.message, severity: 'success' })
        } else {
          props.setPopup({ message: res.data.error, severity: "error" });
          props.setOpen(true);
        }
        // props.setOpen(true)
        console.log("hiiiii", res.data);
        // console.log('sdbskvbrwdhcxb')
      })
      .catch((err) => console.log(err));
    // if (props.cur === -1) return
    // setTitle(props.all[props.cur].title)
    // props.setAll([
    //   ...props.all.slice(0, props.cur),
    //   { ...props.all[props.cur], todos: [...array] },
    //   ...props.all.slice(props.cur + 1),
    // ])
  }, [props.curId, change2]);
  // React.useEffect(() => {
  //   if (props.cur === -1) return
  //   setArray(props.all[props.cur].todos)
  // }, [props.cur])

  return (
    <div
      // style={{
      //   position: "relative",
      //   left: "20vw",
      //   top: "7vw",
      // }}
      style={{ placeContent: "center" }}
    >
      {props.curId !== "" ? (
        <>
          <div
            style={{
              position: "absolute",
              left: "35vw",
              top: "12vw",
              border: "ridge",
            }}
          >
            <div style={{ textAlign: "center", color: "gray" }}>
              {
                title.editMode ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <input onChange={titleTextHandle} value={title.title2} />
                    <div style={{ marginLeft: "1vw" }}>
                      <DoneIcon
                        onClick={handleClick2}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                ) : (
                  <h1 onClick={editTitleHandle}>{props.listTitle}</h1>
                )
                //  <h1 onClick ={editTitleHandle}>{props.cur === -1 ? 'Choose a list' :title}</h1>
              }
            </div>
            <div className="capitalDiv">
              <div className="divMain">
                <Textbox1
                  setaddd={setAdd}
                  setArrayy={setArray}
                  arrayy={array}
                  curId={props.curId}
                  setCurId={props.setCurId}
                  change2={change2}
                  setChange2={setChange2}
                  setOpen={props.setOpen}
                  setPopup={props.setPopup}
                />
              </div>
              <div>
                <ExactlistNew
                  all={props.all}
                  setAll={props.setAll}
                  arrayy={array}
                  setArrayy={setArray}
                  curId={props.curId}
                  setCurId={props.setCurId}
                  change2={change2}
                  setChange2={setChange2}
                  setOpen={props.setOpen}
                  setPopup={props.setPopup}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <TodoListCard />
      )}
    </div>
  );
}
