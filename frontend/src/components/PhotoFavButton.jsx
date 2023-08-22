import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {liked, photoLiked} = props;
  const handleLiked = () => photoLiked();

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleLiked}>
        {liked === true && <FavIcon selected={true}/>}
        {liked === false && <FavIcon selected={false}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;