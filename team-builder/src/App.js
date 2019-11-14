import React, {useState} from 'react';
import Form from './components/Form';
import TeamList from './components/TeamList';

import './App.css';


function App() {

  const[teamList, setTeamList]= useState({
    name: "",
    email: "",
    Position:"",

  })

  return (
    <div className="App"> 
    <TeamList>
      </TeamList> 
    </div>
  );
}

export default App;
