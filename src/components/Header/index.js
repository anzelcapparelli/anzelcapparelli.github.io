import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{clear: "both", paddingTop: 30, paddingBottom: 30, textAlign: "center" }}
      className="jumbotron jumbotron-fluid bg-dark"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
