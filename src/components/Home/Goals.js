// react imports
import React, { Component } from "react";

// bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// inner components
import ServiceCard from "./ServiceCard";

// resources
import back from "../../resources/back.jpg";

// redux imports
import { connect } from "react-redux";

export class Goals extends Component {
  render() {
    const { data } = this.props;
    return (
      <Row>
        <Col md={5} className="p-5" style={{ backgroundColor: "orange" }}>
          <ServiceCard card={data[0]} />
        </Col>
        <Col
          md={7}
          style={{
            backgroundImage: `url(${back})`
          }}
        >
          <Row>
            <Col md={5} className="pt-5 pb-5">
              <ServiceCard card={data[1]} />
            </Col>
            <Col md={7} className="pt-md-5 pb-5">
              <h1 className="mt-md-5">$ 5 0 0 0 0 </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.goals
  };
}

export default connect(mapStateToProps)(Goals);
