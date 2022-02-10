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
  Avis,
} from "./components";

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />

        <div className="d-flex flex-row gx-1">
          <HeaderMain />
        </div>

        <div className="d-flex flex-row">
          <HeaderCrpe />
        </div>

        <div className="d-flex flex-row">
          <Crpe />
        </div>

        <div className="d-flex flex-row">
          <HeaderStage />
        </div>

        <div className="d-flex flex-row">
          <Stage />
        </div>

        <div className="d-flex flex-row">
          <HeaderConcour />
        </div>

        <div className="d-flex flex-row"></div>
        <Concours />

        <div className="d-flex flex-row>">
          <Avis />
        </div>
      </div>
    );
  }
}

export default App;
