import React from "react";

import "../transparent.css";

function PageTitle(props) {

    return (
        <header>
            <h1 style={{color:'white'}} className="transparent">{props.name}</h1>
        </header>
    );

}

export default PageTitle;