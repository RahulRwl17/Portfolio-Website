import React from "react";
import "./Contact.css";
import Button from "./Button";
import "../components/Style.css";

function Contact() {
  return (
    <div className="container" id="space">
      {/* <div className="container" id="vl">
        <div className="vl"></div>
      </div> */}
      <div className="row">
        <div className="col-xl-12">
          <div className="d-block text-center p-5">
            <span className="sub-title">GET IN TOUCH</span>
            <h3 className="title">Let’s discuss for a project</h3>
            {/* <span className="sub-title">LET’s DISCUSS FOR A PROJECT</span>
            <h3 className="title">Get In Touch</h3> */}
          </div>
        </div>
      </div>
      <div className="row">
        {/* <div className="col-12 contact-title mb-3">Get in Touch</div> */}
        <div className="col-lg-8">
          <form action="/">
            <div className="row">
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="contact-name"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="contact-email"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="contact-sub"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-group">
                  <textarea
                    type="text"
                    className="form-control w-100"
                    cols="30"
                    rows="9"
                    id="contact-msg"
                    placeholder="Message"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="bi bi-house"></i>
            </span>
            <div className="media-body">
              <h5>Scarborough, Toronto</h5>
              <p>M1K4E8, ON, CA</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="">
              <i className="bi bi-telephone-plus"></i>
            </span>
            <div className="media-body">
              <h5>+1 (647)-896-2491</h5>
              <p>Feel Free to Call.</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="bi bi-envelope"></i>
            </span>
            <div className="media-body">
              <h5>rahulrwl.support@gmail.com</h5>
              <p>Send me your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Button text="send message" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
