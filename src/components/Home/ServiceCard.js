// React imports
import React, { Component } from "react";

// Bootstrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class ServiceCard extends Component {
  render() {
    return (
      <Card style={{ backgroundColor: "#fff0", border: "none" }}>
        <Card.Body>
          <Card.Title>{this.props.card.cardTitle}</Card.Title>
          <Card.Text>{this.props.card.cardDescription}</Card.Text>
          <Button variant="primary">
            <b>LEARN MORE</b>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ServiceCard;
