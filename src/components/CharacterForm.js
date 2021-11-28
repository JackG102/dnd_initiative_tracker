import './CharacterForm.css';
import React from 'react';

const CharacterForm = ({characterData, setCharacterData, editMode, setEditMode, initiative, hp, characterName, notes, uid, isActive, setInitiative, setCharacterName, setHP, setNotes, setIsActive }) => {

  // Creating a new object from the Form values, which will eventually
  // be added to statue after some manipulation.
  const setCharacter = (event) => {
    if (editMode === false) {
      event.preventDefault();
      const playerData = {};
      playerData.initiative = initiative;
      playerData.character_name = characterName;
      playerData.hp = hp;
      playerData.notes = notes;
      playerData.active = isActive;
      playerData.uid = `${characterName}_${Date.now()}`;
      
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
      // Reseting form after Character creation
      setInitiative('');
      setCharacterName('');
      setHP('');
      setNotes('');
      setIsActive(false);
    } else {
      event.preventDefault();
      // Need to keep key identifier for index, so the name can change
      const index = characterData.findIndex(el => el.character_name === uid);

      // Make copy of characterData from State object
      let newCharacterData = [...characterData];
      
      if (isActive === true) {
        newCharacterData.map((el) => {
          return el.active = false;
        });
      }
 
      const editedCharacter = {
        'initiative': initiative,
        'hp': hp,
        'character_name': characterName,
        'notes': notes,
        'active': isActive
      };
      
      newCharacterData[index] = editedCharacter;

      // Sort Character Data by highest to lowest initiative
      const sortedCharacterData = [...newCharacterData].sort((a, b) => {
        return b.initiative - a.initiative;
      });

      setCharacterData(sortedCharacterData);

      // Reseting form after Edit update
      setInitiative('');
      setCharacterName('');
      setHP('');
      setNotes('');
      setIsActive(false);
      setEditMode(false);
    }

  };

  return (
    <form 
      className="ui form raised very padded text segment" 
      id="character_form"
      onSubmit={setCharacter}
    >
      <h2>Character Form</h2>
      <div className="ui field">
        <label>Initiative</label>
        <input 
          type="number" 
          name="initiative"
          value={initiative}
          onChange={e => setInitiative(e.target.value)}
        />
      </div>
      <div className="ui field">
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          value={characterName}
          onChange={e => setCharacterName(e.target.value)}
        />
      </div>
      <div className="ui field">
        <label>HP</label>
        <input 
          type="number" 
          name="hp"
          value={hp}
          onChange={e => setHP(e.target.value)}
        />
      </div>
      <div className="ui field">
        <label>Notes</label>
        <input 
          type="text" 
          name="notes"
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
      </div>
      <div className="ui checkbox">
        <input 
          type='checkbox'
          name="is_active" 
          checked={isActive}
          onChange={e => setIsActive(e.target.checked)}
        />
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