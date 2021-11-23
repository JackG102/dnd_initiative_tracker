import './CharacterForm.css';
import React from 'react';

const CharacterForm = () => {
  return (
    <form className="ui form raised very padded text segment" id="character_form">
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