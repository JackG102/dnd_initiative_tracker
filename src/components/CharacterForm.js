import './CharacterForm.css';
import React from 'react';

const CharacterForm = ({characterData, setCharacterData, editMode, setEditMode}) => {

  // Creating a new object from the Form values, which will eventually
  // be added to statue after some manipulation.
  const addCharacter = (event) => {
    event.preventDefault();
    const playerData = {};
    playerData.initiative = event.target[0].value;
    playerData.character_name = event.target[1].value;
    playerData.hp = event.target[2].value;
    playerData.notes = event.target[3].value;
    playerData.active = event.target[4].checked;

    // Make copy of characterData from State object
    let oldCharacterData = characterData;

    // If new character has 'active' value from form,
    // make all other existing character data be false for 'active'
    // In Dungeons and Dragons, only one person can be active at a time.
    // Note: Refactor code to be more JavaScripty with new syntax. 
    if (playerData.active === true) {
      oldCharacterData.map((el) => {
        return el.active = false;
      });
    }

    // Add new character to characterData array now that we done our 'active' logic 
    let newCharacterData = [...oldCharacterData, playerData];

    // Sort Character Data by highest to lowest initiative
    const sortedCharacterData = [...newCharacterData].sort((a, b) => {
      return b.initiative - a.initiative;
    });

    setCharacterData(sortedCharacterData);
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
        <button className="ui button green" type="submit">
          {editMode ? 'Update Character' : 'Add Character' }
        </button>
      </div>
    </form>
  );
}

export default CharacterForm;