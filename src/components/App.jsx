import React, { Component } from "react";
import "../styles/styles.css";

import Navbar from "./Navbar";
import SinglePhoto from "./SinglePhoto";
import Upload from "./Upload";
import AllPhotos from "./AllPhotos";

import { getSingleObject } from "../utils";

console.log(getSingleObject("0.png").then(result => result));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "AllPhotos",
      photos: [],
      selectedPhoto: ""
    };
  }
  setSinglePhoto() {
    this.setState({ currentView: "SinglePhoto" });
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        {this.state.currentView === "SinglePhoto" && <SinglePhoto />}
        {this.state.currentView === "AllPhotos" && (
          <AllPhotos currentView={this.setSinglePhoto} />
        )}
      </div>
    );
  }
}
