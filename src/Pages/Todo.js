import React, { useState } from "react";
import Sidebar from "../Components/TodoList/Sidebar";
import TodoList from "../Components/TodoList/TodoList";

export default function Todo() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />
      <TodoList />
    </div>
  );
}
