import React, { useState } from "react";
import Sidebar from "../Components/TodoList/Sidebar";
import TodoList from "../Components/TodoList/TodoList";
import NavBar from "../Components/HomePage/NavBar";

export default function Todo() {
  const [all, setAll] = React.useState();

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
        <Sidebar setAll={setAll} />
        <TodoList all={all} />
      </div>
    </div>
  );
}
