import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const {fav, topicData, selectTopic} = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar'>
        <TopicList topicData={topicData} selectTopic={selectTopic}/>
        <FavBadge isFavPhotoExist={fav}/>
      </div>
    </div>
  )
}

export default TopNavigation;