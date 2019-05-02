import React, { Component } from "react";
import _ from "lodash";
import SinglePhoto from "./SinglePhoto";

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {this.props.photos.map(photo => (
          <img
            onClick={() => {
              this.props.currentView(photo);
            }}
            src={"data:image/png;base64, " + photo}
            className="imageCell"
            alt="yeet"
          />
        ))}
      </div>
    );
  }
}
