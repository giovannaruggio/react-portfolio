import React from "react";
import Me from "../../assets/IMG_9511.jpeg";
import "../../assets/css/aboutme.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutMe() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="left">
            <div className="imgcontainer">
              <img src={Me} alt="" />
            </div>
          </div>
        </Col>
        <Col>
          <div className="right">
            <h1>About Me</h1>
            <p>
              Web Developer with motion and graphic design experience
              educated at Temple University in Philadelphia. Recently earned a
              certificate in Full-Stack Web Development from The College of
              Liberal and Professional Studies at University of Pennsylvania.
              With newly developed skills in JavaScript, CSS, and responsive web
              design, my aim is to deliver content that appropriately represents
              a brands’ aesthetic and provide the most engaging and impactful
              user experience. I maintain impeccable attention to detail and
              excel in a fast-paced collaborative environment. With these skills
              along with my ambition and passion, I seek an opportunity to grow
              and thrive as a creative asset in an accomplished company
              delivering high-quality experiences on the web.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
