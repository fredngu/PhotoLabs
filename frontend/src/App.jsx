import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = (props) => {
  //Modal Functions
  // const [modal, setModal] = useState(false);
  // const [photoModal, setPhoto] = useState('');

  // const openModal = (photo) => {
  //   setModal(true);
  //   setPhoto(photo);
  //   console.log(photoModal);
  // }

  // const closeModal = () => {
  //   setModal(false);
  // }

  //Fav Functions
  
  // const [favedPhotos, setFavedPhotos] = useState([]);

  // console.log(favedPhotos);

  const {
    fav,
    modal,
    photoSelected,
    updateToFavPhotoIds,
    selectPhotos,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute selectPhotos={selectPhotos} updateToFavPhotoIds={updateToFavPhotoIds} fav={fav}/>
      {modal === true && (<PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal} photoSelected={photoSelected} updateToFavPhotoIds={updateToFavPhotoIds} selectPhotos={selectPhotos}/>)}
      {/* {<PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal}/>} */}
      {/* <HomeRoute openModal={openModal} favedPhotos={favedPhotos} setFavedPhotos={setFavedPhotos}/>
      {modal === true && (<PhotoDetailsModal closeModal={closeModal} photoModal={photoModal} favedPhotos={setFavedPhotos} setFavedPhotos={setFavedPhotos}/>)} */}
    </div>
  );
};

export default App;
