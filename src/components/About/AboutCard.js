import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Dubey </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently pursuing a Bachelor of Engineering at D.Y. Patil College of Engineering, Pune, expected to graduate in June 2025.
            <br />
            I completed my Higher Secondary Education at Guru Nanak School for Excellence in Adipur, Gujarat.
            <br />
            I hold certifications in Python for Everybody and Web Design for Everybody from the University of Michigan through Coursera, as well as courses in Data Structures & Algorithms from Alpha Batch.
            <br/>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
