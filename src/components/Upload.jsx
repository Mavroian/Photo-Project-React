import React, { Component } from "react";
import _ from "lodash";
import "../styles/upload.css";
import { uploadPhoto } from "../actions/uploadPhoto";
import { connect } from "react-redux";
import AllPhotos from "./AllPhotos";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.file = null;

    this.setFileInputRef = element => {
      this.file = element;
    };

    this.clickFileInput = () => {
      if (this.file) this.file.click();
    };
  }

  componentDidMount() {
    this.clickFileInput();
  }
  onFormSubmit = event => {
    const file = event.target.files[0];
    this.props.uploadPhoto(file);
  };

  render() {
    return (
      <div className="file-upload">
        <form onInputCapture={this.onFormSubmit} action="">
          <input type="file" ref={this.setFileInputRef} />
          <input
            name="form"
            className="button"
            type="button"
            value="click the text input"
            onClick={this.clickFileInput}
          />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { uploadPhoto }
)(Upload);
