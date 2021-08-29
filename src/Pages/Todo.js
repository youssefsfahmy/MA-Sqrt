import React, { useState } from "react";
import Sidebar from "../Components/TodoList/Sidebar";
import TodoList from "../Components/TodoList/TodoList";
import NavBar from "../Components/HomePage/NavBar"

export default function Todo() {
  return (
    
     
    <div
      style={{
        display: "flex",
      }}
    >
       <NavBar/>
      <Sidebar />
      <TodoList />
    </div>
  );
}
