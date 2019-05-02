import React, { Component } from "react";

export default class SinglePhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          src={"data:image/png;base64, " + this.props.selectedPhoto}
          alt=""
        />
      </div>
    );
  }
}
