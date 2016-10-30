import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const display = document.getElementById('app');

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
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
