import { SET_CURRENTVIEW_SINGLE } from "./types";

export const setCurrentViewSingle = photo => {
  return dispatch => {
    dispatch({
      type: SET_CURRENTVIEW_SINGLE,
      currentView: "SinglePhoto",
      selectedPhoto: photo
    });
  };
};
