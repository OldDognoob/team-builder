import React, {useState} from 'react';
import './App.css';

import TeamForm from './components/TeamForm';
import TeamList from './components/TeamList';

import styled from 'styled-components';

export default function Team() {
  const [team, setTeam]=useState([
    
  ]);

  const addNewTeam = team => {
    const newTeam = {
      ...team,
      id: Date.now()
    };

    setTeam([...team, newTeam]);
  }

  return(
    <div className="Team">
      <h1>My Team</h1>
      <TeamForm addNewTeam={addNewTeam}/>
      <TeamList team={team}/>
    </div>
  );
}


const StyledTeam = styled.h1`
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: -10px;
  text-align: left;
  margin-left: 40px;
`;

const StyledTeamForm = styled.div`
     height: 80px;
     margin-top: 20px;
     border-radius: 10px;
    
     &:hover{
       background-color: green;
     }
   
`;




  