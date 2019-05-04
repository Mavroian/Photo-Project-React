import React, { Component } from "react";
import { connect } from "react-redux";
class SinglePhoto extends Component {
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
const mapStateToProps = state => ({
  photos: state.photos.photos,
  currentView: state.currentView.currentView,
  selectedPhoto: state.selectedPhoto.selectedPhoto
});

export default connect(mapStateToProps)(SinglePhoto);
