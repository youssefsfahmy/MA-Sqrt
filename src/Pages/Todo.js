import { React, useContext, useState, useEffect } from 'react'
import Sidebar from "../Components/TodoList/Sidebar";
import TodoList from "../Components/TodoList/TodoList";
import NavBar from "../Components/HomePage/NavBar";
import axios from 'axios'

export default function Todo() {
  const [all, setAll] = useState([]);
  const [cur, setCur] = useState(-1);
  const [change, setChange] = useState(false)

  // console.log(all[cur]);

  useEffect(() => {
    console.log('effect')
    axios.post('http://localhost:8000/users/getmylists',{}, { headers: { auth: window.localStorage.getItem('auth') } } )
    .then((res) => {
      if (res) console.log(res)
    })
    .catch((err) => console.log(err))

      
    }
  , [change])
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
