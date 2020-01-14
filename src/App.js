// import React, { Component } from "react";
// import SearchBar from "./components/SearchBar";
// import VideoDetail from "./components/VideoDetail";
// import VideoList from "./components/VideoList";
// import youtube from "./api/youtube";
// import "./App.css";

// export default class App extends Component {
//   state = {
//     videos: [],
//     selectedVideo: null
//   };

//   handleSubmit = async search => {
//     let {data:{items:videos}} = await youtube.get("search", {
//       params: {
//         part: "snippet",
//         maxResults: 5,
//         key: "AIzaSyAZeANtjUoKNrQNZV_mxko3lmQn0pj7Kkc",
//         q: search
//       }
//     });
//     this.setState({
//       videos: videos,
//       selectedVideo: videos[0]
//     });
//     console.log(videos);
//   };

//   handleVideoSelect = video => {
//     this.setState({
//       selectedVideo: video
//     });
//   };

//   render() {
//     return (
//       <>
//         <SearchBar handleSubmit={this.handleSubmit} />
//         <VideoDetail video={this.state.selectedVideo} />
//         <VideoList
//           videos={this.state.videos}
//           onVideoSelect={this.handleVideoSelect}
//         />
//       </>
//     );
//   }
// }

// https://developers.google.com/youtube/v3/getting-started      //for setting options and finding key

// modified solution
import React, { useState } from "react";
import { SearchBar, VideoDetail, VideoList } from "./components";
import youtube from "./api/youtube";
import "./App.css";

export default function App() {
  let [videos, setVideos] = useState([]);
  let [selectedVideo, setSelectedVideo] = useState(null);

  let handleSubmit = async search => {
    try {
      let {
        data: { items: videos }
      } = await youtube.get("search", {
        timeout: 1000,
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyAZeANtjUoKNrQNZV_mxko3lmQn0pj7Kkc",
          q: search
        }
      });
      setVideos(videos);
      setSelectedVideo(videos[0]);
      console.log(videos);
    } catch (err) {
      console.log(err, "hey check the catch of asyn");
    }
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
    </>
  );
}
