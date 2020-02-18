import React, { useState } from 'react';
import './App.css';

import TeamForm from './components/TeamForm';
import TeamList from './components/TeamList';


function App() {
  const[team, setTeam]= useState([]);

  const addNewTeam=member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email:member.email,
      role: member.role
    };
    // console.log(team);
    setTeam([...team, newMember]);
    
  
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