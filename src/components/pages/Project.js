import React from "react";
import GithubIcon from "./GitHub-Mark-Light-64px.png";
export default function Project({projectObject}) {
  return (
    <div>
      <div className="card">
          <div className="card-title">
            <h4>{projectObject.title}</h4>
            
          </div>
          <div>
            <a href={projectObject.repoLink}>
              <img id="githubicon" src={GithubIcon} alt="githubicon"/>
            </a>

          </div>

          <a href={projectObject.deployedLink}>
            <img
            id="projectimage"
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
