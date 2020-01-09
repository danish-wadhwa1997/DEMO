// React imports
import React, { Component } from "react";

//Bootstrap Presentational Components
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Connet to Application state
import { connect } from "react-redux";

// Custom Styling
import { BG_FG_COLOR_BLUE_ALICEBLUE } from "../../store/Constants";

export class FooterNavLinks extends Component {
  render() {
    const { links } = this.props;
    return (
      <Row style={BG_FG_COLOR_BLUE_ALICEBLUE}>
        <Col lg={{ offset: 2, span: 10 }}>
          {/* Mapping Links */}
          {links.map(link => (
            <React.Fragment key={link}>
              <Button variant="link" style={{ color: "aliceblue" }}>
                {link + " "}
              </Button>
              <span>|</span>
            </React.Fragment>
          ))}
        </Col>
      </Row>
    );
  }
}
function mapStateToProps(state) {
  return {
    links: state.footerNavLinks
  };
}
export default connect(mapStateToProps)(FooterNavLinks);
