// React imports
import React, { Component } from "react";

// import to Navigate through components
import { Link } from "react-router-dom";

// Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class TeamBanner extends Component {
  render() {
    return (
      <Row className="m-5">
        <Col
          md={{ span: 8, offset: 2 }}
          style={{ backgroundColor: "aliceblue" }}
        >
          <Card
            style={{
              backgroundColor: "#fff0",
              border: "none"
            }}
          >
            <Card.Body>
              <Card.Title>
                {" "}
                <h2 style={{ color: "#0a1f41" }}>
                  Our team is here for you, through thick and thin.
                </h2>
              </Card.Title>
              <p>
                We’re proud of our team of bankers and how hard they work for
                our clients and communities. We’re at your service and you can
                count on our time. Our responsibility is to help you. Our
                privilege is to find the right solution for your lifestyle.
              </p>
              <p>
                We make decisions locally and respond quickly. In fact, our
                bankers often give out our direct phone numbers, home phone
                numbers, email addresses, and more. When you need us, we’re
                happy to be here for you. We are honored to serve you.
              </p>{" "}
              <Link to="/meetTeam">
                <Button variant="primary">Meet Our Team</Button>
              </Link>
            </Card.Body>
          </Card>{" "}
        </Col>
      </Row>
    );
  }
}

export default TeamBanner;
