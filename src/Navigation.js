import React, { useState } from "react";

function Navigation(props) {
  //about me
  //portfolio
  //contact me
  // resume
  return (
    <>
      {props.navArray.map((tabName) => {
        return (
          <button key={tabName} onClick={() => props.setActiveTab(tabName)} className={props.activeTab == tabName ? "active" : ""}>
            {tabName}
          </button>
        );
      })}
    </>
  );
}

export default Navigation;
