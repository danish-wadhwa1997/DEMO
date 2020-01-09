// react imports
import React, { Component } from "react";

// bootstrap compnonents
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// inner components
import GeneralCard from "./GeneralCard";

export class ImageBanner extends Component {
  render() {
    return (
      <Row>
        <Col md={{ offset: 5, span: 7 }}>
          <GeneralCard
            title={this.props.cardTitle}
            description={this.props.cardDescription}
            btnVariant="link"
            btnTitle="LEARN MORE"
          />
        </Col>
      </Row>
    );
  }
}

export default ImageBanner;
