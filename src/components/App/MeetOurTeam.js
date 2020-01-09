// React imports
import React, { Component } from "react";

// Resources
import banner from "../../resources/bannerTeam.jpg";

// Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// inner components
import TeamMembers from "../MeetOurTeam/TeamMembers";

export class MeetOurTeam extends Component {
  render() {
    return (
      <React.Fragment>
        <Row
          style={{
            backgroundImage: `url(${banner})`,
            color: "white"
          }}
        >
          <Col className="m-5 p-5">
            <center>
              <h1 style={{ fontFamily: "sans-serif" }}>Meet Our Team</h1>
            </center>
          </Col>
        </Row>

        <TeamMembers className="mb-5" />
      </React.Fragment>
    );
  }
}

export default MeetOurTeam;
