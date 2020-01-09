// React imports
import React, { Component } from "react";

// inner presentaional component
import ShareList from "./ShareListComp/ShareList";

// Bootstrap Components
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Redux imports
import { connect } from "react-redux";
import { getAllShares } from "../../actions/Types";

export class ShareLists extends Component {
  componentDidMount = () => {
    // api to get stocks
    const url = new URL("https://api.worldtradingdata.com/api/v1/stock");
    let params = {
      symbol: "SNAP,D,VOD.L,GE,F",
      api_token: "JmyaJ0JrtGHYecWIfyAK4Z6UDFIky7hRWDtHdisYNcE3Gz1YaMGofZTzaeFU"
    };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );

    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        const { dispatch } = this.props;

        // dispatch get all stocks action
        dispatch(getAllShares(json.data));
      });
  };

  render() {
    const { stateShares } = this.props;
    return (
      <Row className="m-5">
        <Col md={{ offset: 1, span: 10 }}>
          <Table responsive="md" hover="true">
            <thead style={{ backgroundColor: "#f3b707b0" }}>
              <tr>
                <th></th>
                <th>Symbol</th>
                <th>Price</th>
                <th>Currency</th>
                <th>Day Max</th>
                <th>Day Low</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping stocks */}
              {stateShares.map(share => {
                const shareColor = share.day_change < 0 ? "red" : "green";

                return (
                  <tr key={share.symbol} style={{ color: `${shareColor}` }}>
                    <ShareList share={share} />
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}
function mapStateToProps(state) {
  return {
    stateShares: state.shares
  };
}
export default connect(mapStateToProps)(ShareLists);
