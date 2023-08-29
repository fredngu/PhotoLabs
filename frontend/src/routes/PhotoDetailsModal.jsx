import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const {onClosePhotoDetailsModal, photoSelected, updateToFavPhotoIds, favedPhotos, selectPhoto} = props;

  const photoLiked = () => {
    if (!favedPhotos.includes(photoSelected)) {
      updateToFavPhotoIds(true, photoSelected);
    } else {
      updateToFavPhotoIds(false, photoSelected);
    }
  }

  // const {closeModal, photoModal, favedPhotos, setFavedPhotos} = props;
  let similarPhoto = Object.values(photoSelected.similar_photos)
  const handleClose = () => onClosePhotoDetailsModal()
  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button">
          <img onClick={handleClose} src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className='photo-details-modal__images'>
        <br></br>
        <PhotoFavButton favedPhotos={favedPhotos} photo={photoSelected} photoLiked={photoLiked}/>
        <img className='photo-details-modal__image' src={photoSelected.urls.full}/>
        <br></br>
        <div className='photo-details-modal__photographer-details'>
          <img className="photo-list__user-profile" src={photoSelected.user.profile}/>
          <span className="photo-list__user-info">
            {photoSelected.user.name}
            <br/>
            <span className="photo-list__user-location">{photoSelected.location.city}, </span>
            <span className="photo-list__user-location"> {photoSelected.location.country}</span>
          </span>
        </div>
        <div>
          <div className='photo-details-modal__header'>Similar Photos</div>
        </div>
        <div className='photo-details-modal__image'>
          <PhotoList photos={similarPhoto} favedPhotos={favedPhotos}updateToFavPhotoIds={updateToFavPhotoIds} photoLiked={photoLiked} selectPhoto={selectPhoto}/>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
