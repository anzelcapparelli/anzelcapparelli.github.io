import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <NavLink exact to="/" className="navbar-brand">
        <h1>Anzel Capparelli</h1>
      </NavLink>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-button btn btn-outline-warning text-warning" activeClassName="active" style={{marginRight:'3px'}}>
              About
        </NavLink>
          </li>
          {/* <li className="nav-item">
        <NavLink to="/about" className="nav-button" activeClassName="active">
          About
        </NavLink>
      </li> */}
          <li className="nav-item">
            <NavLink exact to="/portfolio" className="nav-button btn btn-outline-success text-success" activeClassName="active" style={{marginRight:'3px'}}>
              Portfolio
        </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/contact" className="nav-button btn btn-outline-info text-info" activeClassName="active" style={{marginRight:'3px'}}>
              Contact
        </NavLink>
          </li>
        </ul>

    </nav>
  );
}

export default NavTabs;
