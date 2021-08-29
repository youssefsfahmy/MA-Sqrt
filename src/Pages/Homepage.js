import React from "react";
import NavBar from "../Components/HomePage/NavBar";
import homebgd from "../Homepagebgd.png";
import { height } from "@material-ui/system";
import { useContext } from "react";
import UserNamecontext from "../Components/UserNamecontext";

export default function Homepage() {
  const [user, setUser] = useContext(UserNamecontext);
  console.log("User", user);
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
        <img src={homebgd} style={{ width: "100%", height: "40vw" }} />
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
    </div>
  );
}
