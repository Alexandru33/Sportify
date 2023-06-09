import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Login from "./components/pages/Login.js";
import Register from "./components/pages/Register.js";
import Main from "./components/pages/Main.js";
import Book from "./components/pages/Book.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>
          <Route path="/Login" exact>
            <Navbar />
            <Login />
          </Route>
          <Route path="/Register" exact>
            <Navbar />
            <Register />
          </Route>
          <Route path="/Main" exact>
            <Main username="Alex" email="alex@alex" role="Owner" />
          </Route>
          <Route path="/Main/Book" exact>
            <Book />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
