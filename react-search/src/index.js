import React from 'react';
import ReactDOM from 'react-dom';

const display = document.getElementById('app');

class App extends React.Component {
  render() {
    return (
      <div class="greeting">
        <p class="greeting-text">Hello Happy Worlds!</p>
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
