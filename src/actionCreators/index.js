const fetchCharactersQuote = dispatch => async () => {
  dispatch({
    type: 'FETCH_CHARACTERS_INFO_API',
  });
  const response = await fetch(
    'https://futuramaapi.herokuapp.com/api/characters/Bender/'
  );
  const characters = await response.json();
  dispatch({
    type: 'RECEIVE_CHARACTERS_INFO',
    characters,
  });
  console.log('test :', characters);
};

export default fetchCharactersQuote;
