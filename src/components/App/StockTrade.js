// React imports
import React, { Component } from "react";
// Bootstrap presentaional components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// inner components
import ShareLists from "../StockTrade/ShareLists";
import ShareDetails from "../StockTrade/ShareDetails";

export class StockTrade extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <ShareLists />
          </Col>
        </Row>
        <Row>
          <Col>
            <ShareDetails />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default StockTrade;
