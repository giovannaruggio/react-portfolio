import React from "react";
import "../../assets/css/projects.css";
import projects from "../../utils/projects";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const projectList = projects.map((project) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={project.image} key={project.id} />
    <Card.Body>
      <Card.Title>{project.title}</Card.Title>
    </Card.Body>
    <Card.Body>
      <Card.Link href={project.link} target="_blank">
        Deployed App
      </Card.Link>
      <p></p>
      <Card.Link href={project.repo} target="_blank">
        GitHub Repo
      </Card.Link>
    </Card.Body>
  </Card>
));

export default function Portfolio() {
  return (
    <Container>
      <h1>Projects</h1>
      <Row className="projects">{projectList}</Row>
    </Container>
  );
}
