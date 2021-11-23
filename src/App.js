import './App.css';
import React, { useState } from 'react';
import CharacterForm from './components/CharacterForm';
import InitiativeList from './components/InitiativeList';
import Modal from './components/Modal';

const App = () => {
  
  // Fetch JSON data for characters and load it into state
  const blogPostsJson = require('./data/character_data.json');
  const [characterData, setCharacterData] = useState(blogPostsJson);
  
  // State for Modal
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="app-container">
      <div className="initiative_tracker_container">
        <InitiativeList 
          characterData={characterData} 
          setModalVisible={setModalVisible}
        />
      </div>
      <div className="form_container">
        <CharacterForm />
      </div>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </div>
  );
}

export default App;