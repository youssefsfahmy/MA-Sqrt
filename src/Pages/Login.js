import React from "react";
import SignIn from "../Components/LogIn/SignIn";

// const useStyles = styled({
//   root: {
//     maxWidth: 345,
//     backgroundColor: "#E94F4F",
//   },
//   media: {
//     height: 140,
//   },
// });

export default function Login() {
  // const classes = styled();
  return (
    <div
      style={{
        justifyContent: "center",
        backgroundColor: "#E94F4F",
      }}
    >
      <SignIn />
    </div>
  );
}
