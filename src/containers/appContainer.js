import { connect } from 'react-redux';

import fetchCharactersInfo from '../actionCreators';
import App from '../App';

const mapStateToProps = ({ fetchingCharacters }) => ({
  fetchingCharacters,
});

const mapDispatchToProps = dispatch => ({
  fetchCharactersInfo: fetchCharactersInfo(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
