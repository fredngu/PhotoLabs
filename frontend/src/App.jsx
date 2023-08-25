import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState(false);
  const [photoModal, setPhoto] = useState('');

  const openModal = (photo) => {
    setModal(true);
    setPhoto(photo);
    console.log(photoModal);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="App">
      <HomeRoute openModal={openModal}/>
      {modal === true && (<PhotoDetailsModal closeModal={closeModal} photoModal={photoModal}/>)}
    </div>
  );
};

export default App;
