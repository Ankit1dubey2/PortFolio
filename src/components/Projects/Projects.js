import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import newsmania from "../../Assets/Projects/newsmania.png";
import bloodbank from "../../Assets/Projects/bloodbank.png";
import swaadghartak from "../../Assets/Projects/swaadghartak.png";

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
              imgPath={newsmania}
              isBlog={false}
              title="News Mania"
              description="A news aggregation application built with the MERN stack and NewsAPI. It collects and displays real-time news from multiple sources, featuring a server component for data management and a client interface for a seamless user experience. Users can view, filter, and explore articles by category, ensuring they stay updated with the latest news."
              ghLink="https://github.com/Ankit1dubey2/News-Mania"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swaadghartak}
              isBlog={false}
              title="Swaad Ghar Tak"
              description="A food ordering platform developed with NodeJS, Express, MongoDB, Mongoose, and EJS. It enables users to effortlessly place orders from their favorite restaurants, featuring dynamic menu management and real-time updates. The platform offers a responsive and intuitive interface, ensuring a smooth and efficient online ordering experience."
              ghLink="https://github.com/Ankit1dubey2/Swaad-Ghar-Tak"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloodbank}
              isBlog={false}
              title="Blood Bank"
              description="A web application for managing blood inventory, donors, hospitals, and organizations, built with Express, Node.js, MongoDB, and React. It features role-specific dashboards for Admin, Organization, Donor, and Hospital, with real-time record-keeping and contribution tracking. The tech stack includes React, Redux, Tailwind CSS, and MongoDB."
              ghLink="https://github.com/Ankit1dubey2/Blood-Bank"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
