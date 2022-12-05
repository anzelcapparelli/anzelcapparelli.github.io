import React, { useState } from "react";
import "./style.css";
import CloseButton from 'react-bootstrap/CloseButton';
import { v4 as uuidv4 } from 'uuid';

function Project(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const toggleShow = () => setShow(!show);



    return (
        <div className="card m-5">
            <div
                className="container p-0"
            >
                <h4 className="text-light projectTitle ml-1">{props.name}</h4>

                {/* <div className="container"> */}
                <img
                    src={props.imgSrc}
                    className={`img${props.order} project-img`}
                    alt={props.name}
                    onClick={handleShow}
                    style={{ opacity: show ? 0.1 : 1 }}
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
                style={show ? {opacity: 1 } : { cursor: "default", opacity: 0 }}
            >
                <hr className="descriptionTop"></hr>
                <body className="text-light descriptionBG">
                    <CloseButton
                        className="descriptionClose mb-2 mr-2"
                        variant="white"
                        onClick={handleClose}
                        style={show ? {} : { cursor: "default" }}
                    />
                    <br />
                    <ul
                        className="descriptionList"
                        style={show ? {} : { cursor: "default"}}
                        onClick={handleShow}
                    >
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