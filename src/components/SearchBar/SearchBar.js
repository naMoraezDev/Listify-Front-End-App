import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  };

  handleTermChange(event) {
    this.setState({term: event.target.value});
  };

  search() {
    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Buscar músicas por título" onChange={this.handleTermChange} />
        <button className="SearchButton" onClick={this.search}>Buscar</button>
      </div>
    );
  };
};

export default SearchBar;