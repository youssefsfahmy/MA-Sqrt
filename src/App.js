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
import UserIdcontext from "./Components/LogIn/UserIdcontext";
function App() {
  const [id, setId] = React.useState("");
  const [user, setUser] = React.useState("Maya");
  const [title, setTitle] = React.useState({
    
  });
  const [userdet, setUserdet] = React.useState({
    name: "",
    email: "",
  });

  return (
    <main>
      <BrowserRouter>
        <UserIdcontext.Provider value={[id, setId]}>
          <UserInfo.Provider value={[userdet, setUserdet]}>
            <UserNamecontext.Provider value={[user, setUser]}>
              <Titlecontext.Provider value={[title, setTitle]}>
                <Testlinks />
                <Switch>
                  <Route path="/home" component={Homepage} exact />
                  <Route path="/" component={Login} exact />
                  <Route path="/Signup" component={SignUp} exact />
                  <Route path="/Notes" component={Notes} exact />
                  <Route path="/Todo" component={Todo} exact />
                </Switch>
              </Titlecontext.Provider>
            </UserNamecontext.Provider>
          </UserInfo.Provider>
        </UserIdcontext.Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
