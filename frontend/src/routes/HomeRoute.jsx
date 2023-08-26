import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";

const HomeRoute = (props) => {
  const {fav, selectPhotos, updateToFavPhotoIds} = props;
  
  return (
    <div className="home-route">
      <TopNavigation fav={fav}/>
      <PhotoList photos={photos} selectPhotos={selectPhotos} updateToFavPhotoIds={updateToFavPhotoIds}/>
    </div>
  );
};

export default HomeRoute;


