// React imports
import React, { Component } from "react";

// Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";

export class PartOf extends Component {
  render() {
    const { imgUrls } = this.props;
    return (
      <Row style={{ backgroundColor: "darkgoldenrod" }}>
        <Row>
          <Col className=" pl-xs-2 pl-lg-0" md={{ offset: 3, span: 8 }}>
            <h2 className="pt-5 mt-5 px-sm-5 pl-lg-0 ">
              Park National Bank is part of The Park National Family of
              Community Banks
            </h2>
          </Col>
        </Row>
        {/* Mapping partners */}
        <Row className=" mx-md-5 p-md-5">
          {imgUrls.map((imgUrl, i) => (
            <Col
              lg={12 / (imgUrls.length / 2)}
              xs={6}
              sm={4}
              md={3}
              className="p-5"
              key={i}
            >
              <Image src={imgUrl} width="100%" height="100%" />
            </Col>
          ))}
        </Row>
      </Row>
    );
  }
}
function mapStateToProps(state) {
  return {
    imgUrls: state.partOfImgUrls
  };
}

export default connect(mapStateToProps)(PartOf);
