import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';

const display = document.getElementById('app');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        gifs: []
    }
  } 

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={ this.handleTermChange } />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}


/* 

... Was:


  "
      return React.createElement(
              "div",
              { "class": "greeting" },
              React.createElement(
                    "p",
                    { "class": "greeting-text" },
                    "Hello Happy World!"
              )
      );
  "

*/

ReactDOM.render(<App />, display);
