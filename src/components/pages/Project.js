import React from "react";
import GithubIcon from "./GitHub-Mark-Light-64px.png";
export default function Project({projectObject}) {
  return (
    <div>
      <div class="card">
          <div class="card-title">
            <h4>{projectObject.title}</h4>
            
          </div>
          <div class="cardSubtitle">
            <a href={projectObject.repoLink}>
              <img src={GithubIcon} alt="githubicon"/>
            </a>

          </div>

          <a href={projectObject.deployedLink}>
            <img
              src={projectObject.projectImage}
              alt={projectObject.title}/>

          </a>
        </div>
    </div>
  );
}

//image 
//github link
//deployed link
//title
