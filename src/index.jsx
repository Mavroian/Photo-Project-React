import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { getSingleObject, listObjects } from "./utils";

const initialState = {
  currentView: "",
  photos: [],
  selectedPhoto: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PHOTOS": {
      let arr = [];
      let newState = state;
      listObjects().then(result => {
        result.forEach(element => {
          getSingleObject(element.Key).then(obj => {
            arr.push(obj);
          });
        });
      });
      newState.photos = arr;
      return newState;
    }
    default: {
      break;
    }
  }
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
