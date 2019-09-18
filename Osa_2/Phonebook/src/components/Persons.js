import React from 'react'


const Persons = ({persons, remove}) => {
    const rows = () => persons.map(person => 
    <p key={person.name + person.id}>
        {person.name} {person.number}<button id={person.id} value={person.name} onClick={event => remove(event.target.value, event.target.id)}>Delete</button>
    </p>
    )
    return <>{rows()}</>
}

export default Persons