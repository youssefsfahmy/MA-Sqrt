import React from "react";
import { Link } from "react-router-dom";
import createContext from "react";
import { useContext } from "react";
import UserNamecontext from "../UserNamecontext";
import { useHistory } from "react-router-dom";
import user from "../UserNamecontext";
import { useState } from "react";
import axios from "axios";

// import { History } from "history";
export default function SignIn() {
  const [email, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [user, setUser] = useContext(UserNamecontext);
  const history = useHistory();
  async function handlelogin() {
    const response = await axios.post("http://localhost:8000/users/signin", {
      User: {
        email: email,
        password: password,
      },
    });
    console.log(response);
    // let path = "/";
    // setUser(name);
    // history.push(path);
  }
  return (
    <div
      style={{
        justifyContent: "center",
        width: "30vw",
        height: "40vw",
        marginLeft: "40vw",
        paddingTop: "10vw",
        backgroundColor: "white",
      }}
    >
      <h1
        style={{
          marginLeft: "10vw",
          fontFamily: "sans-serif",
          fontWeight: "800",
        }}
      >
        SIGN IN
      </h1>
      <div>
        <label
          style={{
            fontWeight: "600",
            fontFamily: "sans-serif",
            paddingLeft: "5vw",
          }}
        >
          Phone OR Email{" "}
        </label>
      </div>
      <input
        style={{
          marginLeft: "5vw",
          marginBottom: "2vw",
          height: "2vw",
          width: "20vw",
        }}
        type="text"
        onChange={
          ((event) => setName(event.target.value),
          (event) => setMail(event.target.value))
        }
      />
      <div>
        <label
          style={{
            fontWeight: "600",
            fontFamily: "sans-serif",
            paddingLeft: "5vw",
          }}
        >
          Password{" "}
        </label>
      </div>
      <input
        style={{
          marginLeft: "5vw",
          marginBottom: "2vw",
          height: "2vw",
          width: "20vw",
        }}
        type="text"
        onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        <button
          style={{
            backgroundColor: "white",
            border: "none",
            color: "#ED1C24",
            fontWeight: "300",
            fontSize: "1vw",
            paddingLeft: "5vw",
            marginBottom: "2.5vw",
          }}
        >
          Forget Password?
        </button>
      </div>
      <div>
        <button
          style={{
            border: "none",
            marginLeft: "5vw",
            width: "20vw",
            height: "2vw",
            backgroundColor: "#ED1C24",
            color: "white",
            fontWeight: "700",
            fontSize: "1vw",
            fontFamily: "sans-serif",
          }}
          onClick={handlelogin}
        >
          LOG IN
        </button>
      </div>
      <div>
        <Link to="/SignUp">
          <button
            style={{
              border: "none",
              marginLeft: "5vw",
              marginTop: "1.5vw",
              width: "20vw",
              height: "2vw",
              backgroundColor: "#ED1C24",
              color: "white",
              fontWeight: "700",
              fontSize: "1vw",
              fontFamily: "sans-serif",
            }}
          >
            SIGN UP
          </button>
        </Link>
      </div>
    </div>
  );
}
