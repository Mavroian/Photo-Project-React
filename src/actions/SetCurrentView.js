import { SET_CURRENTVIEW } from "./types";

export const setCurrentView = () => {
  return dispatch => {
    dispatch({
      type: SET_CURRENTVIEW,
      currentView: "AllPhotos"
    });
  };
};
