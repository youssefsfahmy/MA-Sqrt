import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function SignUp1(props) {
  const [email, setEmail] = useContext(UserContext);
  const [name, setName] = useContext(UserContext);

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
          E-mail{" "}
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
        onChange={(event) => setEmail(event.target.value)}
      />
      <div>
        <label
          style={{
            fontWeight: "600",
            fontFamily: "sans-serif",
            paddingLeft: "5vw",
          }}
        >
          Full Name{" "}
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
        onChange={(event) => setName(event.target.value)}
      />
      <div>
        <button
          onClick={() => {
            props.setButton(1);
          }}
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
          NEXT
        </button>
      </div>
    </div>
  );
}
