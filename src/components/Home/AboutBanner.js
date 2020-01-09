// React imports
import React, { Component } from "react";

// resources
import sample3 from "../../resources/sample2.jpg";

// inner components
import ServiceCard from "./ServiceCard";

// Bootstrap components
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// redux imports
import { connect } from "react-redux";

export class AboutBanner extends Component {
  render() {
    const { data } = this.props;

    return (
      <Row className="m-4 py-4">
        <Col
          className="py-5 "
          xs={{ span: 12, order: 12 }}
          lg={{ span: 6, order: 1 }}
        >
          <ServiceCard card={data} />
        </Col>
        <Col
          className="pr-5"
          xs={{ span: 12, order: 1 }}
          lg={{ span: 6, order: 12 }}
        >
          <Image src={sample3} height="100%" width="100%" />
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.aboutBanner
  };
}

export default connect(mapStateToProps)(AboutBanner);
