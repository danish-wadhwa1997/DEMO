// React imports
import React, { Component } from "react";

// Bootstrap
import Form from "react-bootstrap/Form";

// Redux imports
import { connect } from "react-redux";
import { viewShare } from "../../../actions/Types";

export class ShareList extends Component {
  // to change the shown stock
  changeFocussedShare = event => {
    this.props.dispatch(viewShare(event.target.id));
  };

  render() {
    return (
      <React.Fragment>
        <td>
          <Form.Check
            type="radio"
            name="shares"
            aria-label="radio 1"
            id={this.props.share.symbol}
            onChange={this.changeFocussedShare}
          />
        </td>
        <td>{this.props.share.symbol}</td>
        <td>{this.props.share.price}</td>
        <td>{this.props.share.currency}</td>
        <td>{this.props.share.day_high}</td>
        <td>{this.props.share.day_low}</td>
      </React.Fragment>
    );
  }
}
export default connect()(ShareList);
