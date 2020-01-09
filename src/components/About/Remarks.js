// React imports
import React, { Component } from "react";

// Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// Resources

import ceo from "../../resources/ceo.jpg";

// Custom style
import { BG_FG_COLOR_BLUE_ALICEBLUE } from "../../store/Constants";

export class Remarks extends Component {
  render() {
    return (
      <Row className="py-5">
        <Col style={BG_FG_COLOR_BLUE_ALICEBLUE}>
          <Row>
            <Col className="mt-5" md={{ span: 5 }}>
              <Card
                style={{
                  backgroundColor: "#fff0",
                  border: "none"
                }}
              >
                <Card.Body>
                  <p>
                    Banking handcrafted is more than just our tagline; it’s how
                    we do business. As a local community bank, we’re able to
                    take the time to get to know our clients 1:1 and handcraft
                    financial service recommendations for them based on their
                    needs and priorities.{" "}
                  </p>
                  <Card.Title style={{ color: "darkgoldenrod" }}>
                    BLAINE JACKSON, CEO{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={{ span: 5, offset: 1 }}>
              <Row className="p-2" style={{ backgroundColor: "darkgoldenrod" }}>
                <Image
                  style={{ marginTop: "-2rem", marginBottom: "-2rem" }}
                  src={ceo}
                  width="100%"
                  height="125%"
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Remarks;
