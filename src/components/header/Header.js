import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a className=" Picture navbar-brand">
         {/* <img src="#"></img> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                CRPE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Avis
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Se Connecter
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
