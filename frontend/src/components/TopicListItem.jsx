import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {selectTopic, topic} = props;
  return (
    <div className="topic-list__item">
      <span onClick={()=>selectTopic(topic.id)}>
        {topic.title}
      </span>
    </div>
  );
};

export default TopicListItem;
