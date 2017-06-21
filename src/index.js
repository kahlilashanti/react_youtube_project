import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyBi463TfHx9e9W6yQFByst6_q-8IJCA6D0';

// components are snippets of code that produce html
// create a new component
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'seafood'}, (videos) => {
      this.setState({ videos }); //when key and value are the same
    });

  }

  render() {
  return (
    <div>
      <SearchBar />
    </div>
    );
  }
}

// be sure the component gets inserted into the DOM so the user can see it
ReactDOM.render(<App />, document.querySelector('.container')); //(render the component, and location)
