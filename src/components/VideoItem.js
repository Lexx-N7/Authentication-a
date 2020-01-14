import React from "react";
import styled from "styled-components";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <StyledVideo onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <span>{video.snippet.title}</span>
    </StyledVideo>
  );
}

let StyledVideo = styled.span`
//   box-shadow: inset 0 10px 10px #333;
    background: linear-gradient(180deg, #333,transparent 10% ) ;
    border-radius: 10px;
  display: flex;
  width: 35vw;
  border: 1px solid orange;
  img {
    margin: 10px;
  }
  span {
    padding: 10px;
  }
`;
