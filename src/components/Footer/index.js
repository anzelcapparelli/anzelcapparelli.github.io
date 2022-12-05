import React from "react";
import "./style.css"

function Footer() {
    return (
        <footer className="footer bg-dark">

            <div className="row justify-content-md-center text-center contactLinks">
            <span>
                <a href="https://www.linkedin.com/in/edward-anzel-capparelli-391ba61b5/" rel="noreferrer" target="_blank">Linked<i className="fab fa-linkedin" /></a>
                <span> | </span>
                <a href="https://github.com/anzelcapparelli?tab=repositories" rel="noreferrer" target="_blank">GitHub <i className="fab fa-github" /></a>
            </span>

        </div>

        </footer >
    );
}

export default Footer;