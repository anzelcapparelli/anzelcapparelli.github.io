import React, { useState } from "react";
import "./style.css";
import { Modal, Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

function Project(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const toggleShow = () => setShow(!show);

    return (
        <div className="card">
            <div>
                <h4 className="text-light">{props.name}</h4>
                <img src={props.imgSrc} className="img-fluid" alt={props.name} onClick={handleShow} />
                {/* change to an 'if' statement, or a ternary operator based on bool setShow! Way to steer away from */}
                <div className="links justify-content-md-center text-center ">
                    <span>
                        <a href={props.deployedHref} rel="noreferrer" target="_blank">Deployed Site</a>
                        <span> | </span>
                        <a href={props.githubHref} rel="noreferrer" target="_blank">GitHub Repo</a>
                    </span>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {props.desc.map(tidbit =>
                            <li key={uuidv4()}>{tidbit}</li>
                        )}
                    </ul>
                </Modal.Body>
            </Modal>
            <card className="text-light">
                <body className="text-light">
                    <ul>
                        {props.desc.map(tidbit =>
                            <li key={uuidv4()}>{tidbit}</li>
                        )}
                    </ul>
                </body>
            </card>

        </div>

    );
}

export default Project;