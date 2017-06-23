import React, { Component } from 'react'

//define a new class called SearchBar and enable it with all functionality of react.cmponent class
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
    <div className="search-bar">
      <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
    </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
//state is a plain javascript object that is used to record and react to events
//only class based components have state. functional components do not have state
export default SearchBar;
