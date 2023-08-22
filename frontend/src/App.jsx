import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modal, setModal] = useState('close');
  const openModal = () => {
    return setState('open');
  }

  return (
    <div className="App">
      <HomeRoute openModal={openModal}/>
      {modal === 'open' && (<PhotoDetailsModal/>)}
    </div>
  );
};

export default App;
