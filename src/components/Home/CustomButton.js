// React imports
import React, { Component } from "react";

// Bootstrap component
import Button from "react-bootstrap/Button";

export class CustomButton extends Component {
  render() {
    return (
      <Button
        variant={this.props.btnVariant}
        type={this.props.btnType}
        size={this.props.btnSize}
      >
        {this.props.btnTitle}
      </Button>
    );
  }
}

export default CustomButton;
