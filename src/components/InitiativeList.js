import './InitiativeList.css';
import React from 'react';
import CharacterCard from './CharacterCard';

const InitiativeList = ({characterData, setCharacterData, editMode, setEditMode, setModalVisible, setInitiative, setCharacterName, setHP, setNotes, setIsActive, setUID}) => {

  const nextPlayer = () => {
    const checkActivePlayer = (element) => element.active === true;
    const activePlayer = characterData.findIndex(checkActivePlayer);
    let oldCharacterData = [...characterData];

    oldCharacterData.map((el) => {
      return el.active = false;
    });

    oldCharacterData[activePlayer + 1] ? oldCharacterData[activePlayer + 1].active = true: oldCharacterData[0].active = true;

    setCharacterData(oldCharacterData);
  };

  const previousPlayer = () => {
    const checkActivePlayer = (element) => element.active === true;
    const activePlayer = characterData.findIndex(checkActivePlayer);
    const arrayLength = characterData.length;
    let oldCharacterData = [...characterData];

    oldCharacterData.map((el) => {
      return el.active = false;
    });

    oldCharacterData[activePlayer - 1] ? oldCharacterData[activePlayer - 1].active = true: oldCharacterData[arrayLength - 1].active = true;

    setCharacterData(oldCharacterData);
  };

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
        setUID={setUID}
      />
    );
  });

  return (
    <div className="ui raised very padded text segment">
      <h2>Initiative Board</h2>
      {renderCharacterCards}
      <div className="button_container">
        <div>
          <button className="ui button" onClick={previousPlayer}>Previous Player</button>
          <button className="ui button" onClick={nextPlayer}>Next Player</button>
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