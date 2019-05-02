import React, { Component } from "react";
import _ from "lodash";
import "../styles/upload.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.file = null;

    this.setFileInputRef = element => {
      this.file = element;
    };

    this.clickFileInput = () => {
      // Focus the text input using the raw DOM API
      if (this.file) this.file.click();
    };
  }
  componentDidMount() {
    // autofocus the input on mount
    this.clickFileInput();
  }
  onFormSubmit = event => {
    this.props.uploadPhoto(event.target.files[0]);
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
