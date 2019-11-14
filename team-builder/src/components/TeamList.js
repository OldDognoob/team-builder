import React from 'react';

export default function TeamList({team}) {
    return (
        <div className="team-list">
            {team.map(team => ( 
                <div className="team" key={team.id}>
                    <h1>{team.name}</h1>
                    <p>{team.email}</p>
                    <p>{team.role}</p>
                 </div>   
            ))}
        </div>
    );

};
