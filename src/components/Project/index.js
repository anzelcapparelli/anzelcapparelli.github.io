import React from "react";
import "./style.css";

function Project(props) {


    return (
        <div className="card">
            <h4>{props.name}</h4>
            <img src={props.imgSrc} className="img-fluid" alt={props.name} />
            <div className="links">
                <span> <a href={props.deployedHref} rel="noreferrer" target="_blank">Deployed
        Site</a>
      |
      <a href={props.githubHref} rel="noreferrer" target="_blank">GitHub Repo</a>
                </span>
            </div>
        </div>
    );
}

export default Project;