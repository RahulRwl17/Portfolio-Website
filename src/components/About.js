import React from "react";
import "../components/Style.css";
import about from "../images/about.jpg";
import "../components/About.css";
import Button from "./Button";

function About() {
  return (
    <div className="container" id="space">
      <div className="row">
        <div className="col-12 col-xl-6">
          <div className="container">
            <h3>About me</h3>
            <p id="about-text">
              I am Rahul Rawal, a Post Graduate Student specializing in AI and
              ML. With a strong foundation in programming and a knack for data
              analysis, I'm passionate about leveraging AI and ML to drive
              impactful solutions. Proficient in Python, data preprocessing,
              data visualization, and machine learning frameworks like
              TensorFlow and PyTorch, I'm committed to contributing my skills
              and expertise to cutting-edge projects in the field.
            </p>
            <div>
              <Button text="Download CV" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 d-none d-xl-flex justify-content-center  ">
          <img id="about-img" src={about} alt="This is rahul." />
        </div>
      </div>
    </div>
  );
}

export default About;
