import React from "react";
import "../styles/Project.css";
import "animate.css";

export default function Project(props) {
  return (
    <div className="container d-flex justify-content-between align-items-center animate__animated animate__slideInUp">
      <img src={props.img} alt={props.name} className="image my-4" />
      <div className="middle">
        <h3 className="overlaytext text-uppercase">{props.name}</h3>
        {/* only displays deployment icon if a deployment exists */}
        {props.deployment ? (
          <a
            className="m-1"
            href={props.deployment}
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa fa-2x fa-laptop project-icon"
              data-bs-custom-class="dep-tooltip"
              data-toggle="tooltip"
              data-placement="left"
              title="Deployment"
            ></i>
          </a>
        ) : null}
        {/* only displays github icon if a github exists */}
        {props.github ? (
          <a
            className="m-1"
            href={props.github}
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa fa-2x fa-github project-icon"
              data-toggle="tooltip"
              data-placement="right"
              title="Github Repo"
              aria-hidden="true"
            ></i>
          </a>
        ) : null}
        <h5 className="overlaytext ">{props.description}</h5>
        <p className="overlaytext">{props.skills}</p>
      </div>
    </div>
  );
}
