import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";

const HomeRoute = (props) => {
  const {
    setPhotoSelected, 
    updateToFavPhotoIds,
    state,
    favedPhotos
  } = props;


  const handleModal = () => {
    setPhotoSelected(photo)

  }
  
  return (
    <div className="home-route">
      <TopNavigation fav={state.fav}/>
      <PhotoList photos={photos} setPhotoSelected={setPhotoSelected} updateToFavPhotoIds={updateToFavPhotoIds} favedPhotos={favedPhotos}/>
    </div>
  );
};

export default HomeRoute;


