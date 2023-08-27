import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {topicData} = props;
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topics) => (
        <TopicListItem key={topics.id} topic={topics}/>
      ))}
    </div>
  );
};

export default TopicList;


// const sampleDataForTopicList = [
//   {
//     id: "1",
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: "2",
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: "3",
//     slug: "topic-3",
//     title: "People",
//   },
// ];