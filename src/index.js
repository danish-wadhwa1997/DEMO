/* REACT related imports*/
import React from "react";
import ReactDOM from "react-dom";

/* REDUX related imports*/
import { Provider } from "react-redux";
import { store } from "./store/Store";

/* Styling and App's React components related imports*/
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App/App";

/* Loading the <App/> root view-component of the app
 * <Provided/> by the {store}
 * inside ReactDOM.render() */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
