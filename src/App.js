import React from "react";
import { Component } from "react/cjs/react.production.min";
import { Header, HeaderMain, Cards } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />

        <div className="d-flex flex-row gx-1">
          <HeaderMain />
        </div>
        <div className="d-flex flex-row">
          <Cards />
        </div>
        <div className="d-flex flex-row"></div>
      </div>
    );
  }
}

export default App;
