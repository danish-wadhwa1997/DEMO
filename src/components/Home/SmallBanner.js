// React Imports
import React, { Component } from "react";

// Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// inner components
import ImageBanner from "./ImageBanner";

// redux imports
import { connect } from "react-redux";

export class SmallBanner extends Component {
  render() {
    const { banners } = this.props;
    return (
      // Mapping image banners
      <Row className="p-2">
        {banners.map(banner => (
          <Col
            className="m-2"
            style={{ backgroundImage: `url(${banner.bgColor})` }}
            key={banner.cardTitle}
          >
            <ImageBanner
              cardTitle={banner.cardTitle}
              cardDescription={banner.cardDescription}
            />
          </Col>
        ))}
      </Row>
    );
  }
}
function mapStateToProps(state) {
  return {
    banners: state.smallBanners
  };
}
export default connect(mapStateToProps)(SmallBanner);
