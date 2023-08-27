import React, {useState} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const {onClosePhotoDetailsModal, photoSelected, updateToFavPhotoIds, favedPhotos} = props;

  const photoLiked = () => {
    if (!favedPhotos.includes(photoSelected)) {
      console.log('okay')
      updateToFavPhotoIds(true, photoSelected);
    } else {
      console.log('not okay')
      updateToFavPhotoIds(false, photoSelected);
    }
  }

  // const {closeModal, photoModal, favedPhotos, setFavedPhotos} = props;
  let similarPhoto = Object.values(photoSelected.similar_photos)
  const handleClose = () => onClosePhotoDetailsModal()
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img onClick={handleClose} src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <br></br>
        <PhotoFavButton favedPhotos={favedPhotos} photo={photoSelected} photoLiked={photoLiked}/>
        <img className='photo-details-modal__image' src={photoSelected.urls.full}/>
        <br></br>
        <br></br>
        <span className='photo-details-modal__header'>Similar Photos</span>
        <div className='photo-details-modal__images'>
          <PhotoList photos={similarPhoto} favedPhotos={favedPhotos}updateToFavPhotoIds={updateToFavPhotoIds}/>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
