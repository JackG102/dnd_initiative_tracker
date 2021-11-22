import './App.css';
import React from 'react';
import CharacterForm from './components/CharacterForm';
import InitiativeList from './components/InitiativeList';

const App = () => {
  return (
    <div className="app-container">
      <div className="initiative_tracker_container">
        <InitiativeList />
      </div>
      <div className="form_container">
        <CharacterForm />
      </div>
    </div>
  );
}

export default App;