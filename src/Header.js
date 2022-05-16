import React, { useState } from "react";
import Navigation from "./Navigation";

function Header() {
  const navArray = [ "About Me", "Portfolio", "Contact Me", "Resume" ]

  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <header className="App-header">
      <Navigation navArray={navArray} activeTab={activeTab} setActiveTab={setActiveTab}/>
    </header>
  );
}

export default Header;
