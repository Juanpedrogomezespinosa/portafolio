import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Qualification from "./Components/qualification/Qualification";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
      </main>
    </>
  );
}

export default App;
