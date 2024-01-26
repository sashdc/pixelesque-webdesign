import React from "react";
import "animate.css";
import "../styles/portfolio.css";
import Project from "./Project";
import useFontCycler from "./useFontCycler";

const { projectData } = require("./projectdata/projectdata");

export default function Portfolio() {
  const defaultFont = "Rubik Broken Fax";
  const fonts = [
    "Rubik Broken Fax",
    "Rubik Bubbles",
    "Rubik Doodle Triangles",
    "Rubik Iso",
    "Rubik Maps",
    "Rubik Moonrocks",
    "Rubik Pixels",
    "Rubik Wet Paint",
    "Rubik Doodle Shadow",
    "Rubik Beastly",
  ];

  const { fontClass, handleMouseEnter, handleMouseLeave } = useFontCycler(
    defaultFont,
    fonts
  );

  return (
    <div
      className="   my-4  w-100 text-center m-auto animate__animated animate__fadeIn"
      id="portfolio"
    >
      <div className="section">
        <div className="parallax2 parallax animate__animated animate__fadeIn ">
          <h1
            className={`title ${fontClass} p-3`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            WHAT HAVE I MADE?{" "}
          </h1>{" "}
        </div>

        <div className="portfolio ">
          {projectData.map((project) => (
            <Project
              name={project.name}
              description={project.description}
              key={project.name}
              img={project.img}
              github={project.github}
              deployment={project.deployment}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
