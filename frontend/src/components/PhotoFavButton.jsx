import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {photoLiked, favedPhotos, photo} = props;

  const handleLiked = () => {
    photoLiked()
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleLiked}>
        {favedPhotos.includes(photo) ? <FavIcon selected={true}/> : <FavIcon selected={false}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;