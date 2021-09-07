import { React, useContext, useState, useEffect } from 'react'
import Sidebar from "../Components/TodoList/Sidebar";
import TodoList from "../Components/TodoList/TodoList";
import NavBar from "../Components/HomePage/NavBar";
import axios from 'axios'

export default function Todo() {
  const [all, setAll] = useState([]);
  const [cur, setCur] = useState(-1);
  const [curId,setCurId]=useState('')
  const [change, setChange] = useState(false)

  // console.log(all[cur]);

  useEffect(() => {
    console.log('effect')
    axios.post('http://localhost:8000/users/getmylists',{}, { headers: { auth: window.localStorage.getItem('auth') } } )
    .then((res) => {
      if (res.data.statusCode === 0) {
        setAll(res.data.data)
      }
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
        <Sidebar all={all} setAll={setAll} change={change} setChange={setChange} cur={cur} setCur={setCur} curId={curId} setCurId={setCurId}  />
        <TodoList all={all} setAll={setAll} cur={cur} setCur={setCur} change={change} setChange={setChange}  curId={curId} setCurId={setCurId} />
      </div>
    </div>
  );
}
