// React imports
import React, { Component } from "react";

// Bootstrap components
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// redux
import { connect } from "react-redux";

export class TeamMembers extends Component {
  render() {
    const { data } = this.props;
    return (
      <Row>
        <Row className="m-5">
          <Col className="" xs={{ span: 8, offset: 2 }}>
            <Card
              style={{
                backgroundColor: "#fff0",
                border: "none"
              }}
            >
              <Card.Body>
                <Card.Title>
                  <center>
                    <h2 style={{ color: "#005da9" }}>Executive Team </h2>
                  </center>
                </Card.Title>
                <p>
                  Our executive team strives to build a culture at Park National
                  Bank that fosters personal service and community.{" "}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mx-5 mb-5 ">
          <Col md={{ span: 8, offset: 2 }}>
            <Row>
              {data.map(dt => (
                <Col className="px-5 pb-5" md={4}>
                  <Figure>
                    <Figure.Image alt="171x180" src={dt.image} />
                    <Figure.Caption>
                      {dt.name},<br /> <i>{" " + dt.position}</i>
                    </Figure.Caption>
                  </Figure>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.teamMembersData
  };
}

export default connect(mapStateToProps)(TeamMembers);
