import React, { useState } from 'react';
import './App.css';

import TeamForm from './components/TeamForm';
import TeamList from './components/TeamList';


function App() {
  const[team, setTeam]= useState([]);

  const addNewTeam=team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email:team.email,
      role: team.role
    };

    setTeam([...team, newTeam]);
  }

  return(
    <div className="Team">
      <h1>My New Team</h1>
      <TeamForm addNewTeam = {addNewTeam}/>
      <TeamList team={team}/>
    </div>
  )
}

export default App;