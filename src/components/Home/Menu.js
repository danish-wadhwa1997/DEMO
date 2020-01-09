// React imports
import React, { Component } from "react";

export class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <a href="/">
          <h4 style={{ color: "aliceblue" }}>{this.props.listTitle}</h4>
        </a>
        <ul className="pl-0" style={{ listStyle: "none", textAlign: "left" }}>
          {this.props.list.map(li => (
            <li key={li}>
              <a href="/" style={{ color: "aliceblue" }}>
                {li}
              </a>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Menu;
