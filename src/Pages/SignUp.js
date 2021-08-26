import { useState, useEffect } from "react";
import React from "react";
import SignUp1 from "../Components/SignUp/SignUp1";
import SignUp2 from "../Components/SignUp/SignUp2";

export default function SignUp() {
  const [buttonPressed, setButton] = React.useState(0);
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
