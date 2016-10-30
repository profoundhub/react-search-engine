import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <input onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }
}

/*

... Using:

  "
    e => this.onInputChange(e.target.value)
  "

... instead of:

  "
    function(event) {
        this.onInputChange(event.target.value);
    }
  "
  
*/

export default SearchBar;
