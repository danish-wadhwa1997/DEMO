// React imports
import React, { Component } from "react";

// Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

// redux import
import { connect } from "react-redux";

export class ShareDetails extends Component {
  render() {
    const { focussedShare } = this.props;
    return (
      <Row className="mx-5 mb-5">
        <Col>
          <Card>
            <Card.Header
              style={{ backgroundColor: "#0a1f41", color: "aliceblue" }}
            >
              {this.props.focussedShare.symbol}
            </Card.Header>
            <Card.Body
              style={{ backgroundColor: "aliceblue", color: "#0a1f41" }}
            >
              <Card.Title>
                <Table responsive="md">
                  <tbody>
                    <tr>
                      <td style={{ borderTop: "none" }}>Name:</td>
                      <td style={{ borderTop: "none" }}>
                        {focussedShare.name}
                      </td>

                      <td style={{ borderTop: "none" }}>Stock Exchange:</td>
                      <td style={{ borderTop: "none" }}>
                        {focussedShare.stock_exchange_long}
                      </td>

                      <td style={{ borderTop: "none" }}>Volume:</td>
                      <td style={{ borderTop: "none" }}>
                        {focussedShare.volume}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ borderTop: "none" }}>Price Open:</td>
                      <td style={{ borderTop: "none" }}>
                        {focussedShare.price_open}
                      </td>

                      <td style={{ borderTop: "none" }}>52 Week High:</td>
                      <td style={{ borderTop: "none" }}>
                        {focussedShare["52_week_high"]}
                      </td>

                      <td style={{ borderTop: "none" }}>52 Week Low:</td>
                      <td style={{ borderTop: "none" }}>
                        {focussedShare["52_week_low"]}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ borderTop: "none" }}> Change %:</td>
                      <td style={{ borderTop: "none" }}>
                        {focussedShare.change_pct}
                      </td>

                      <td style={{ borderTop: "none" }}>Day Change:</td>
                      <td style={{ borderTop: "none" }}>
                        {focussedShare.day_change}
                      </td>

                      <td style={{ borderTop: "none" }}>Close Yesterday:</td>
                      <td style={{ borderTop: "none" }}>
                        {focussedShare.close_yesterday}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    focussedShare: state.focussedShare,
    shares: state.shares
  };
}

export default connect(mapStateToProps)(ShareDetails);
