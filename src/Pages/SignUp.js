// import { useState, useEffect } from "react";
import React, { useContext } from "react";
import SignUp1 from "../Components/SignUp/SignUp1";
import SignUp2 from "../Components/SignUp/SignUp2";
import UserContext from "../Components/SignUp/UserContext";
export default function SignUp() {
  const [buttonPressed, setButton] = React.useState(0);
  const [email, setEmail] = useContext(UserContext);
  const [name, setName] = useContext(UserContext);
  console.log(buttonPressed);
  return (
    <div
      style={{
        justifyContent: "center",
        backgroundColor: "#E94F4F",
      }}
    >
      {buttonPressed === 0 ? <SignUp1 setButton={setButton} /> : <SignUp2 />}
    </div>
  );
}
