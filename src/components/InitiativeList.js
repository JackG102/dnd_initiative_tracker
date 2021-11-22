import './InitiativeList.css';
import React from 'react';
import CharacterCard from './CharacterCard';

const InitiativeList = () => {
  return (
    <div className="ui raised very padded text segment">
      <h2>Initiative Board</h2>
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
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