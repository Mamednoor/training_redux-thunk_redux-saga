import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import CharacterCard from './containers/charactersCardContainer';

class App extends Component {
  componentDidMount() {
    this.props.fetchCharactersQuote();
  }

  render() {
    const { fetchingCharacters } = this.props;

    return (
      <div className="App">
        {fetchingCharacters ? (
          <div data-selector="App-isLoading" style={{ marginTop: '1em' }}>
            Loading…
          </div>
        ) : (
          <>
            <CharacterCard />
          </>
        )}
      </div>
    );
  }
}

App.propTypes = {
  fetchingCharacters: PropTypes.bool.isRequired,
  fetchCharactersQuote: PropTypes.func.isRequired,
};

export default App;
