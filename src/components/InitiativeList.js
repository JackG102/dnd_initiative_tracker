import './InitiativeList.css';
import React from 'react';
import CharacterCard from './CharacterCard';

const InitiativeList = ({characterData}) => {
  
  //<CharacterCard initiatiative={initiatiative} id={id} name={name} notes={notes}/>
  const renderCharacterCards = characterData.map((el) => {
    return (
      <CharacterCard 
        initiative={el.initiative} 
        hp={el.hp} 
        name={el.name} 
        notes={el.notes} 
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
        <button className="ui red button">Clear Board</button>
      </div>
    </div>
  );
}

export default InitiativeList;