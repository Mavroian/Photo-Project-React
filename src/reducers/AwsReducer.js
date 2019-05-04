import {
  FETCH_PHOTOS,
  SET_CURRENTVIEW,
  SET_CURRENTVIEW_SINGLE,
  UPLOAD_PHOTO,
  UPLOAD_VIEW
} from "../actions/types";

const initialState = {
  currentView: "",
  photos: [],
  selectedPhoto: ""
};
export default function AwsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS: {
      return {
        ...state,
        photos: action.payload
      };
    }
    case SET_CURRENTVIEW: {
      return {
        ...state,
        currentView: action.currentView
      };
    }
    case SET_CURRENTVIEW_SINGLE: {
      return {
        ...state,
        currentView: action.currentView,
        selectedPhoto: action.selectedPhoto
      };
    }
    case UPLOAD_PHOTO: {
      return {
        ...state,
        photos: state.photos.push(action.photo)
      };
    }
    case UPLOAD_VIEW: {
      return {
        ...state,
        currentView: action.currentView
      };
    }

    default:
      return state;
  }
}
