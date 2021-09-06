import React, { useContext } from "react";
import UserInfo from "./UserContext";

export default function SignUp1(props) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [userdet, setUserdet] = useContext(UserInfo);

  async function validatemail() {
    setUserdet({
      email: email,
      name: name,
    });
    const res = await axios.post("localhost:8000/users/signup1", {
      User: {
        email: userdet.email,
        name: userdet.name,
      },
    });
    console.log(res);
    props.setButton(1);
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
        <input
          style={{
            marginLeft: "5vw",
            marginBottom: "2vw",
            height: "2vw",
            width: "20vw",
          }}
          type="text"
          onChange={(event) => {
            console.log("email", event.target.value);
            setEmail(event.target.value);
          }}
        />
      </div>

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
        <input
          style={{
            marginLeft: "5vw",
            marginBottom: "2vw",
            height: "2vw",
            width: "20vw",
          }}
          type="text"
          onChange={(event) => {
            console.log("name", event.target.value);
            setName(event.target.value);
          }}
        />
      </div>

      <div>
        <button
          onClick={validatemail}
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
