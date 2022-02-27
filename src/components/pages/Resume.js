import React from "react";
import "../../assets/css/style.css";
import "../../assets/css/resume.css";
import resume from "../../assets/resume.pdf";

export default function Resume() {
  return (
    <div className="resume">
      <h3>Resume</h3>
      <h5>
        <a href={resume} target="_blank">Download Resume!</a>
      </h5>
      <ul>
        <li>Strong Communication</li>
        <li>Adaptabale problem-solver</li>
        <li>Creative with excellent attention to detail</li>
        <li>Thrive through teamwork</li>
      </ul>
      <ul>
      <li>Adobe Creative Cloud</li>
      <li>HTML5 & CSS3</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>MySQL</li>
      <li>MongoDB</li>
      <li>GraphQL</li>
      <li>REACT</li>
      </ul>
    </div>
  );
}
