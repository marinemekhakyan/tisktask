import React from "react";
import "./Title.css";

const Title = ({ children }) => (
  <div className="title-box">
    <h1 className="title">{ children }</h1>
  </div>
);

export default Title;
