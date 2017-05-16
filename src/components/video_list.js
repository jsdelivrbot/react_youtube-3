//no need for state as it does not require user interaction or re-render itself
//this will just be a functional component

import React from 'react';
import VideoListItem from './video_list_item';

//props is an object
//In a functional component, "props" needs to be passed as an argument
//In a class component, you use "this.props".
const VideoList = function (props) {

  //use "map()" method to loop over each video in the array
  //"props.videos" is an array
	//In "props.videos", "videos" represents, the property name on "VideoList" in index.js. This is equal to all the JSON data.
  //"{props.onVideoSelect}" in "onVideoSelect={props.onVideoSelect}" is grabbing the property from index.js which updates the state.
	//the property name "onVideoSelect", "video", and "key" can be named anything you want
	//"vids" represents all the json DATA
	//"vids.etag" grabs the unique identifier for each video

  //This returns the list of videos
	const VideoItems = props.videos.map(function (vids) {
		return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={vids}
        key={vids.etag}
        />
    )
	});

//"props.videos" is an array of videos. "videos" represents
//the attribute on "VideoList" in index.js which is all the JSON data.
//in props.videos.length, "videos" comes from "<VideoList videos={this.state.videos}/>" in index.js
//"<VideoList videos={this.state.videos}/>" in index.js

  //this dispays the list of videos
  return (
    <ul className="col-md-12">

      {VideoItems}

      There are {props.videos.length} videos
    </ul>
  );
}

export default VideoList;
