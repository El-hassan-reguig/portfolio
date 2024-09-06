import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/mylaayoune.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="myLaayoune"
              description="website for tourism in Laayoune involves providing comprehensive, engaging, and practical information for potential visitors. Here's a guide to help structure and describe the key sections of a tourism website for Laayoune, which is the capital city of the Laayoune-Sakia El Hamra region in Western Sahara.."
              ghLink="https://github.com/El-hassan-reguig/mylaayoune"
              demoLink="https://mylaayoune.ma/"
            />
          </Col>


          
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
