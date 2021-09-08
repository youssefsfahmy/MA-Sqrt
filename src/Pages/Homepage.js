import React, { useEffect } from 'react'
import NavBar from '../Components/HomePage/NavBar'
import homebgd from '../Homepagebgd.png'
// import { height } from "@material-ui/system";
import { useContext } from 'react'
import UserNamecontext from '../Components/UserNamecontext'
import NoteCard from '../Components/Notes/NoteCard'
import axios from 'axios'
import { BottomNavigation } from '@material-ui/core'
import { useHistory } from 'react-router'

export default function Homepage() {
  const [user, setUser] = React.useState("");
  const [notearr, setNotearr] = React.useState([]);
  const [listarr, setListarr] = React.useState([]);
  const [notes, setNotes] = React.useState([]);

  useEffect(() => {
    // console.log('hola', id)
    axios
      .post(
        "http://localhost:8000/users/getmynotes",
        {},

        { headers: { auth: window.localStorage.getItem("auth") } }
      )
      .then((res) => {
        console.log(res.data);
        const arrayn = res.data.data;
        arrayn.sort((a, b) => new Date(b.lastEdited) - new Date(a.lastEdited));
        // arrayn.splice(0, 2);
        const arr = [];
        for (let i = 0; i < Math.min(2, arrayn.length); i++) {
          arr.push(arrayn[i]);
        }
        console.log(arrayn, "notesss");
        setNotearr([...arr]);
      })
      .catch((err) => console.log(err));
    ///FILLL HEREEEE , ADDDDD GETTT MYYYYYY LISTSSSSSSSSSSSS
    axios
      .post(
        "http://localhost:8000/users/getmylists",
        {},

        { headers: { auth: window.localStorage.getItem("auth") } }
      )
      .then((res) => {
        console.log(res.data);
        const arrayl = res.data.data;
        // arrayn.sort((a, b) => new Date(b.lastEdited) - new Date(a.lastEdited));
        // arrayn.splice(0, 2);
        const arr = [];
        for (let i = 0; i < Math.min(2, arrayl.length); i++) {
          arr.push(arrayl[i]);
        }
        console.log(arrayl, "lists");
        setListarr([...arr]); //different array here
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .post(
        "http://localhost:8000/users/userdetails",
        {},
        { headers: { auth: window.localStorage.getItem('auth') } }
      )
      .then((res) => {
        console.log(res.data.user.name)
        setUser(res.data.user.name)
        // if (res.data.data) setArr(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div style={{ backgroundImage: homebgd }}>
      <div>
        <NavBar />
        <img
          src={homebgd}
          style={{ width: "100%", height: "30vw" }}
          alt={"welcome"}
        />
        <h1
          style={{
            position: "absolute",
            bottom: "230px",
            left: "20vw",
            fontSize: "5vw",
            color: "white",
          }}
        >
          Welcome Back,{user}
        </h1>
      </div>
      <div>
        <div
          style={{
            textAlign: "-webkit-center",
            // position: " relative",
            // left: "5vw",
          }}
        >
          <h1>Latest Notes</h1>
          {/* id:"",
        title:"",
        content:"",
        date:"",
        curDate:"" */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // height: "60vw",
            }}
          >
            {console.log(notearr.length)}
            {notearr.map((d) => (
              <>
                <NoteCard
                  // elem={{
                  noteId={d._id}
                  elem={d}
                  // content: d.content,
                  // date: d.lastEdited,
                  // curDate: "",
                  // }}
                />
              </>
            ))}
          </div>
        </div>
        <div
          style={{
            textAlign: "-webkit-center",
            // position: "relative",
            // left: "50vw",
          }}
        >
          {" "}
          <h1>Latest Todos</h1>
        </div>
      </div>
      <BottomNavigation style={{ backgroundColor: 'black', height: '6vw' }}>
        <h1 style={{ color: 'white' }}>Copyrights to MA^2 team</h1>
      </BottomNavigation>
    </div>
  )
}
