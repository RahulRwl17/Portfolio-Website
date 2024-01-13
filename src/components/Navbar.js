import React from "react";
// import { Link, NavLink } from "react-router-dom";
import "../components/Navbar.css";
// import Button from "./Button";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light p-0">
      <div className="container">
        <a className="navbar-brand logo" href="/">
          RahulRwl
        </a>
        <div className="d-lg-none ">
          <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
        </div>
        <div
          className={
            isOpen
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
          id="nav-menu"
        >
          <ul className="navbar-nav nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link connect-btn" href="/">
                <span className=" h-100 ">
                  <i className="bi bi-person-plus"></i>
                </span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
