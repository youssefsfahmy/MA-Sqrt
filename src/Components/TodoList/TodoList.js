import React, { useContext } from "react";
import Textbox1 from "./Textbox1";
import ExactlistNew from "./ExactListNew";
import Titlecontext from "./Titlecontext";

export default function TodoList(props) {
  console.log(props.cur);
  const [add, setAdd] = React.useState(false);
  const [title, setTitle] = useContext(Titlecontext);
  const [array, setArray] = React.useState(
    props.cur === -1 ? [] : props.all[props.cur]
  );
  console.log("AAAAA", array);
  React.useEffect(() => {
    console.log(array);
    const arrTodos = props.cur === -1 ? [] : props.all[props.cur];
    console.log(props.cur + " " + arrTodos);
    // setArray(arrTodos);
    props.setAll([
      ...props.all.slice(0, props.cur),
      arrTodos,
      ...props.all.slice(props.cur + 1),
    ]);
  }, [array]);
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
