import React from "react";
import "../assets/css/footer.css";
import Email from "../assets/email.png";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="image">
      <a href="https://github.com/giovannaruggio" target="_blank"><img id="image" src={Github} alt=""/></a>
      <a href="https://www.linkedin.com/in/giovannaruggio/" target="_blank"><img id="image" src={Linkedin} alt=""/></a>
      <p>Made with ❤️ by Giovanna</p>
      </div>
    </footer>
  );
}
