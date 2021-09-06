// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Notes from "./Pages/Notes";
import Todo from "./Pages/Todo";
import Testlinks from "./Testlinks";
import UserNamecontext from "./Components/UserNamecontext";
import React from "react";
import Titlecontext from "./Components/TodoList/Titlecontext";
import UserInfo from "./Components/SignUp/UserContext";

function App() {
  const [user, setUser] = React.useState("Maya");
  const [title, setTitle] = React.useState("Untitled");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  return (
    <main>
      <BrowserRouter>
        <UserInfo.Provider value={([email, setEmail], [name, setName])}>
          <UserNamecontext.Provider value={[user, setUser]}>
            <Titlecontext.Provider value={[title, setTitle]}>
              <Testlinks />
              <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/Login" component={Login} exact />
                <Route path="/Signup" component={SignUp} exact />
                <Route path="/Notes" component={Notes} exact />
                <Route path="/Todo" component={Todo} exact />
              </Switch>
            </Titlecontext.Provider>
          </UserNamecontext.Provider>
        </UserInfo.Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
