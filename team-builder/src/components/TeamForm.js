import React , { useState } from "react";

export default function TeamForm() {
    return(
        <div className="TeamForm">
            <label htmlFor="teamform_firstName">FirstName</label>
            <input 
            type="text"
            id="teamform_firstName"
            name="firstName"
            placeholder="Please enter your FirstName here..."
            />
            <label htmlFor="teamform_firstName">LastName</label>
            <input 
            type="text"
            id="teamform_lastName"
            name="lastName"
            placeholder="Please enter your LastName here..."
            />
            <label htmlFor="teamform_role">Role</label>
            <input 
            type="text"
            id="teamform_role"
            name="role"
            placeholder="Please enter your TeamRole here..."
            />
            <label htmlFor="teamform_email">Email</label>
            <input 
            type="text"
            id="teamform_email"
            name="email"
            placeholder="Please enter your Email here..."
            />
        
        </div>
    )
}