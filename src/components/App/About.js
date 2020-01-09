// React imports
import React, { Component } from "react";

// inner components
import Introduction from "../About/Introduction";
import Remarks from "../About/Remarks";
import TeamBanner from "../About/TeamBanner";
export class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Introduction />
        <Remarks />
        <TeamBanner />
      </React.Fragment>
    );
  }
}

export default About;
