import React, { Component } from "react";
import "../styles/styles.css";

import Navbar from "./Navbar";
import SinglePhoto from "./SinglePhoto";
import Upload from "./Upload";
import AllPhotos from "./AllPhotos";

import { getSingleObject, listObjects } from "../utils";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.arr = [];
    this.state = {
      currentView: "",
      photos: [],
      selectedPhoto: ""
    };
  }

  componentDidMount() {
    listObjects()
      .then(result => {
        result.forEach(element => {
          getSingleObject(element.Key).then(obj => {
            this.arr.push(obj);
            this.setState({ photos: this.arr });
          });
        });
      })
      .then(end => {
        this.setState({ currentView: "AllPhotos" });
      });
  }

  setSinglePhoto = base64 => {
    this.setState({ currentView: "SinglePhoto", selectedPhoto: base64 });
  };

  setAllPhoto = () => {
    this.setState({ currentView: "AllPhotos", selectedPhoto: "" });
  };

  setUpload = () => {
    this.setState({ currentView: "Upload", selectedPhoto: "" });
  };

  uploadPhoto = file => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.arr.push(
        reader.result.slice(
          reader.result.indexOf(",") + 1,
          reader.result.length - 1
        )
      );
      this.setState({ photos: this.arr });
    };
  };

  render() {
    return (
      <div className="app">
        <Navbar currentView={this.setAllPhoto} setUpload={this.setUpload} />
        {this.state.currentView === "SinglePhoto" && (
          <SinglePhoto selectedPhoto={this.state.selectedPhoto} />
        )}
        {this.state.currentView === "Upload" && (
          <Upload uploadPhoto={this.uploadPhoto} />
        )}
        {this.state.currentView === "AllPhotos" && (
          <AllPhotos
            currentView={this.setSinglePhoto}
            photos={this.state.photos}
          />
        )}
      </div>
    );
  }
}
