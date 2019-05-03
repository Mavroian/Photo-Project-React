import React, { Component } from "react";

import "../styles/styles.css";

import Navbar from "./Navbar";
import SinglePhoto from "./SinglePhoto";
import Upload from "./Upload";
import AllPhotos from "./AllPhotos";
import { connect } from "react-redux";

import { getSingleObject, listObjects } from "../utils";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.loadPhotos());
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
        {this.props.currentView === "SinglePhoto" && (
          <SinglePhoto selectedPhoto={this.props.selectedPhoto} />
        )}
        {this.props.currentView === "Upload" && (
          <Upload uploadPhoto={this.uploadPhoto} />
        )}
        {this.props.currentView === "AllPhotos" && (
          <AllPhotos
            currentView={this.setSinglePhoto}
            photos={this.props.photos}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPhotos: () =>
      dispatch({
        type: "LOAD_PHOTOS"
      })
  };
};

const mapStateToProps = state => {
  return {
    currentView: state.currentView,
    photos: state.photos,
    selectedPhoto: state.selectedPhoto
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//export { result, App };
