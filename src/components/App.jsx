import React, { Component } from "react";
import "../styles/styles.css";

import Navbar from "./Navbar";
import SinglePhoto from "./SinglePhoto";
import Upload from "./Upload";
import AllPhotos from "./AllPhotos";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "",
      photos: [],
      selectedPhoto: ""
    };
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        {this.state.currentView === "SinglePhoto" && <SinglePhoto />}
        {this.state.currentView === "AllPhotos" && <AllPhotos />}
      </div>
    );
  }
}
