import React from "react";
import Textbox1 from "./Textbox1";
import ExactlistNew from "./ExactListNew";

export default function TodoList(props) {
  // console.log(props.cur);
  const [add, setAdd] = React.useState(false);
  const [title, setTitle] = React.useState("Untitled");
  const [array, setArray] = React.useState(
    props.cur === -1 ? [] : props.all[props.cur].arrTodos
  );
  // console.log("AAAAA", array);
  React.useEffect(() => {
    if(props.cur===-1)return
    // console.log(array);
    // const arrTodos = props.cur === -1 ? [] : props.all[props.cur].arrTodos;
    // console.log(props.cur + " " + arrTodos);
    // setArray(arrTodos);
    // console.log(props.all[props.cur].title)
    console.log("hi",props.all)
    setTitle(props.all[props.cur].title)
    props.setAll([
      ...props.all.slice(0, props.cur),
      {...props.all[props.cur],arrTodos:[...array]},
      ...props.all.slice(props.cur + 1),
    ]);
  }, [array]);
  React.useEffect(() => {
    if(props.cur===-1)return
    // console.log(array);
    // const arrTodos = props.cur === -1 ? [] : props.all[props.cur].arrTodos;
    // console.log(props.cur + " " + arrTodos);
    // setArray(arrTodos);
    // console.log(props.all[props.cur].title)
    // console.log("hi",props.all)
    // setTitle(props.all[props.cur].title)
    // props.setAll([
    //   ...props.all.slice(0, props.cur),
    //   {...props.all[props.cur],arrTodos:[...array]},
    //   ...props.all.slice(props.cur + 1),
    // ]);
    setArray(props.all[props.cur].arrTodos)
  }, [props.cur]);
  return (
    <div>
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
    </div>
  );
}
