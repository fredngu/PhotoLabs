import React, {useState} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import photos from 'mocks/photos';

const PhotoDetailsModal = (props) => {
  const {onClosePhotoDetailsModal, photoSelected, selectPhotos, updateToFavPhotoIds} = props;

  const [liked, setLiked] = useState(false);
  
  const photoLiked = () => {
    if (liked === false) {
      setLiked(true);
      updateToFavPhotoIds(true, photoSelected);
    } else {
      setLiked(false)
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
        <PhotoFavButton liked={liked} photo={photoSelected} photoLiked={photoLiked}/>
        <img className='photo-details-modal__image' src={photoSelected.urls.full}/>
        <br></br>
        <br></br>
        <span className='photo-details-modal__header'>Similar Photos</span>
        <div className='photo-details-modal__images'>
          <PhotoList photos={similarPhoto} updateToFavPhotoIds={updateToFavPhotoIds}/>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
