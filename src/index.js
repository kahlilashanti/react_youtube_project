import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list';
import VideoDetail from  './components/video_detail'
const API_KEY = 'AIzaSyBi463TfHx9e9W6yQFByst6_q-8IJCA6D0';

// components are snippets of code that produce html
// create a new component
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('seafood');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: 'term'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       }); //when key and value are the same
    });
  }

  render() {
    const videoSearch =_.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
      );
  }
}

// be sure the component gets inserted into the DOM so the user can see it
ReactDOM.render(<App />, document.querySelector('.container')); //(render the component, and location)
