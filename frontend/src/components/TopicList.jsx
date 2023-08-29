import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {selectTopic, topicData} = props;
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topics) => (
        <TopicListItem key={topics.id} selectTopic={selectTopic} topic={topics}/>
      ))}
    </div>
  );
};

export default TopicList;