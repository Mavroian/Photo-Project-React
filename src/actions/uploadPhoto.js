import { UPLOAD_PHOTO } from "./types";

const blobToBase64 = (arr, file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    arr.push(
      reader.result.slice(
        reader.result.indexOf(",") + 1,
        reader.result.length - 1
      )
    );
  };
};

export const uploadPhoto = file => {
  const photo = [];
  return dispatch => {
    blobToBase64(photo, file);
    dispatch({
      type: UPLOAD_PHOTO,
      photo: photo
    });
  };
};
