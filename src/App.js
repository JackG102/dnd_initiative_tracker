import './App.css';
import React, { useState } from 'react';
import CharacterForm from './components/CharacterForm';
import InitiativeList from './components/InitiativeList';

const App = () => {
  
  // Fetch JSON data for characters and load it into state
  const blogPostsJson = require('./data/character_data.json');
  const [characterData, setCharacterData] = useState(blogPostsJson);

  return (
    <div className="app-container">
      <div className="initiative_tracker_container">
        <InitiativeList characterData={characterData} />
      </div>
      <div className="form_container">
        <CharacterForm />
      </div>
    </div>
  );
}

export default App;