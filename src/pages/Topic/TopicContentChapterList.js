import React, { useState } from "react";
import styled from "styled-components";
import TopicChapter from "./TopicChapter";

function TopicContentChapterList(props) {
  return (
    <TopicDetailContainerChapters>
      {props.topicData.chapter_lesson &&
        props.topicData.chapter_lesson.split("^").map((chapter, index) => {
          return (
            <TopicChapter
              key={index + 1}
              index={index + 1}
              chapter={chapter}
              time={props.topicData.chapter_time.split("^")[index]}
            />
          );
        })}
    </TopicDetailContainerChapters>
  );
}

const TopicDetailContainerChapters = styled.div`
  @media (min-width: 62em) {
    width: 50%;
    order: 1;
  }
`;

export default TopicContentChapterList;
