import React, { useState } from "react";
import Navigation from "../Navigation";

function Header(props) {

  return (
    <header className="App-header">
      <h1>Hellowen</h1>
      <Navigation navArray={props.navArray} activeTab={props.activeTab} setActiveTab={props.setActiveTab}/>
    </header>
  );
}

export default Header;
