// // React imports

import React, { Component } from "react";

// Bootstrap Components
import { Navbar, Nav } from "react-bootstrap";

// import to LINK components to a url
import { Link } from "react-router-dom";

// Custom styling
import { NEGATIVE_ROW_MARGIN } from "../../store/Constants";

export class CustomNavbar extends Component {
  render() {
    return (
      <Navbar
        style={NEGATIVE_ROW_MARGIN}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Link className="nav-link" to="/">
          <Navbar.Brand>New Dominion Bank</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/meetTeam">
              Meet Our Team
            </Link>

            <Link className="nav-link" to="/stock">
              Stock Details
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
