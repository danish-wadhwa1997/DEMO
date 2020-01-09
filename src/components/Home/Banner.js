// React imports
import React, { Component } from "react";

// Bootstrap imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// resources
import sample4 from "../../resources/sample4.jpg";

// inner components
import GeneralCard from "./GeneralCard";
import CustomButton from "./CustomButton";

// redux imports
import { connect } from "react-redux";

export class Banner extends Component {
  render() {
    const { data } = this.props;

    return (
      <Row
        style={{
          backgroundImage: `url(${sample4})`
        }}
      >
        <Col md={4} xs={12}>
          <GeneralCard
            title={data.cardTitle}
            description={data.cardDescription}
            btnVariant={data.cardBtnVariant}
            btnTitle={data.cardBtnTitle}
          />
        </Col>

        {/* Login Card */}
        <Col md={{ span: 4, offset: 4 }} className="d-none d-md-block">
          <Card
            style={{
              width: "auto",
              backgroundColor: "#2920b3f2",
              color: "white"
            }}
          >
            <Card.Body>
              <Row>
                <Col md={{ span: 10, offset: 1 }}>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>
                        <br />
                        <br />
                        <br />
                        <br />

                        <small>
                          <b>ACCOUNT TYPE </b>
                        </small>
                      </Form.Label>
                      <Form.Control as="select">
                        {data.accountType.map(account => (
                          <option key={account}>{account}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Control type="email" placeholder="Account ID" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <CustomButton btnVariant="warning" btnTitle="Log In" />
                  </Form>
                  <br />
                  <Button variant="link" style={{ color: "white" }}>
                    <small>Enroll Now for Online Banking</small>
                  </Button>
                  <br />
                  <Button variant="link" style={{ color: "white" }}>
                    <small>Forgot Password?</small>
                  </Button>

                  <br />
                  <br />
                  <br />
                  <br />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.bannerData
  };
}

export default connect(mapStateToProps)(Banner);
