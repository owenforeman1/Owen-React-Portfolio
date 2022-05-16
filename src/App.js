import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import image from "./IMG_0799.JPG";
import Footer from "./components/Footer";
import Form from "./components/form";

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
      <div>
        <h2>{activeTab}</h2>
        {activeTab == "About Me" && (
          <>
            <img src={image}></img>

            <p>
              My name is Owen Foreman and this is my first portfolio! I have
              joined this program to further my knowledge of code and computers.
              Computers are my biggest hobby and I want to know as much as I
              can. Anything from gaming all night with my friends to researching
              new tech. I love 3d art, I'm getting into Blender and photoshop so
              I can further my hobby. Hopefully by the end of this program I
              have the capabilites to be a full stack web developer and can get
              my foot in the field!
            </p>
          </>
        )}
        {activeTab == "Portfolio" && <p>HELOWERNN</p>}
        {activeTab == "Contact Me" && <Form/>}
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
      <Footer />
    </div>
  );
}

export default App;
