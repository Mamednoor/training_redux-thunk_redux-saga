const fetchingCharacters = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_INFO_API':
      return true;
    case 'RECEIVE_CHARACTERS_INFO':
      return false;
    default:
      return state;
  }
};

export default fetchingCharacters;
