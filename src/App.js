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

  // State for Form Edit Mode
  const [editMode, setEditMode] = useState(false);

  // State for Form
  const [initiative, setInitiative] = useState(null);
  const [characterName, setCharacterName] = useState('');
  const [hp, setHP] = useState(null);
  const [notes, setNotes] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [uid, setUID] = useState('');


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
          editMode={editMode}
          setEditMode={setEditMode}
          setModalVisible={setModalVisible}
          setInitiative={setInitiative}
          setCharacterName={setCharacterName}
          setHP={setHP}
          setNotes={setNotes}
          setIsActive={setIsActive}
          setUID={setUID}

        />
      </div>
      <div className="form_container">
        <CharacterForm  
          characterData={characterData} 
          setCharacterData={setCharacterData}
          editMode={editMode}
          setEditMode={setEditMode}

          setInitiative={setInitiative}
          setCharacterName={setCharacterName}
          setHP={setHP}
          setNotes={setNotes}
          setIsActive={setIsActive}
          initiative={initiative}
          characterName={characterName}
          hp={hp}
          notes={notes}
          isActive={isActive}
          uid={uid}
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