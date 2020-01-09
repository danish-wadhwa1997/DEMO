// React imports
import React, { Component } from "react";

// bootstrap imports
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export class BranchFinder extends Component {
  render() {
    return (
      <Row style={{ backgroundColor: "aliceblue" }}>
        <Col className="p-5" md={{ offset: 4, span: 4 }}>
          <h4>Get to Know Your Local Banking Office</h4>
          <br />
          <h6>
            Find the one closest to you. We’ll make you feel right at home.
          </h6>

          <br />
          <Form>
            <Row>
              <Col xs={9}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Go
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default BranchFinder;
