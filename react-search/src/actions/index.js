import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import GifModal from './components/GifModal';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import './styles/app.css';

const display = document.getElementById('app');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        gifs: [],
        selectedGif: null,
        modalIsOpen: false
    };
  } 

  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }
  
  /*
    // reducer for handling multiple gif-related actions
      function gifs(state, action) {
        switch (action.type) {
          case OPEN_MODAL:
            return {
                  ...state,
                  modalIsOpen: true,
                  selectedGif: action.gif.selectedGif
            };
          default:
              return state;
        }
      }
*/

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

  handleTermChange = (term) => {
    console.log(term);
    const url = `http://api.giphy.com/v1/gifs/search?q=${ term.replace(/\s/g, '+') }&api_key=dc6zaTOxFJmzC`;
      
      request.get(url, (err, res) => {
        this.setState({ gifs: res.body.data })      
      });
  };

  render() {
    return (
      <div>
        <SearchBar onTermChange={ this.handleTermChange } />
        <GifList 
            gifs={ this.state.gifs } 
            onGifSelect={ selectedGif => this.openModal(selectedGif) } />
        <GifModal modalIsOpen={ this.state.modalIsOpen }
                  selectedGif={ this.state.selectedGif }
                  onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }

}

ReactDOM.render(<App />, display);
