import React from "react";
import { Component } from "react/cjs/react.production.min";
import {
  Header,
  HeaderMain,
  Crpe,
  HeaderCrpe,
  HeaderStage,
  Stage,
  HeaderConcour,
  Concours,
  Contact,
} from "./components";

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />

        <div
          className="d-flex flex-row "
          style={{ marginTop: "2rem", backgroundColor: "red" }}
        >
          <HeaderMain />
        </div>

        <div
          className="d-flex flex-row"
          style={{ marginTop: "2rem", backgroundColor: "blue" }}
        >
          <HeaderCrpe />
        </div>

        <div
          className="d-flex flex-row"
          style={{ marginTop: "2rem", backgroundColor: "green" }}
        >
          <Crpe />
        </div>

        <div
          className="d-flex flex-row"
          style={{ marginTop: "2rem", backgroundColor: "grey" }}
        >
          <HeaderStage />
        </div>

        <div
          className="d-flex flex-row"
          style={{ marginTop: "2rem", backgroundColor: "pink" }}
        >
          <Stage />
        </div>

        <div
          className="d-flex flex-row"
          style={{ marginTop: "2rem", backgroundColor: "purple" }}
        >
          <HeaderConcour />
        </div>

        <div
          className="d-flex flex-row"
          style={{ marginTop: "2rem", backgroundColor: "brown" }}
        >
          <Concours />
        </div>

        <div
          className="d-flex flex-row>"
          style={{ marginTop: "2rem", backgroundColor: "orange" }}
        >
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
