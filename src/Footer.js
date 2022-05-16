import React, { useState } from "react";
import github from "./GitHub-Mark-64px.png";
import linkedin from "./LI-In-Bug.png";

function Footer() {
  return (
    <>
      <img src={github}></img>
      <img src={linkedin} style={{maxWidth: "64px"}}></img>
    </>
  );
}

export default Footer;
