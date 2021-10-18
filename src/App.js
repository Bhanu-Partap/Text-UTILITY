// import logo from "./logo.svg";
import "./App.css";
// import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
// import Slides from "./Components/Slides";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutus from "./Components/Aboutus";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#343a40";
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  };

  let list = ["bhanu", "priya", "neha", "ayush"];

  return (
    <>
      <Router>
        <Navbar
          toggleMode={toggleMode}
          mode={mode}
          title={list[0]}
          Abouttext="About Us"
        />
        <Switch>
          <Route exact path="/">
            <TextForm toogleMode={mode} heading="Enter your text to analyze" />
          </Route>
          <Route exact path="/about">
            <Aboutus />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
