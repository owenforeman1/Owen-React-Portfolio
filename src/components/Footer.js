import React, { useState } from "react";
import github from "./GitHub-Mark-64px.png";
import linkedin from "./LI-In-Bug.png";

function Footer() {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/owen-foreman-956912232/"
        target="_blank"><img src={linkedin} style={{ maxWidth: "64px" }}></img>
      </a>
      <a href="https://github.com/owenforeman1" target="_blank">
        <img src={github}></img>
      </a>
    </div>
  );
}

export default Footer;
