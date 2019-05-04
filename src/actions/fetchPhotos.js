import { FETCH_PHOTOS } from "./types";
import { getSingleObject, listObjects } from "../utils";

export const fetchPhotos = () => {
  return dispatch => {
    return listObjects()
      .then(result => {
        return Promise.all(
          result.slice(4, 4 + 25).map(element => {
            return getSingleObject(element.Key).then(data => {
              return data;
            });
          })
        );
      })
      .then(photos => {
        dispatch({
          type: FETCH_PHOTOS,
          payload: photos
        });
      });
  };
};
