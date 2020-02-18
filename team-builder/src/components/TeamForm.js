import React , { useState } from "react";

export default function TeamForm({addNewTeam}) {
    const [teamForm, setTeamForm] = useState({
        name: '',
        email: '',
        role: '',
    });

    function changeHandler(e) {
        setTeamForm({
            ...teamForm,
            [e.target.name]: e.target.value
        })
    };

    function submitHandler(e) {
        e.preventDefault();
        addNewTeam(teamForm);

        const initialState = {
            name: "",
            email: '',
            role: '',
        }
        setTeamForm(initialState);
    }

    return(
        <div className="TeamForm">
            <form onSubmit={submitHandler}>
            <label htmlFor="teamform_name">Name</label>
            <input 
            type="text"
            id="teamform_name"
            name="name"
            placeholder=" Please enter your name here"
            onChange={changeHandler}
            value={teamForm.name}
            />
            <label htmlFor="teamform_teamRole">Team Role</label>
            <input 
            type="text"
            id="teamform_teamRole"
            name="role"
            placeholder="Please enter your TeamRole here"
            onChange={changeHandler}
            value={teamForm.role}    
            />
            <label htmlFor="teamform_email">Email</label>
            <input 
            type="text"
            id="teamform_email"
            name="email"
            placeholder="Please enter your Email here"
            onChange={changeHandler}
            value={teamForm.email}
            />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}