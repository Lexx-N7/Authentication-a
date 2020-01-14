import React from "react";
import VideoItem from "./VideoItem";
import styled from "styled-components";

export default function VideoList({ videos, onVideoSelect }) {
  let files = videos.map((video, index) => {
    return (
      <VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />
    );
  });

  return (
    <RightList>{videos.length === 0 ? "videos loading..." : files}</RightList>
  );
}

let RightList = styled.div`
  height: calc(100vh - 50px);
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: 50px;
`;
