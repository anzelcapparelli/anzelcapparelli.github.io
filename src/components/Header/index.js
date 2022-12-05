import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark">
      {children}
    </div>
  );
}

export default Jumbotron;
