import React from "react";
import "./input.css";
export const Input = ({ placeholder, value, onChange, ...props }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className="input"
      type="text"
      placeholder={placeholder}
    />
  );
};
