import React from 'react';

// "({video})" is the same as "const video = props.video".
// For "const video = props.video", "(props)" needs to be passed instead of "({video"})
//"props.video" in "const video = props.video" is grabbing the property name from
//<VideoListItem onVideoSelect={props.onVideoSelect} video={vids} key={vids.etag}/>
//in video_list.js
const VideoListItem = ({video, onVideoSelect}) => {

  //grabs the image URL
  const imageURL = video.snippet.thumbnails.default.url
  //grabs teh video title
  const videoTitle = video.snippet.title

  //Below are two examples on how to pass the JSON data

  // Example 1:
  //this displays all the JSON data for each video item
  // console.log(video)
  // console.log(onVideoSelect)

  //below is the longer way but can be used as well:

  // Example 2:
  // For "const video = props.video", "(props)" needs to be passed instead of "({video"})
  //"video" and "onVideoSelect" is grabbing the property name from video_list.js within
  // <VideoListItem onVideoSelect={} key={vids.etag} video={vids}/>

  // const video = console.log(props.video);
  // const onVideoSelect = console.log(props.onVideoSelect);

  //this is a video
  // onClick={ function () { props.onVideoSelect(props.video)}"}
  //When a video from the video list is clicked, it will update <VideoDetail/>
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img className="media-object" src={imageURL}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>

      </div>
    </li>
  );

}

//exports to "video_list.js"
export default VideoListItem;
