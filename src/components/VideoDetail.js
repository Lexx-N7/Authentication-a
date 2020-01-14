import React from "react";
import styled from "styled-components";

export default function VideoDetail({ video }) {
  if (!video) return <div>loading...</div>;
  let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div style={{width: '60vw',height: '50vh'}}>
        <StyledContainer className="video-container">
          <iframe src={videoSrc} frameBorder="0" width="560" height="315"></iframe>
          <div className='info'>
            <div>{video.snippet.title} - {video.snippet.channelTitle}</div>
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
          </div>
        </StyledContainer>
    </div>
  );
}

let StyledContainer = styled.div`
position: relative;
padding-bottom: 56.25%; /* 16:9 */
height: 0;
iframe {
  margin: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .info {
    position: absolute;
    margin-top: 56.25%;
  }



  
// iframe {
//   width: 56vmax;
//   height: 31vmax;
// }
`;
