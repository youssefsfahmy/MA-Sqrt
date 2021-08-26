import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
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
        <Link to="/Homepage">
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
          >
            LOG IN
          </button>
        </Link>
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
