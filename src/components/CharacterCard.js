import './CharacterCard.css';
import React from 'react';

const CharacterCard = ({initiative, name, hp, notes}) => {
  return (
    <div className="ui raised very text segment character-card">
      <div className="character-card--attribute">
        <span><strong>Initiative:</strong></span>
        <span>{initiative}</span>
      </div>
      <div className="character-card--attribute">
        <span><strong>Character Name:</strong></span>
        <span>{name}</span>
      </div>
      <div className="character-card--attribute">
        <span><strong>HP:</strong></span>
        <span>{hp}</span>
      </div>
      <div className="character-card--attribute">
        <span><strong>Notes:</strong></span>
        <p>{notes}</p>
      </div>
    </div>
  );
}

export default CharacterCard;