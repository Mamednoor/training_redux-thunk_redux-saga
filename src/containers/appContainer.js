import { connect } from 'react-redux';

import fetchCharactersQuote from '../actionCreators';
import App from '../App';

const mapStateToProps = ({ fetchingCharacters }) => ({
  fetchingCharacters,
});

const mapDispatchToProps = dispatch => ({
  fetchCharactersQuote: fetchCharactersQuote(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
