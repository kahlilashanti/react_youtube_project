import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyB4L0tAMPhMNvE4cuVlrziTVNhrjzIpXAA';

// components are snippets of code that produce html

// create a new component
const App = () => {
  //const or constant is immutable
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// be sure the component gets inserted into the DOM so the user can see it
ReactDOM.render(<App />, document.querySelector('.container')); //(render the component, and location)
