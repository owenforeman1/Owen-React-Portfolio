import React, { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  //about me
  //portfolio
  //contact me
  // resume
  const navArray = ["About Me", "Portfolio", "Contact Me", "Resume"];

  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="App">
      <Header
        navArray={navArray}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <h2>{activeTab}</h2>
      {activeTab == "About Me" && <p>Hello</p>}
      {activeTab == "Portfolio" && <p>HELOWERNN</p>}
      {activeTab == "Contact Me" && <p>Thi is me</p>}
      {activeTab == "Resume" && (
        <>
          <a href="https://docs.google.com/document/d/1f52IqBVJxT81Yvr8O-L1nPIFNRvjzJCpvuQwrAEaYYY/edit">
            Download my resume
          </a>
          <h3>Front-end Proficienceies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li></li>
          </ul>
          <h3>Back-end Proficienceies</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequalize</li>
            <li>Rest</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
