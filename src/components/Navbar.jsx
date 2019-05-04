import React, { Component } from "react";
import "../styles/navbar.css";
import { connect } from "react-redux";
import { setCurrentView } from "../actions/SetCurrentView";
import { uploadView } from "../actions/upload_view";

const _ = require("lodash");

class Navbar extends Component {
  setCurrentView() {
    this.props.setCurrentView();
  }
  uploadView() {
    this.props.uploadView();
  }
  render() {
    return (
      <div className="navbar">
        <button
          onClick={() => {
            this.setCurrentView();
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            this.uploadView();
          }}
        >
          Upload
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentView: state.currentView.currentView
});
const mapDispatchToProps = {
  uploadView,
  setCurrentView
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
