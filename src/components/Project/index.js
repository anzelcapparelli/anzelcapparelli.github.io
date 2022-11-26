import React, { useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from 'uuid';

function Project(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const toggleShow = () => setShow(!show);



    return (
        <div className="card m-5">
            <div
                className="container"
            >
                <h4 className="text-light projectTitle">{props.name}</h4>

                {/* <div className="container"> */}
                <img
                    src={props.imgSrc}
                    className={`img${props.order} project-img`}
                    alt={props.name}
                    onClick={handleShow}
                    style={{ opacity: show ? 0.5 : 1 }}
                />
                {/* change to an 'if' statement, or a ternary operator based on bool setShow! Way to steer away from */}



                <div className="links justify-content-md-center text-center ">
                    <span>
                        <a href={props.deployedHref} rel="noreferrer" target="_blank">Deployed Site</a>
                        <span> | </span>
                        <a href={props.githubHref} rel="noreferrer" target="_blank">GitHub Repo</a>
                    </span>
                </div>
            </div>


            <card 
            className="text-light projectDescription" 
            show={show} 
            style={{ opacity: show ? 1 : 0 }}
            onClick={show? "":{handleShow}}
            // ^^^ onClick not currently working as intended
            >
                <body className="text-light">
                    <span
                        className="descriptionClose"
                        onClick={handleClose}
                        style={show ? { cursor: "pointer" } : {}}
                    >
                        x
                    </span>
                    <ul>
                        {props.desc.map(tidbit =>
                            <li key={uuidv4()}>{tidbit}</li>
                        )}
                    </ul>
                </body>
            </card>

        </div>
        // </div>

    );
}

export default Project;