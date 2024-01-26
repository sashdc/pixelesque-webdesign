import React from "react";
import "animate.css";
import Skill from "./Skill";
import useFontCycler from "./useFontCycler";

const { skillData } = require("./skilldata/skilldata");

export default function Skills() {
  // use this to have the fonts cycle on hover
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
      className="text-center section m-auto animate__animated animate__fadeIn"
      id="skills"
    >
      <div className="parallax parallax1 animate__animated animate__fadeIn ">
        {" "}
        <h1
          className={`title p-3 m-auto ${fontClass}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          WHAT DO I KNOW?{" "}
        </h1>{" "}
      </div>
      {/* <h1 className="mb-3">WHAT DO I KNOW? </h1> */}
      <div className="h3">LANGUAGES & LIBRARIES </div>
      {/* <p>
              JavaScript • MySQL • NoSQL • MongoDB • GraphQL • REST API • Express • ReactJS • NodeJS •
              jQuery  • HTML • CSS3 • Handlebars • Bootstrap • Bulma • Semantic UI
            </p> */}
      <div className=" d-flex  m-auto mt-2  skillbar">
        {skillData.map((skill) => (
          <Skill name={skill.name} img={skill.img} key={skill.name}/>
        ))}
      </div>
      <div className="h3 mt-2">INDUSTRY PRACTICES AND APPLICATIONS</div>
      <p className="h5">
        Agile Methodology • TDD • Github • Heroku • Insomnia • MongoDBCompass
      </p>
    </div>
  );
}
