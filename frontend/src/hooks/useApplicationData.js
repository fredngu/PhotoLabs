import { useEffect, useReducer } from "react";

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
  photoData: [],
  topicData: []
}

const reducer = (state, action) => {
  const {FAV_PHOTO_ADDED, FAV_PHOTO_REMOVED, SELECT_PHOTO, SET_PHOTO_DATA, SET_TOPIC_DATA} = ACTIONS;
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
    case SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      }
    case SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );  
    };
  }

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=> {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
  },[])

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}))
  }, [])

  //updates the favourited photo array + favourite notification
  const updateToFavPhotoIds = (liked, photoID) => {
    if (liked === true && !state.favedPhotos.includes(photoID)) {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, value: photoID, id: photoID.id})
    } else if (liked === false) {
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, value: photoID, id: photoID.id})
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
    photoData: state.photoData,
    topicData: state.topicData,
    updateToFavPhotoIds,
    selectPhoto,
    onClosePhotoDetailsModal
  }
}