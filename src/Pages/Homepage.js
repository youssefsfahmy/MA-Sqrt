import React from "react";
import NavBar from "../Components/HomePage/NavBar";
import homebgd from "../Homepagebgd.png";
// import { height } from "@material-ui/system";
import { useContext } from "react";
import UserNamecontext from "../Components/UserNamecontext";
import NoteCard from "../Components/Notes/NoteCard";


export default function Homepage() {
  const [user, setUser] = useContext(UserNamecontext);
  // console.log("User", user);
  return (
    <div>
      <NavBar />
      <div
        style={{
          // backgroundImage: `url(${homebgd})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "contain",
          width: "100vw",
          height: "20vw",
        }}
      >
        <img src={homebgd} style={{ width: "100%", height: "40vw" }}  alt={"welcome"} />
        <h1
          style={{
            position: "absolute",
            bottom: "230px",
            left: "75px",
            fontSize: "5vw",
            color: "white",
          }}
        >
          Welcome Back,{user}
        </h1>
      </div>
      <div style={{textAlign: "-webkit-center"}}>
        <h1 style={{marginTop:"35vh"}}>Latest Notes</h1>
        {/* id:"",
        title:"",
        content:"",
        date:"",
        curDate:"" */}
        <div style={{display:"flex",justifyContent:"center"}}>
        <NoteCard elem={{id:"0",
        title:"Note1",
        content:"Content1",
        date:"",
        curDate:""}}></NoteCard>
        <NoteCard elem={{id:"1",
        title:"Note2",
        content:"Content2",
        date:"",
        curDate:""}}></NoteCard>
        <NoteCard elem={{id:"2",
        title:"Note3",
        content:"Content3",
        date:"",
        curDate:""}}></NoteCard>
        </div>
      </div>
      <div style={{textAlign: "-webkit-center"}}> {/*latest todos*/}
      <h1 style={{marginTop:"10vh"}}>Latest Todos</h1>

      </div>
    </div>
  );
}
