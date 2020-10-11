import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ characters }) => {
  return (
    <>
      {characters.map(character => (
        <figure className="QuoteCard" key={character.character}>
          <img src={character.image} alt={character.character} />
          <figcaption>
            <blockquote>{character.quote}</blockquote>
            <cite>{character.character}</cite>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

CharacterCard.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterCard;
