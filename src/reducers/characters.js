const characters = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CHARACTERS_INFO':
      return action.characters.map(character => ({
        ...character,
      }));
    default:
      return state;
  }
};

export default characters;
