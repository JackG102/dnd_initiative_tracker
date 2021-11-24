import './InitiativeList.css';
import React from 'react';
import CharacterCard from './CharacterCard';

const InitiativeList = ({characterData, setModalVisible}) => {

  const renderCharacterCards = characterData.map((el) => {
    return (
      <CharacterCard 
        initiative={el.initiative} 
        hp={el.hp} 
        name={el.name} 
        notes={el.notes}
        active={el.active}
        key={el.name}
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
          className="ui red button"
          onClick={(event) => setModalVisible(true)}
        >
          Clear Board
        </button>
      </div>
    </div>
  );
}

export default InitiativeList;