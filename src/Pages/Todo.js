import React from "react";
import Sidebar from "../Components/TodoList/Sidebar";
import TodoList from "../Components/TodoList/TodoList";
import NavBar from "../Components/HomePage/NavBar";

export default function Todo() {
  const [all, setAll] = React.useState([]);
  const [cur, setCur] = React.useState(-1);
  // console.log(all[cur]);
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar all={all} setAll={setAll} cur={cur} setCur={setCur} />
        <TodoList all={all} setAll={setAll} cur={cur} setCur={setCur} />
      </div>
    </div>
  );
}
