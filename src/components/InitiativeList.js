import React from 'react';
import CharacterCard from './CharacterCard';

const InitiativeList = () => {
  return (
    <div className="ui form raised very padded text segment">
      <h2>Initiative Board</h2>
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </div>
  );
}

export default InitiativeList;