import React from 'react';

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
        {favedPhotos.find(object => object.id === photo.id) ? <FavIcon selected={true}/> : <FavIcon selected={false}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;