// import React, { useState } from "react";
// import useApplicationData from "hooks/useApplicationData";
// import PhotoDetailsModal from "routes/PhotoDetailsModal";
// import HomeRoute from "routes/HomeRoute";

// export default function Application(props) {
//   const {useApplicationData} = props;
//   const [fav, setFav] = useState(false);

//   const {
//     state,
//     onPhotoSelect,
//     updateToFavPhotoIds,
//     onLoadTopic,
//     onClosePhotoDetailsModal,
//   } = useApplicationData();

//   return (
//     <div>
//       <HomeRoute fav={fav}/>
//       <PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal}/>
//     </div>
//   );
// }
