import React from "react";
import headshotpx from "../assets/images/headshot.jpg";
import headshot from "../assets/images/headshotpx.jpg";
import "animate.css";
import Resume from "../assets/files/Saharsh-Cherian-CV.pdf";
import useFontCycler from "./useFontCycler";

export default function Contact() {
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
    <div className=" section text-right">
      <div className="parallax3 parallax animate__animated animate__fadeIn ">
        {" "}
        <h1
          className={`title ${fontClass} p-3`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          CONTACT ME{" "}
        </h1>{" "}
      </div>
      <div
        className="d-flex profile contact  w-50 m-auto animate__animated animate__fadeInUp "
        id="contact"
      >
        <div>
          <h2>Get in touch, ask me something, tell me something...</h2>
          <ul className="contact list-unstyled  ">
            <li>
              <a
                href="mailto:saharshdc@gmail.com"
                className="nav-link contactlink  pl-0"
              >
                <i className="fa fa-envelope"></i> Email
              </a>
            </li>
            <li>
              <a href="tel:6472261239" className="nav-link contactlink pl-0">
                <i className="fa fa-phone"></i> Phone
              </a>
            </li>

            <li>
              <a
                href={Resume}
                className="nav-link contactlink pl-0"
                target="blank"
              >
                <i className="fa fa-file"></i> View My CV{" "}
              </a>
            </li>
            <li>
              <a
                href={Resume}
                download="Saharsh Cherian - Full Stack WebDev"
                className="nav-link contactlink pl-0"
              >
                <i className="fa fa-solid fa-download"></i> Download My CV{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="headshots mt-2">
          <a href="#about">
            <img
              src={headshot}
              className="rounded headshot mx-4 shadow "
              alt="headshot"
              height="200px"
            />
            <img
              src={headshotpx}
              className="rounded headshotpx mx-4 shadow "
              alt="headshot"
              height="200px"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
