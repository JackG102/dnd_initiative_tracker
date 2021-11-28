import './CharacterCard.css';
import React from 'react';

const CharacterCard = ({initiative, character_name, hp, notes, active, uid, characterData, setCharacterData, setEditMode, setInitiative, setCharacterName, setHP, setNotes, setIsActive, setUID}) => {

  const deleteCharacter = () => {
    setCharacterData(characterData.filter((item) => item.uid !== uid));
  };

  const addCharacterToEditForm = () => {
    setEditMode(true);
    setInitiative(initiative);
    setCharacterName(character_name);
    setHP(hp);
    setNotes(notes);
    setIsActive(active);
    setUID(uid);
  }

  return (
    <div className={`ui raised very text segment character-card ${ active ? 'is-active' : 'not-active'}`}>
      <div className="character-card--attribute">
        <span><strong>Initiative:</strong></span>
        <span>{initiative}</span>
      </div>
      <div className="character-card--attribute">
        <span><strong>Character Name:</strong></span>
        <span>{character_name}</span>
      </div>
      <div className="character-card--attribute">
        <span><strong>HP:</strong></span>
        <span>{hp}</span>
      </div>
      <div className="character-card--attribute">
        <span><strong>Notes:</strong></span>
        <p>{notes}</p>
      </div>
      <div className="character-card--attribute">
        <button 
          className="ui button blue" 
          style={{marginBottom: '10px'}}
          onClick={addCharacterToEditForm}
        >
          Edit
        </button>
        <button className="ui button red" onClick={deleteCharacter}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;