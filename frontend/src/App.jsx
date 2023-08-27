import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = (props) => {
  const {
    state,
    favedPhotos,
    photoSelected,
    selectPhoto,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute updateToFavPhotoIds={updateToFavPhotoIds} state={state} favedPhotos={favedPhotos}
      selectPhoto={selectPhoto}/>
      {photoSelected !== null && 
      (<PhotoDetailsModal 
      favedPhotos={favedPhotos}
      photoSelected={photoSelected} 
      onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
      updateToFavPhotoIds={updateToFavPhotoIds}/>)}
      {/* {<PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal}/>} */}
      {/* <HomeRoute openModal={openModal} favedPhotos={favedPhotos} setFavedPhotos={setFavedPhotos}/>
      {modal === true && (<PhotoDetailsModal closeModal={closeModal} photoModal={photoModal} favedPhotos={setFavedPhotos} setFavedPhotos={setFavedPhotos}/>)} */}
    </div>
  );
};

export default App;
