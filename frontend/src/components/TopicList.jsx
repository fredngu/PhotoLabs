import React from "react";

import "../styles/TopicList.scss";
import topics from "mocks/topics";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topics) => (
        <TopicListItem key={topics.id} topic={topics}/>
      ))}
    </div>
  );
};

export default TopicList;
