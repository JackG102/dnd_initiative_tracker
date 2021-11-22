import './CharacterCard.css';
import React from 'react';

const CharacterCard = () => {
  return (
    <div className="ui raised very text segment character-card">
      <div className="character-card--attribute">
        <span><strong>Initiative:</strong></span>
        <span>18</span>
      </div>
      <div className="character-card--attribute">
        <span><strong>Character Name:</strong></span>
        <span>Applebottom</span>
      </div>
      <div className="character-card--attribute">
        <span><strong>HP:</strong></span>
        <span>40</span>
      </div>
      <div className="character-card--attribute">
        <span><strong>Notes:</strong></span>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  );
}

export default CharacterCard;