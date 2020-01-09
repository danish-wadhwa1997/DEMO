// React imports
import React, { Component } from "react";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// inner components
import ServiceCard from "./ServiceCard";

// redux imports
import { connect } from "react-redux";

class ServiceCards extends Component {
  render() {
    const { cards } = this.props;
    return (
      <Row className="m-md-5 pl-md-5 pr-md-5 ">
        {cards.map(card => (
          <Col md={4} key={card.cardTitle}>
            <ServiceCard card={card} />
          </Col>
        ))}
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: state.serviceCards
  };
}

export default connect(mapStateToProps)(ServiceCards);
