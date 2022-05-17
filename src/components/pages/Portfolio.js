import React from "react";
import image from "./IMG_0799.JPG";
import Project from "./Project";
import Horizeon from  "./horizeon-refactor.png"
export default function Portfolio() {

  const projects = [
    {
      title: "Refactor",
      repoLink: "https://github.com/owenforeman1/Horiseon-Refactor",
      deployedLink: "https://owenforeman1.github.io/Horiseon-Refactor",
      projectImage: Horizeon,
    },
    {
      title: "Refactor",
      repoLink: "https://github.com/owenforeman1/Horiseon-Refactor",
      deployedLink: "https://owenforeman1.github.io/Horiseon-Refactor",
      projectImage: Horizeon,
    },
  ];





  return (
    <div>
      {projects.map((item) => {
        return <Project projectObject={item}/>
      }
      )}
    </div>
  );
}