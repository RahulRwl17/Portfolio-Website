import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button id="box-btn" className="btn" href="/">
      {props.text}
    </button>
  );
}

export default Button;
