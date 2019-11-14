import React, {useState} from 'react';

import styled from 'styled-components';

export default function TeamForm() {
    const[teamForm, setTeamForm] = useState({
        name: "",
        email: "",
        role:""
    });

    const handleFormChange = (event) => {
        setTeamForm({
            ...teamForm,
            [event.target.name]:event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        event.persist();
        console.log(event);
    };

    return (
        <div className="TeamForm">
            <form onSubmi={handleSubmit}>
            <label htmlFor="teamform_name">Name</label>
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name here"
            onChange={handleFormChange}
            value={teamForm.name}
            />

            <label htmlFor="teamform_email">Email: </label>
            <input
                type="email"
                name="email"
                id="email"
                plaseholder="Enter you email here"
                onChange={handleFormChange}
                value={teamForm.email}
                />

            <label htmlFor="teamform_role">Role: </label>
            <input
                type="text"
                name="role"
                id="role" 
                placeholder="Enter your role here"
                onChange={handleFormChange}
                value={teamForm.role}
                />
            </form>
        </div>
    )
}


const StyledTeamForm = styled.div`
     height: 80px;
     margin-top: 20px;
     border-radius: 10px;
     background-color: #FF5A5F
   
`;