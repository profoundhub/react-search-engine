import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const display = document.getElementById('app');

class App extends React.Component {
  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
      </div>
    );
  }
}

/* Was:

return React.createElement(
        "div",
        { "class": "greeting" },
        React.createElement(
              "p",
              { "class": "greeting-text" },
              "Hello Happy World!"
        )
);

*/
ReactDOM.render(<App />, display);
