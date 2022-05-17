import React, { useState } from "react";
import github from "./GitHub-Mark-64px.png";
import linkedin from "./LI-In-Bug.png";
import stackoverflow from "./icons8-stack-overflow-64.png";
//add stack overflow icon and link

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/owen-foreman-956912232/"
        target="_blank"
      >
        <img src={linkedin} style={{ maxWidth: "64px" }}></img>
      </a>
      <a href="https://github.com/owenforeman1" target="_blank">
        <img src={github}></img>
      </a>
      <a
        href="https://stackoverflow.com/users/19137352/owen-foreman"
        target="_blank"
      >
        <img src={stackoverflow}></img>
      </a>
    </div>
  );
}

export default Footer;
