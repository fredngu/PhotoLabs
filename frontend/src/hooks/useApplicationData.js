import { useState } from "react";

export default function useApplicationData(initial) {
  const [state, setState] = useState(initial);
  const [modal, setModal] = useState(false);
  const [photoSelected, setPhotoSelected] = useState(null)
  const [favedPhotos, setFavedPhotos] = useState([]);
  const [fav, setFav] = useState(false);
  
  //updates the favourited photo array + favourite notification
  const updateToFavPhotoIds = (liked, photoID) => {
    if (liked === true) {
      setFavedPhotos(arr => [...arr, photoID])
      setFav(true);
    } else if (liked === false) {
      setFavedPhotos(arr => {
        const newArr = arr.filter((photos) => {return photos !== photoID})
        newArr.length === 0 && setFav(false)
        return newArr
      })
      
    }
  }

  console.log(favedPhotos);
  console.log(fav)
  console.log(photoSelected);

  //user selects a photo
  const selectPhotos = (photo) => {
    setModal(true);
    setPhotoSelected(photo)
  }

  //close the modal
  const onClosePhotoDetailsModal = () => {
    setModal(false);
  }


  return {
    fav,
    modal,
    photoSelected,
    selectPhotos,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
}