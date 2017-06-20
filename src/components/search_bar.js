import React, { Component } from 'react'

//define a new class called SearchBar and enable it with all functionality of react.cmponent class
class SearchBar extends Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }
}

export default SearchBar;
