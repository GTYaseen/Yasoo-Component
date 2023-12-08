import React from "react";
import "./input.css";
export const Input = ({ placeholder , ...props}) => {
  return <input className="input" type="text" placeholder={placeholder} />;
};
