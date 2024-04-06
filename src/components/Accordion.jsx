import React from "react";
import Accordion from "react-bootstrap/Accordion";
import '../styles/accordion.scss';

function Accordionn({ accordionDetails }) {
  return (
    <div className="accordion-container">
      <Accordion defaultActiveKey="0">
        {accordionDetails.map((accordion, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{accordion.heading}</Accordion.Header>
            <Accordion.Body>{accordion.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Accordionn;
