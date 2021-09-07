import React, { useContext } from "react";
import Textbox1 from "./Textbox1";
import ExactlistNew from "./ExactListNew";
import Titlecontext from "./Titlecontext";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
import UserIdcontext from '../LogIn/UserIdcontext'
import DoneIcon from "@material-ui/icons/Done";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function TodoList(props) {
  const [add, setAdd] = React.useState(false);
  // const [title, setTitle] = useContext(Titlecontext);
  const[title , setTitle] = React.useState({
    title2 : "",
    editMode : false
   });
  const [id, setId] = useContext(UserIdcontext)
  const [open, setOpen] = React.useState(false); //snackbar
  const [popup, setPopup] = React.useState({ message: "", severity: "" });


console.log(props);

  const editTitleHandle=() => {
    setTitle({...title,editMode:true})
  }
  const handleClick2=() => {
    setTitle({...title,editMode:false})
  }
  const titleTextHandle=(e) => {
    setTitle({...title,title2:e.target.value})
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  const [array, setArray] = React.useState(
    props.cur === -1 ? [] : props.all[props.cur].arrTodos
  );

  React.useEffect(() => {
    axios.post('http://localhost:8000/todo/todos' , {} , {headers :{ auth: id }})
    .then((res) => {
      // console.log(res.data.data)
      if (res.data.data) setArray(res.data.data)
    })
    .catch((err) => console.log(err))


    if (props.cur === -1) return;
    setTitle(props.all[props.cur].title);
    props.setAll([
      ...props.all.slice(0, props.cur),
      { ...props.all[props.cur], arrTodos: [...array] },
      ...props.all.slice(props.cur + 1),
    ]);
  }, [array, id]);
  React.useEffect(() => {
    if (props.cur === -1) return;
    setArray(props.all[props.cur].arrTodos);
  }, [props.cur]);



  return (
    <div
      // style={{
      //   position: "relative",
      //   left: "20vw",
      //   top: "7vw",  
      // }}
    >
      <div>
       {title.editMode ? 
       <>
       <textarea onChange={titleTextHandle}  value={title.title2} />
       <div>
         <DoneIcon onClick={handleClick2}/>
         </div>
         </> 
       :<h1 onClick ={editTitleHandle}>{props.cur === -1 ? 'Choose a list' :title.title2}</h1>
      //  <h1 onClick ={editTitleHandle}>{props.cur === -1 ? 'Choose a list' :title}</h1>
       }
      </div>
      <div className="capitalDiv">
        <div className="divMain">
          <Textbox1 setaddd={setAdd} setArrayy={setArray} arrayy={array} />
        </div>
        <div>
          <ExactlistNew arrayy={array} setArrayy={setArray} />
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={popup.severity}>
          {popup.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
