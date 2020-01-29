import React , { useState } from "react";

export default function TeamForm() {
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
        e.persist();
        console.log(e);

        console.log(TeamForm);

        const initialState = {
            name: '',
            email: '',
            role: '',
        }
        setTeamForm(initialState);
    }

    return(
        <div className="TeamForm">
            <form onSubmit={submitHandler}>
            <label htmlFor="teamform_firstName">FirstName</label>
            <input 
            type="text"
            id="teamform_firstName"
            name="firstName"
            placeholder=" Please enter your FirstName here"
            onChange={changeHandler}
            value={TeamForm.firstName}
            />
            <label htmlFor="teamform_firstName">LastName</label>
            <input 
            type="text"
            id="teamform_lastName"
            name="lastName"
            placeholder="Please enter your LastName here"
            onChange={changeHandler}
            value={TeamForm.lastName}
            />
            <label htmlFor="teamform_teamRole">Team Role</label>
            <input 
            type="text"
            id="teamform_teamRole"
            name="teamRole"
            placeholder="Please enter your TeamRole here"
            onChange={changeHandler}
            value={TeamForm.teamRole}    
            />
            <label htmlFor="teamform_email">Email</label>
            <input 
            type="text"
            id="teamform_email"
            name="email"
            placeholder="Please enter your Email here"
            onChange={changeHandler}
            value={TeamForm.email}
            />
            <button type="submit">Add Note</button>
            </form>
        </div>
    )
}