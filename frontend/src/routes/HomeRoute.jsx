import React, { useState, useReducer } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [fav, setFav] = useState(false);
  const [favedPhotos, setFavedPhotos] = useState([]);

  console.log(favedPhotos);

  return (
    <div className="home-route">
      <TopNavigation fav={fav}/>
      <PhotoList/>
      <button onClick={()=> setFavedPhotos(arr => [...arr, `${arr.length}`])}>TEST</button>
      <button onClick={()=> setFav(true)}>FAV</button>
    </div>
  );
};

export default HomeRoute;
