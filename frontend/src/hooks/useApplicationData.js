import { useState, useReducer, useEffect } from "react";

// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
// }

// export const initialState = {
//   modal: false,
//   photoSelected: null,
//   favedPhotos: [],
//   fav: false,
// }

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SELECT_PHOTO':
//       return {
//         ...state,
//         modal: true,
//         photoSelected: action.value,
//       }
//     // case FAV_PHOTO_ADDED:
//     //   return 
//       { /* insert logic */ }
//     { /* insert all relevant actions as case statements*/ }
//     default:
//       throw new Error(
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );  
//     };
//   }

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    fav: false,
  });
  // const [modal, setModal] = useState(false);
  const [photoSelected, setPhotoSelected] = useState(null);
  const [favedPhotos, setFavedPhotos] = useState([]);

  //updates the favourited photo array + favourite notification
  const updateToFavPhotoIds = (liked, photoID) => {
    if (liked === true && !favedPhotos.includes(photoID)) {
      setFavedPhotos(arr => [...arr, photoID])
      setState({...state, fav: true});
    } else if (liked === false) {
      setFavedPhotos(arr => {
        const newArr = arr.filter((photos) => {return photos !== photoID})
        newArr.length <= 0 && setState({...state, fav: false})
        return newArr
      })
    }
  }

  console.log(favedPhotos);
  console.log(state);
  console.log(photoSelected);

  //close the modal
  const onClosePhotoDetailsModal = () => {
    setPhotoSelected(null);
  }

  return {
    state,
    favedPhotos,
    photoSelected,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
}