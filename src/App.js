// import logo from "./logo.svg";
import "./App.css";
import {Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Notes from "./Pages/Notes";
import Todo from "./Pages/Todo";
import Testlinks from "./Testlinks";
import UserNamecontext from "./Components/UserNamecontext";
import React from "react";
function App() {
  const [user, setUser] = React.useState("Maya");
  return (
    <main>
      <UserNamecontext.Provider value={[user, setUser]}>
        <Testlinks />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/Signup" component={SignUp} exact />
          <Route path="/Notes" component={Notes} exact />
          <Route path="/Todo" component={Todo} exact />
        </Switch>
      </UserNamecontext.Provider>
    </main>
  );
}

export default App;
