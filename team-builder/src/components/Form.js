import React, {useState} from 'react';

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
            placeholder="Please enter your name here"
            onChange={handleFormChange}
            value={teamForm.name}
            />

            <label htmlFor="teamform_email">Email: </label>
            <input
                type="email"
                name="email"
                id="email"
                plaseholder="Enter you email here please"
                onChange={handleFormChange}
                value={teamForm.email}
                />

            <label htmlFor="teamform_role">Role: </label>
            <input
                type="text"
                name="role"
                id="role" 
                placeholder="Please enter your role here"
                onChange={handleFormChange}
                value={teamForm.role}
                />
            </form>
        </div>
    )
}