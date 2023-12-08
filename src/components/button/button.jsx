import React from "react";
import "./button.css";

function Button({ children, type, size, ...props }) {
  let width, height, fontSize;

  if (size === "small") {
    width = "50px";
    height = "20px";
    fontSize = "10px"; // Adjusted font size for better visibility
  } else if (size === "medium") {
    width = "80px";
    height = "30px";
    fontSize = "14px";
  } else if (size === "large") {
    width = "100px";
    height = "40px";
    fontSize = "16px";
  }

  let buttonStyle = {
    width: width,
    height: height,
    fontSize: fontSize,
  };

  return (
    <button className={type} style={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
