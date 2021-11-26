import './App.css';
import React, { useState, useEffect } from 'react';
import CharacterForm from './components/CharacterForm';
import InitiativeList from './components/InitiativeList';
import Modal from './components/Modal';

const App = () => {
  
  // Fetch JSON data for characters and load it into state
  const blogPostsJson = require('./data/character_data.json');
  const [characterData, setCharacterData] = useState(blogPostsJson);
  
  // State for Modal
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Sort Character Data by highest to lowest initiative upon initial load
    const sortedCharacterData = [...characterData].sort((a, b) => {
      return b.initiative - a.initiative;
    });
    setCharacterData(sortedCharacterData);
  }, []);


  return (
    <div className="app-container">
      <div className="initiative_tracker_container">
        <InitiativeList 
          characterData={characterData}
          setCharacterData={setCharacterData} 
          setModalVisible={setModalVisible}
        />
      </div>
      <div className="form_container">
        <CharacterForm  
          characterData={characterData} 
          setCharacterData={setCharacterData}
        />
      </div>
      <Modal 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        setCharacterData={setCharacterData}
      />
    </div>
  );
}

export default App;