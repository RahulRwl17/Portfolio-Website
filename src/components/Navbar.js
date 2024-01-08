import React from "react";
// import { Link } from "react-router-dom";
import "../components/Navbar.css";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light p-0">
      <div className="container-fluid d-inline-block ">
        <div className="row">
          <div className="col-6 logo">
            {/* <a href="/" style={{ textDecoration: "none" }}>
              <span style={{ color: "#0099ff" }}>R</span>
              <span style={{ color: "#ff3300" }}>A</span>
              <span style={{ color: "#ffcc00" }}>H</span>
              <span style={{ color: "rgb(0, 144, 144)" }}>U</span>
              <span style={{ color: "#0099ff" }}>L</span>
            </a> */}
            <span>RahulRwl</span>
          </div>
          <div className="col-auto collapse navbar-collapse" id="nav">
            <ul className="navbar-nav gap-5 p-2">
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
              {/* <li className="nav-item p-1"> */}
              <Button text="Let's Connect" />
              {/* </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
