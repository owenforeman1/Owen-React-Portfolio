import React from "react";
import Project from "./Project";
import Horizeon from  "./horizeon-refactor.png";
import FitnessPal from "./fitnesspal.png";
import DailyMealPlanner from "./new-project.png";
import WorkDay from "./work-day.png";
import Quiz from "./quiz.png";
import Note from "./not.png";
//need one more project

export default function Portfolio() {

  const projects = [
    {
      title: "Refactor",
      repoLink: "https://github.com/owenforeman1/Horiseon-Refactor",
      deployedLink: "https://owenforeman1.github.io/Horiseon-Refactor",
      projectImage: Horizeon,
    },
    {
      title: "Fitness",
      repoLink: "https://github.com/owenforeman1/Fitness-Pal",
      deployedLink: "https://fitness-pal-deploy.herokuapp.com/login",
      projectImage: FitnessPal,
    },
    {
      title: "Meal",
      repoLink: "https://github.com/owenforeman1/daily-meal-planner",
      deployedLink: "https://owenforeman1.github.io/daily-meal-planner/",
      projectImage: DailyMealPlanner,
    },
    {
      title: "Work",
      repoLink: "https://github.com/owenforeman1/Work-Day-Schedule",
      deployedLink: "https://owenforeman1.github.io/Work-Day-Schedule/",
      projectImage: WorkDay,
    },
    {
      title: "Quiz",
      repoLink: "https://github.com/owenforeman1/US-Citizenship-Quiz",
      deployedLink: "https://owenforeman1.github.io/US-Citizenship-Quiz/",
      projectImage: Quiz,
    },
    {
      title: "Notes",
      repoLink: "https://github.com/owenforeman1/Note-Taker",
      deployedLink: "https://note-taker-owenf.herokuapp.com/",
      projectImage: Note,
    },
  ];
  
  return (
    <div>
      {projects.map((item) => {
        return <Project key={item.title} projectObject={item}/>
      }
      )}
    </div>
  );
}