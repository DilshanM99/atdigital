import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../components/Button";
import "../styles/home.scss";
import Accordionn from "../components/Accordion";
import sliderImg from "../assets/slider-img.jpg";
import imgB from '../assets/img-b.png';
import imgC from '../assets/img-c.png';

const accordionDetails = [
  {
    heading: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    body: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    heading:
      "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    body: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum.",
  },
  {
    heading:
      "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    body: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum.",
  },
];

function Home() {
  return (
    <div>
      <Container fluid>
        <Row className="section-a">
          <Col className="content">
            <img src={sliderImg} alt="background" className="w-100 img-fluid" />
            <div className="content-box">
              <h1>
                We crush your competitors, goals, and sales records - without
                the B.S.
              </h1>
              <Button text="Get free consultation"/>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="section-b">
          <Col lg={5} md={5} xs={12} className="left d-flex justify-content-center align-items-center">
            <img src={imgB} alt="Web & Mobile App Development" className="img-fluid" />
          </Col>
          <Col lg={7} md={7} xs={12} className="right d-flex flex-column justify-content-center">
            <h2 data-aos="fade-up">Web & Mobile App Development</h2>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <Button text="LEARN MORE" />
          </Col>
        </Row>
        <Row className="section-c">
          <Col lg={7} md={7} xs={12} className="left right d-flex flex-column justify-content-center">
            <h2>Digital Strategy Consulting</h2>
            <p>
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <Button text="LEARN MORE" />
          </Col>
          <Col llg={5} md={5} xs={12} className="right d-flex justify-content-center align-items-center">
            <img src={imgC} alt="Digital Strategy Consulting" className="img-fluid"/>
          </Col>
        </Row>

        <Row className="section-d justify-content-center">
          <Col lg={10} md={12} xs={12} className="content d-flex flex-column">
            <h2 className="content-heading">Frequently asked questions</h2>
            <Accordionn accordionDetails={accordionDetails} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
