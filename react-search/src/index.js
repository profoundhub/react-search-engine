import React from 'react';
import ReactDOM from 'react-dom';

const display = document.getElementById('app');

class App extends React.Component {
  render() {
    return (
      <div class="greeting">
        <p class="greeting-text">Hello Happy World!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, display);
