import React from "react";
import "./tag.css";
export const Tag = ({ children, color }) => {
  return (
    <div className="tag" style={{ backgroundColor: color}}>
      <span>{children}</span>
    </div>
  );
};
