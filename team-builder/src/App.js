import React from 'react';
import {useState} from "react";

import './App.css';

const[teamMembers, setTeamMembers]= useState("");

function App() {
  const onTeamMemberChange= event => {
    setTeamMemberForm({
      name: event.target.value
    });
  };
  return (
    <div className="App">  
    </div>
  );
}

export default App;
