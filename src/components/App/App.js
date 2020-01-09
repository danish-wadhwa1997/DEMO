// import for using BOOTSTRAP designing
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import CustomNavbar from "./CustomNavbar";

// import to Navigate through components
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// React imports
import React, { Component } from "react";

// Components for the App
import Home from "./Home";
import StockTrade from "./StockTrade";
import Footer from "./Footer";
import FooterNavLinks from "./FooterNavLinks";
import About from "./About";
import MeetOurTeam from "./MeetOurTeam";

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid="true">
          <CustomNavbar />
          {/* part of the App that will change */}
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/stock" component={StockTrade} />
            <Route path="/about" component={About} />
            <Route path="/meetTeam" component={MeetOurTeam} />

            <Route path="/**" render={() => <Redirect to="/home" />} />
          </Switch>

          <Footer />
          <FooterNavLinks />
        </Container>
      </Router>
    );
  }
}

export default App;
