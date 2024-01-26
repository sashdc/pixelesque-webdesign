import React from "react";
import headshotpx from "../assets/images/headshotpx.jpg";
import headshot from "../assets/images/headshot.jpg";
// import banner1 from "../assets/images/banner1.jpg"

import "animate.css";

export default function Header() {
  return (
    <div className="section aboutme " data-anchor="aboutme">
      <div
        className="d-flex profile h-100 w-75 m-auto p-2 animate__animated animate__fadeIn"
        id="about"
      >
        <div className="headshots">
          <a href="#contact">
            <img
              src={headshot}
              className="rounded headshot m-4 shadow "
              alt="headshot"
              height="200px"
            />
            <img
              src={headshotpx}
              className="rounded headshotpx m-4 shadow "
              alt="headshot"
              height="200px"
            />
          </a>
        </div>
        <div className="">
          <h1 className="">Hi! I'm Saharsh! (but you can call me Sash)</h1>
          <p>
            I'm a full stack developer with a background in photography,
            advertising, and graphic design. I aim to use my years in the visual
            arts to create webapps that are bold, pleasing to the eye, and a joy
            to use.
          </p>
          <p>
            With over 12 years of work in client facing fields all over the
            world, I am well versed in making things that look good, feel good,
            and make my clients happy.
          </p>
          <p>
            For the 5 minutes a day that I'm not writing code or editing photos,
            I'm probably incurring the wrath of my 2 kids, Zoe & Ozzy.
          </p>
          <p>
            Have a look around, see what I've done, and get in touch if you want
            to learn more or work together.
          </p>
          <p>Ta!</p>
        </div>
      </div>
    </div>
  );
}
