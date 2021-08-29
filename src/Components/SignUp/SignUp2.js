import React from "react";
import { Link } from "react-router-dom";

export default function SignUp2() {
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
        SIGN UP
      </h1>
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
          height: "2vw",
          width: "20vw",
        }}
        type="text"
      />
      <div
        style={{
          display: "flex",
          marginLeft: "3.5vw",
        }}
      >
        <div>
          <ul>
            <li
              style={{
                color: "green",
              }}
            >
              {" "}
              Lower-case{" "}
            </li>
            <li
              style={{
                color: "green",
              }}
            >
              {" "}
              Upper-case{" "}
            </li>
          </ul>
        </div>
        <ul>
          <li
            style={{
              color: "green",
            }}
          >
            {" "}
            8-Characters{" "}
          </li>
          <li
            style={{
              color: "green",
            }}
          >
            {" "}
            Numbers{" "}
          </li>
        </ul>
        <div></div>
      </div>

      <div>
        <label
          style={{
            fontWeight: "600",
            fontFamily: "sans-serif",
            paddingLeft: "5vw",
          }}
        >
          Confirm Password{" "}
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
        <Link to="/login">
          <button
            // onClick={() => {
            //   props.setButton(1);
            // }}
            style={{
              border: "none",
              marginLeft: "5vw",
              width: "20vw",
              height: "2vw",
              backgroundColor: "#67E0FD",
              color: "white",
              fontWeight: "700",
              fontSize: "1vw",
              fontFamily: "sans-serif",
            }}
          >
            SUBMIT
          </button>
        </Link>
      </div>
    </div>
  );
}
