import React, { useState, useReducer } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";

const HomeRoute = (props) => {
  const {openModal} = props
  //Favourite
  const [fav, setFav] = useState(false);
  const [favedPhotos, setFavedPhotos] = useState([]);

  console.log(favedPhotos);

  return (
    <div className="home-route">
      <TopNavigation fav={fav}/>
      <PhotoList setFavedPhotos={setFavedPhotos} setFav={setFav} favedPhotos={favedPhotos} openModal={openModal} photos={photos}/>
    </div>
  );
};

export default HomeRoute;
