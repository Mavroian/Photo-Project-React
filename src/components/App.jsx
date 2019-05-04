import React, { Component } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import Upload from "./Upload";
import AllPhotos from "./AllPhotos";
import { connect } from "react-redux";
import { setCurrentView } from "../actions/SetCurrentView";
import SinglePhoto from "./SinglePhoto";

class App extends Component {
  componentWillMount() {
    this.props.setCurrentView();
  }
  render() {
    return (
      <div className="app">
        <Navbar />
        {this.props.currentView === "AllPhotos" && <AllPhotos />}
        {this.props.currentView === "SinglePhoto" && <SinglePhoto />}
        {this.props.currentView === "Upload" && (
          <Upload uploadPhoto={this.uploadPhoto} />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentView: state.currentView.currentView
});
const mapDispatchToProps = {
  setCurrentView
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
