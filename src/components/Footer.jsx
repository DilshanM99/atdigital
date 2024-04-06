import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/footer.scss";
import logo from "../assets/Logo.png";
function Footer() {
  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col lg="6" md="12" xs="12" className="left">
            <img src={logo} alt="AT DIGITAL LOGO" />
            <p>Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.</p>
          </Col>

          <Col lg="3" md="6" xs="12" className="center">
            <h5>Our Technologies</h5>
            <ul>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </Col>
          <Col lg="3" md="6" xs="12" className="right">
            <h5>Our Services</h5>
            <ul>
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12" className="brand-footer">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
