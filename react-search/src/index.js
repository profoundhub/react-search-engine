import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import request from 'superagent';

const display = document.getElementById('app');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        gifs: []
    };
    //    this.handleTermChange = this.handleTermChange.bind(this);
  } 

   handleTermChange = (term) => {
    console.log(term);
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
      
      request.get(url, (err, res) => {
        this.setState({ gifs: res.body.data })      
      });
  };

  render() {
    return (
      <div>
        <SearchBar onTermChange={ this.handleTermChange } />
        <GifList gifs={ this.state.gifs } />
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
