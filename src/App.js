import './App.css';
import React from 'react';
import CharacterForm from './components/CharacterForm';

const App = () => {
  return (
    <div className="app-container">
      <div className="initiative_tracker_container">
        <h2>Placeholder</h2>
      </div>
      <div className="form_container">
        <CharacterForm />
      </div>
    </div>
  );
}

export default App;