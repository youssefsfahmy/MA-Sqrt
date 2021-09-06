import React, { useContext } from "react";
import Textbox1 from "./Textbox1";
import ExactlistNew from "./ExactListNew";
import Titlecontext from "./Titlecontext";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function TodoList(props) {
  const [add, setAdd] = React.useState(false);
  const [title, setTitle] = useContext(Titlecontext);
  const [open, setOpen] = React.useState(false); //snackbar
  const [popup, setPopup] = React.useState({ message: "", severity: "" });
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
    if (props.cur === -1) return;
    setTitle(props.all[props.cur].title);
    props.setAll([
      ...props.all.slice(0, props.cur),
      { ...props.all[props.cur], arrTodos: [...array] },
      ...props.all.slice(props.cur + 1),
    ]);
  }, [array]);
  React.useEffect(() => {
    if (props.cur === -1) return;
    setArray(props.all[props.cur].arrTodos);
  }, [props.cur]);



  return (
    <div
      style={{
        position: "relative",
        left: "20vw",
        top: "7vw",
      }}
    >
      <div>
        <h1>{title}</h1>
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
