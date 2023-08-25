import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {
  const {closeModal, photoModal} = props;
  let similarPhoto = Object.values(photoModal.similar_photos)
  const handleClose = () => closeModal()
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img onClick={handleClose} src={closeSymbol} alt="close symbol" />
      </button>
      <br></br>
      <img className='photo-details-modal__image' src={photoModal.urls.full}/>
      <br></br>
      <div className='photo-details-modal__images'>
        <span className='photo-details-modal__header'>Similar Photos</span>
        <PhotoList photos={similarPhoto}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
