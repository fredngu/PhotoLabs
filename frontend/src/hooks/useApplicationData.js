import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

export const initialState = {
  photoSelected: null,
  favedPhotos: [],
  fav: false,
}

const reducer = (state, action) => {
  const {FAV_PHOTO_ADDED, FAV_PHOTO_REMOVED, SELECT_PHOTO} = ACTIONS;
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return {
        ...state,
        favedPhotos: [...state.favedPhotos, action.value],
        fav: true,
      }
    case FAV_PHOTO_REMOVED:
      const newArr = state.favedPhotos.filter((photos) => {return photos !== action.value})
      let favor;
      newArr.length <= 0 ? favor = false : favor = true;
      return {
        ...state,
        favedPhotos: newArr,
        fav: favor,
      }
    case SELECT_PHOTO:
      return {
        ...state,
        photoSelected: action.value,
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );  
    };
  }

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //updates the favourited photo array + favourite notification
  const updateToFavPhotoIds = (liked, photoID) => {
    if (liked === true && !state.favedPhotos.includes(photoID)) {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, value: photoID})
    } else if (liked === false) {
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, value: photoID})
    }
  }
  console.log(state.favedPhotos);
  console.log(state);
  console.log(state.photoSelected);

  //close the modal

  const selectPhoto = (photo) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, value: photo})
  }
  const onClosePhotoDetailsModal = () => {
    dispatch({type: ACTIONS.SELECT_PHOTO, value: null})
    // setPhotoSelected(null);
  }

  return {
    state,
    favedPhotos: state.favedPhotos,
    photoSelected: state.photoSelected,
    updateToFavPhotoIds,
    selectPhoto,
    onClosePhotoDetailsModal
  }
}