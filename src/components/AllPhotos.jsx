import React, { Component } from "react";
import _ from "lodash";
import SinglePhoto from "./SinglePhoto";
import { fetchPhotos } from "../actions/fetchPhotos";
import { setCurrentViewSingle } from "../actions/SetCurentViewSingle";
import { connect } from "react-redux";
class AllPhotos extends Component {
  componentWillMount() {
    this.props.fetchPhotos();
  }
  setSingleView(photo) {
    this.props.setCurrentViewSingle(photo);
  }
  render() {
    const photos = this.props.photos.map(photo => (
      <div key={photo} className="app">
        <img
          onClick={() => {
            this.setSingleView(photo);
          }}
          src={"data:image/png;base64, " + photo}
          className="imageCell"
          alt="yeet"
        />
      </div>
    ));
    return (
      <div className="app">
        <SinglePhoto />
        <h1>Hello World!</h1>
        {photos}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  photos: state.photos.photos,
  currentView: state.currentView.currentView
});

const mapDispatchToProps = {
  fetchPhotos,
  setCurrentViewSingle
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPhotos);
