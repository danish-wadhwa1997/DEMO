// React imports
import React, { Component } from "react";

// Bootstrap components
import Card from "react-bootstrap/Card";

// inner components
import CustomButton from "./CustomButton";

export class GeneralCard extends Component {
  render() {
    return (
      <Card
        style={{
          width: "auto",
          backgroundColor: "#fffffff0"
        }}
        className="m-5"
      >
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>

          {/* see button is there or not */}
          {this.props.btnVariant && (
            <CustomButton
              btnVariant={this.props.btnVariant}
              btnTitle={this.props.btnTitle}
            />
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default GeneralCard;
