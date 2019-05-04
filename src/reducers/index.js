import { combineReducers } from "redux";
import photoReducer from "./AwsReducer";
export default combineReducers({
  photos: photoReducer,
  currentView: photoReducer,
  currentViewSingle: photoReducer,
  selectedPhoto: photoReducer,
  uploadPhoto: photoReducer,
  uploadView: photoReducer
});
