import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";

const HomeRoute = (props) => {
  const {
    updateToFavPhotoIds,
    state,
    favedPhotos,
    selectPhoto,
  } = props;
  
  return (
    <div className="home-route">
      <TopNavigation fav={state.fav}/>
      <PhotoList photos={photos} selectPhoto={selectPhoto} updateToFavPhotoIds={updateToFavPhotoIds} favedPhotos={favedPhotos}/>
    </div>
  );
};

export default HomeRoute;


