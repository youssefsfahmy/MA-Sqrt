import { height } from "@material-ui/system";
import React from "react";
import NavBar from "../Components/HomePage/NavBar";
import homebgd from "../Homepagebgd.png";

export default function Homepage() {
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
        <img src={homebgd} style={{ width: "100%" }} />
        <h1 style={{ zIndex: 2 }}>Welcome Back,Maya</h1>
      </div>
    </div>
  );
}
