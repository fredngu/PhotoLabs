import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {
    updateToFavPhotoIds,
    state,
    favedPhotos,
    selectPhoto,
    photoData,
    topicData
  } = props;
  
  const photos = [...photoData]
  return (
    <div className="home-route">
      <TopNavigation topicData={topicData} fav={state.fav}/>
      <PhotoList photos={photos} selectPhoto={selectPhoto} updateToFavPhotoIds={updateToFavPhotoIds} favedPhotos={favedPhotos}/>
    </div>
  );
};

export default HomeRoute;


