import React from "react";
import Textbox1 from "./Textbox1";
import ExactlistNew from "./ExactListNew";

export default function TodoList() {
  const [add, setAdd] = React.useState(false);
  const [title, setTitle] = React.useState("Untitled");
  const [array, setArray] = React.useState([]);

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
