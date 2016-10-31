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
      <div>
        <div className="ProfoundAround">
          <img src="//profoundideation.com/videos/wp-content/uploads/2015/10/Profound-Ideation-Inc-Videos-Logo.png" alt="Profound Ideation Inc." className="ProfoundLogo" />
        </div>  
        <div className="search">
          
          <input onChange={ event => this.onInputChange(event.target.value) } />
        </div>
      </div>
    );
  }
}

/*

... Using:

  "
    e => this.onInputChange(e.target.value)
  "

... Instead of:

  "
    function(event) {
        this.onInputChange(event.target.value);
    }
  "
*/

export default SearchBar;
