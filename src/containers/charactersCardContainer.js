import { connect } from 'react-redux';

import CharacterCard from '../components/CharacterCard';

const mapStateToProps = ({ characters }) => ({
  characters,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterCard);
