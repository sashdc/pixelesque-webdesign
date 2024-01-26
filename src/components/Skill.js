import React from "react";


export default function Skill(props) {
    return (
    <div className="d-flex mx-2 skills flex-column">
          <img
            className="icon"
            src={props.img}
            alt= {props.name}
            height="50px"
           />
          <h5 className="skillname">{props.name}</h5>
        </div>
    )
}