import React, { Component } from "react";
import "../styles/navbar.css";
import Upload from "./Upload";
const _ = require("lodash");

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <button onClick={this.props.currentView}>Home</button>
        <button onClick={this.props.setUpload}>Upload</button>
      </div>
    );
  }
}
