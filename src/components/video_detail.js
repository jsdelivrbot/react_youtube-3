//VideoDetail displays the video which can be played along with video title
//and description

import React from 'react';

// "({video})" is the same as "const video = props.video".
// For "const video = props.video", "(props)" needs to be passed instead of "({video"})
//"props.videos" means it is grabbing the property name "videos" from video_list.js
//"props.videos"  = data
const VideoDetail = ({video}) => {

  //Because react renders so quickly on index.js, the data fetched from
  //index.js "YTSearch({key: API_KEY, term: 'surfboards'}), function (data) {
  //this.setState({videos: data}); });" loads AT THE SAME TIME as "<VideoDetail/>".
  //This means "<VideoDetail/>" will try to the fetch data before it is available,
  //which will in forth cause an error.
  //if the the "video" data is not fetched yet, return "Loading..."
  if (!video) {
    return <div> Loading...</div>
  }

  //this "videoId" is needed to embed a video so it can be played
  //you can also write: props.video.id.videoID
	const videoID = video.id.videoId;

  //grab the video title
  const vidTitle = video.snippet.title
  const vidDesc = video.snippet.description

//This is the ES6 way.
//This is for embedding the video as an <iframe> which allows the video to play
//Wrap in back-ticks which is to the left of "1" on the keyboard
const url = `https://www.youtube.com/embed/${videoID}`;

//This is the ES5 way. This is the same thing as the ES6 way
// const url = "https://www.youtube.com/embed/" + videoId;

return (
  <div className="video-detail details col-lg-12">

    <div>{vidTitle}</div>
    <div>{vidDesc}</div>


    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="video-width" className="embed-responsive-item" src={url}></iframe>
    </div>

 </div>
)

}

export default VideoDetail;
