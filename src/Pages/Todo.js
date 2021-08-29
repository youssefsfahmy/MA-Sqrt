import React from "react";
import TodoList from "../Components/TodoList/TodoList";
import NavBar from "../Components/HomePage/NavBar"

export default function Todo() {
  return (
    <div>
      <NavBar/>
      <TodoList />
    </div>
  );
}
