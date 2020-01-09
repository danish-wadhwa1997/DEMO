// React imports
import React, { Component } from "react";

// inner functional Components
import Banner from "../Home/Banner";
import SmallBanner from "../Home/SmallBanner";
import ServiceCards from "../Home/ServiceCards";
import Goals from "../Home/Goals";
import AboutBanner from "../Home/AboutBanner";
import PartOf from "../Home/PartOf";
import BranchFinder from "../Home/BranchFinder";
import ContactUs from "../Home/ContactUs";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />

        <SmallBanner />
        <ServiceCards />
        <Goals />
        <AboutBanner />
        <PartOf />

        <BranchFinder />
        <ContactUs />
      </React.Fragment>
    );
  }
}

export default Home;
