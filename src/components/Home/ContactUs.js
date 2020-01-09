// React imports
import React, { Component } from "react";

// Bootstrap imports
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// resources
import logos from "../../resources/logos.png";

// custom styling
import { ICON_BUTTON_SIZE } from "../../store/Constants";

// react icons
import { MdEmail, MdCall } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

export class ContactUs extends Component {
  render() {
    return (
      <Row
        className="py-5 px-md-4"
        style={{
          backgroundColor: "#081730",
          color: "aliceblue",
          textAlign: "center"
        }}
      >
        <Col md={3}>
          <Image src={logos} width="100px" height="50px" />
        </Col>
        <Col md={{ offset: 3, span: 6 }}>
          <Row>
            <Col md={4} xs={12}>
              <h4>Call Us 9814525007</h4>
            </Col>
            <Col md={{ offset: 1, span: 2 }} xs={4}>
              <Button variant="warning">
                <TiMessages style={ICON_BUTTON_SIZE} />
              </Button>
            </Col>
            <Col md={2} xs={4}>
              <Button variant="warning">
                <MdEmail style={ICON_BUTTON_SIZE} />
              </Button>
            </Col>
            <Col md={2} xs={4}>
              <Button variant="warning">
                <MdCall style={ICON_BUTTON_SIZE} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ContactUs;
