import './CharacterForm.css';
import React from 'react';

const CharacterForm = ({characterData, setCharacterData}) => {
  const addCharacter = (event) => {
    event.preventDefault();
    const playerData = {};
    playerData.initiative = event.target[0].value;
    playerData.name = event.target[1].value;
    playerData.hp = event.target[2].value;
    playerData.notes = event.target[3].value;
    playerData.active = event.target[4].checked;
    setCharacterData([...characterData, playerData]);
  };

  return (
    <form 
      className="ui form raised very padded text segment" 
      id="character_form"
      onSubmit={addCharacter}
    >
      <h2>Character Form</h2>
      <div className="ui field">
        <label>Initiative</label>
        <input type="number" name="initiative" />
      </div>
      <div className="ui field">
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div className="ui field">
        <label>HP</label>
        <input type="number" name="hp" />
      </div>
      <div className="ui field">
        <label>Notes</label>
        <input type="text" name="notes" />
      </div>
      <div className="ui checkbox">
        <input type='checkbox' name="is_active" />
        <label>Is Active</label>
      </div>
      <div>
        <button className="ui button green" type="submit">Add Character</button>
      </div>
    </form>
  );
}

export default CharacterForm;