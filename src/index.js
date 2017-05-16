//if a package is installed, you don't need the whole path
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDjkZQ5Ky-x4qs3GPRhTJofIPyD8ZxUg1g';

//this is importing the function. If it's a file you created, you must put whole path.
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

//Sample of how to use the YTSearch api. Similar to JQuery's AJAX request.
//Within the console you will be able to see the JSON data
// YTSearch ({ key: API_KEY, term: 'surfboards'}, function (data) {
// 	console.log(data);
// });

//turn from a functional component to a class component because you want the whole
//component to re-render
class App extends Component {

  constructor(props) {
  super(props);

    //this.state.videos = [ data ]
      this.state = {
        //The initial state is an empty array with 0 videos.
        videos: [],
        //The initial state is null because we haven't selected a video
        //to begin with
        selectedVideo: null
      };

//this is the current state of the search input
this.videoSearch('nike');

//***THIS is moved into the "videoSearch" function below***
//this is where the data is fetched, then it is passed down to <VideoList/>
//you can also write as "(data) => {"
//YTSearch ({ key: API_KEY, term: 'mtpop'}, (data) => {
			//if written as ({videos: videos}), you can just write ({videos})
      //when you define this.setState({}), you are changing the state of
      //this.state({}). The setState is current state.
      //setState causes re-rendering because it first looks at the initial state
      //which is "this.state({})"" then it looks at "this.setState({})"
			//this.setState({
        //videos: data,
        //the current state of <VideoDetail/> is now the 5th video
        //selectedVideo: data[4]

      //});
		//});

  }

  //create a method that passes the user's text into the input as a parameter "searchTerm"
  //"searchTerm" is whatever the user types in the input
  videoSearch(searchTerm) {
    //this is where the data is fetched, then it is passed down to <VideoList/>
    //you can also write as "(data) => {"
    YTSearch ({ key: API_KEY, term: searchTerm}, (data) => {
    			//if written as ({videos: videos}), you can just write ({videos})
          //when you define this.setState({}), you are changing the state of
          //this.state({}). The setState is current state.
          //setState causes re-rendering because it first looks at the initial state
          //which is "this.state({})"" then it looks at "this.setState({})"
    			this.setState({
            videos: data,
            //the current state of <VideoDetail/> is now the 5th video
            selectedVideo: data[4]

          });
    		});
  }

  //***<VideoList/> comments start***
  //Since "App" is the parent component of "Videolist", you can pass a prop
  //to VideoList (react = downwards flow). Here you are passing the data to "VideoList".
  //"videos" is the prop in "videos={this.state.videos}".
  //"{this.state.videos}" is the data in "videos={this.state.videos}".
  //"videos" is passed as a prop to video_list.js
  //"{this.state.videos}" in "videos={this.state.videos}", means it is grabbing
  //the state from this.setState({videos: data}).
  //If "this.setState({videos: data})" does not exist, it will use the initial state
  //which is this.state({videos: []}) which is an empty array.

  //"onVideoSelect={selectedVideo => this.setState({selectedVideo})}"
  //or
  //function (selectedVideo) { this.setState ({selectedVideo}) }

  //What is happening here? A function is created in "<VideoList/>" so that it
  //will update "<VideoDetail/>" when selected from the <"VideoList"/>. Hence, why "selectedVideo" is being passed.
  //"onVideoSelect" is then passed to "<VideoListItem onVideoSelect="{props.onVideoSelct}"/>" in. video_list.js.
  //"onVideoSelect" in "<VideoListItem onVideoSelect="{props.onVideoSelct}"/>" is passed again to video_list_item.js
  //***<VideoList/> comments end***

  //***<VideoDetail/> comments start***
  //This displays the "1st" video in the array:
  //<VideoDetail video={this.state.videos[0]}/>
  //or
  //"<VideoDetail video={this.state.selectedVideo}/>" is grabbing the current
  //state which is "this.setState({selectedVideo: data[3]})"
  //***<VideoDetail/> comments end***

  //***<SearchBar/> comments start***
  //"searchTerm" is the term the user types in the input
  //whatever is passed into "searchTerm" will update the list of videos
  //***<SearchBar/> comments end***

	render () {
    return (
  		<div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
  		</div>
    );
	}
}

//Render the component to the page
ReactDOM.render(<App/>, document.getElementById('container'));
