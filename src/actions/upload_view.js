import { UPLOAD_VIEW } from "./types";

export const uploadView = () => {
  return dispatch => {
    dispatch({
      type: UPLOAD_VIEW,
      currentView: "Upload"
    });
  };
};
