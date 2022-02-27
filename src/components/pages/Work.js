import React from "react";
import '../../assets/css/style.css';


export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="row">
          <div className="card" style={{ width: "18rem" }}>
            <img src="" alt="" />
            <ul>
              <li>Text Editor</li>
              <li>
                <a href="https://github.com/giovannaruggio/text-editor-pwa">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://github.com/giovannaruggio/text-editor-pwa">
                  Deployed Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
