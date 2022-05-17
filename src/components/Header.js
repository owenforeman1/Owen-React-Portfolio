import React, { useState } from "react";
import Navigation from "./Navigation";
//add hover effect 

function Header(props) {

  return (
    <header className="App-header">
      <h1 id="name-header">Owen Foreman</h1>
      <div>
        <Navigation
          navArray={props.navArray}
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
      </div>
    </header>
  );
}

export default Header;
