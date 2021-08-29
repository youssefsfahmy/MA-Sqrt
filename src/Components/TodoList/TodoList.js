import React from "react";
import Textbox1 from "./Textbox1";
import ExactlistNew from "./ExactListNew";

export default function TodoList() {
  const [add, setAdd] = React.useState(false);
  const [array, setArray] = React.useState([
    {
      isComplete: false,
      text: "Todo 1",
      key: 0,
    },
    {
      isComplete: true,
      text: "Todo 2",
      key: 1,
    },
  ]);

  return (
    <>
      <h1>My Tasks</h1>
      <div className="capitalDiv">
        <div className="divMain">
          <Textbox1 setaddd={setAdd} setArrayy={setArray} arrayy={array} />
        </div>
        <div>
          <ExactlistNew arrayy={array} />
        </div>
      </div>
    </>
  );
}
