import React from 'react'


const Persons = ({persons, remove}) => {
    const rows = () => persons.map(note => 
    <p key={note.name + note.id}>
        {note.name} {note.number}<button id={note.id} value={note.name} onClick={event => remove(event.target.value, event.target.id)}>Delete</button>
    </p>
    )
    return <>{rows()}</>
}

export default Persons