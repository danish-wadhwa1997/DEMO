// React imports
import React, { Component } from "react";

// Bootstrap presentaional components
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// presentational component
import Menu from "../Home/Menu";

// Icons import
import { FaFacebookF, FaTwitter } from "react-icons/fa";

// Connect function to connect to Applicateion state
import { connect } from "react-redux";

// Custom Styling
import { BG_FG_COLOR_BLUE_ALICEBLUE } from "../../store/Constants";

export class Footer extends Component {
  render() {
    const { menus } = this.props;
    return (
      <Row className="p-md-5 py-xs-2" style={BG_FG_COLOR_BLUE_ALICEBLUE}>
        {/* Branding card */}
        <Row>
          <Col md={4} xs={12}>
            <Card style={{ backgroundColor: "#fff0", border: "none" }}>
              <Card.Body>
                <Card.Title>NewDominion Bank</Card.Title>
                <Card.Text>
                  We are committed to handcrafting meaningful experiences to
                  improve the financial health of our community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Mapping menus from the state */}
          {menus.map(dt => (
            <Col md={2} xs={6} className="pl-5" key={dt.title}>
              <Menu listTitle={dt.title} list={dt.items} />
            </Col>
          ))}
        </Row>
        {/* Social media buttons */}
        <Row className="pb-4 pl-3">
          <Col>
            <Button variant="light">
              <FaFacebookF style={{ fontSize: "28px" }} />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <FaTwitter style={{ fontSize: "28px" }} />
            </Button>
          </Col>
        </Row>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    // footerMenus contains coreesponding data
    menus: state.footerMenus
  };
}
export default connect(mapStateToProps)(Footer);
