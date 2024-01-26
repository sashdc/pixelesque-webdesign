import React from "react";
import "../styles/header.css";
import "animate.css";
import logoblack from "../assets/images/pix-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar sticky-top">
        <a className="navbar-brand  m-auto  " href="#portfolio">
          <img
            src={logoblack}
            alt="Logo"
            height="70"
            className="d-inline-block animate__animated animate__fadeInDown"
          />
        </a>

        <div className="sticky animate__animated animate__fadeInLeft">
          <div className="d-flex">
            <a href="#about">
              <i className="fa fa-regular fa-user" title="About Me"></i>
              <p className="sticky-info">About</p>
            </a>
          </div>

          <div className="d-flex">
            {" "}
            <a href="#skills">
              <i
                className="fa fa-solid fa-list"
                title="Skills and Things I Know"
              ></i>
              <p className="sticky-info">Skills</p>
            </a>
          </div>

          <div className="d-flex">
            <a href="#portfolio">
              <i
                className="fa fa-solid fa-briefcase"
                title="Portfolio of Work"
              ></i>
              <p className="sticky-info">Portfolio</p>
            </a>
          </div>

          <div className="d-flex">
            <a href="#contact">
              <i className="fa fa-solid fa-envelope" title="Contact Me"></i>
              <p className="sticky-info">Contact</p>
            </a>
          </div>
          <div className="d-flex">
            <a href="https://www.pixelesquephotography.com/" target="blank">
              <i
                className="fa fa-solid fa-camera"
                title="Pixelesque Photography"
              ></i>
              <p className="sticky-info">Photography</p>
            </a>
          </div>
        </div>

        <div className="container navlinks justify-content-around ">
          <ul className="animate__animated animate__fadeInDown">
            <li className="about nav-item">
              <a href="#about">About</a>
            </li>
            <li className="skills nav-item">
              <a href="#skills">Skills</a>
            </li>
            <li className="portf nav-item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="contact nav-item">
              <a href="#contact">Contact</a>
            </li>
            <li className="contact nav-item">
              <a href="https://www.pixelesquephotography.com/" target="blank">
                Photography
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
