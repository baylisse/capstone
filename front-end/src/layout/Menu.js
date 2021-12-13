import React from "react";
import { Link } from "react-router-dom";

import "./Layout.css";
/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <nav className="navbar navbar-dark align-items-left p-0">
      <div className="container-fluid d-flex flex-column p-0">
        <hr className="sidebar-divider my-0" />
        <div
          className=" text-light d-flex flex-wrap col-md-6 justify-content-center"
          id="accordionSidebar"
        >
          <div className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <span>Dashboard</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/search">
              <span>Search</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/reservations/new">
              <span>Make New Reservation</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/tables/new">
              <span>New Table</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
