// React imports
import React, { Component } from "react";

// Bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export class Introduction extends Component {
  render() {
    return (
      <Row className="m-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Card
            style={{
              backgroundColor: "#fff0",
              border: "none"
            }}
          >
            <Card.Body>
              <Card.Title>
                {" "}
                <h2 style={{ color: "#005da9" }}>
                  We are committed to handcrafting meaningful experiences to
                  improve the financial health of our community
                </h2>
              </Card.Title>
              <p>
                Our associates are dedicated to our unique style of community
                banking – delivering all the resources you want with the
                attention you deserve. We base our service on the simple
                promises of providing sincere attention, giving trustworthy
                guidance, and being a reliable expert, partner and friend.
              </p>
              <p>
                Today our clients enjoy access to full-service banking at every
                office, as well as convenient electronic banking. We offer a
                complete menu of deposit accounts, loan options, and trust,
                wealth management and investment services.
              </p>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Introduction;
