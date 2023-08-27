import React, { useReducer } from "react";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const {setPhotoSelected, updateToFavPhotoIds, photo, favedPhotos} = props

  const photoLiked = () => {
    if (!favedPhotos.includes(photo)) {
      console.log('okay')
      updateToFavPhotoIds(true, photo);
    } else {
      console.log('not okay')
      updateToFavPhotoIds(false, photo);
    }
  }

  const handleModal = () => {
    setPhotoSelected(photo)
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton favedPhotos={favedPhotos} photoLiked={photoLiked} photo={photo}/>
      <img onClick={handleModal} className="photo-list__image" src={photo.urls.full}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile}/>
        <span className="photo-list__user-info">
          {photo.user.name}
          <br/>
          <span className="photo-list__user-location">{photo.location.city}, </span>
          <span className="photo-list__user-location"> {photo.location.country}</span>
        </span>
      </div>
    </div>
  )
};

export default PhotoListItem;
