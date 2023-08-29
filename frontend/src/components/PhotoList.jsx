import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {
    photos, 
    selectPhoto,
    updateToFavPhotoIds, 
    favedPhotos} = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem key={photo.id} photo={photo} favedPhotos={favedPhotos} selectPhoto={selectPhoto} updateToFavPhotoIds={updateToFavPhotoIds}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
