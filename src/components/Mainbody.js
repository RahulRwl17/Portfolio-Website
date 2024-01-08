import React from "react";
import img1 from "../images/cards.jpg";
import "../components/Mainbody.css";
import "../components/Style.css";

function Mainbody(props) {
  return (
    <div className="container" id="space">
      <div class="container" id="vl">
        <div class="vl"></div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="d-block text-center p-5">
            <span className="sub-title">SERVICE PROVIDED </span>
            <h3 className="title">
              Build brands campaigns <br />& digital projects
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container d-grid d-md-flex justify-content-center">
          <div className="col-xl-3 col-md-3">
            <div className="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="/" className="card-text">
                  Get project details
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3">
            <div className="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="/" className="card-text">
                  Get project details
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3">
            <div className="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="/" className="card-text">
                  Get project details
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3">
            <div className="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="/" className="card-text">
                  Get project details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
