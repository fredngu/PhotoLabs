import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    favedPhotos,
    photoSelected,
    photoData,
    topicData,
    selectPhoto,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute updateToFavPhotoIds={updateToFavPhotoIds} state={state} favedPhotos={favedPhotos}
      selectPhoto={selectPhoto} 
      photoData={photoData}
      topicData={topicData}/>
      {photoSelected !== null && 
      (<PhotoDetailsModal 
      favedPhotos={favedPhotos}
      photoSelected={photoSelected} 
      onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
      updateToFavPhotoIds={updateToFavPhotoIds}/>)}
    </div>
  );
};

export default App;
