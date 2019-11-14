import React from 'react';

import styled from "styled-components";

function Form () {
  console.log();

    const handleFormChange = (e) => {
        if (e.target.type === "") {
            setTeamList({
              ...TeamList,
              [e.target.name]: e.target.checked
            });
          } else {
            if (/[A-Za-z]/g.test(e.target.value)) {
            setTeamList({
                ...TeamList,
                [e.target.name]: e.target.value
              });
            }
          }
        }

        const handleSubmit = e => {
            e.preventDefault();
            e.persist();
            console.log(e);
            console.log(e.target.name.value);
            console.log(e.target.email.value);
            console.log(e.target.position.value);
        };

    return(
        <div className="TeamList">
            <h1>Team Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="teamListForm_name">Name</label>
                <input
                value={teamListForm.name}
                id='teamListForm_name'
                type='text'
                placeholder="Please enter your name here"
                onChange={handleFormChange}
                />

                <label htmlFor="teamListForm_email">Email</label>
                <input
                value={teamListForm.email}
                id='teamListForm_email'
                type='text'
                placeholder="Please enter your email here"
                onChange={handleFormChange}
                />

                <label htmlFor="teamListForm_position">Role</label>
                <input
                value={teamListForm.position}
                id="teamListForm_role"
                type="text"
                placeholder="Please enter your position here"
                onChange={handleFormChange}
                />

                <button
                disabled
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;


