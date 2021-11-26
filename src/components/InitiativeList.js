import './InitiativeList.css';
import React from 'react';
import CharacterCard from './CharacterCard';

const InitiativeList = ({characterData, setCharacterData, editMode, setEditMode, setModalVisible, setInitiative, setCharacterName, setHP, setNotes, setIsActive}) => {

  const renderCharacterCards = characterData.map((el) => {
    return (
      <CharacterCard 
        characterData={characterData}
        setCharacterData={setCharacterData}
        editMode={editMode}
        setEditMode={setEditMode}
        initiative={el.initiative} 
        hp={el.hp} 
        character_name={el.character_name} 
        notes={el.notes}
        active={el.active}
        key={el.name}

        setInitiative={setInitiative}
        setCharacterName={setCharacterName}
        setHP={setHP}
        setNotes={setNotes}
        setIsActive={setIsActive}
      />
    );
  });

  return (
    <div className="ui raised very padded text segment">
      <h2>Initiative Board</h2>
      {renderCharacterCards}
      <div className="button_container">
        <div>
          <button className="ui button">Previous Player</button>
          <button className="ui button">Next Player</button>
        </div>
        <button 
          className="ui button"
          onClick={(event) => setModalVisible(true)}
        >
          Clear Board
        </button>
      </div>
    </div>
  );
}

export default InitiativeList;