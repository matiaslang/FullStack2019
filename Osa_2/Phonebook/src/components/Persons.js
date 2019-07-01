import React from 'react'
import Card from './Card'

const Persons = ({persons}) => {
    const rows = () => persons.map(note => 
        <Card
        key={note.name + 1}
        card={note}
        />
    )
    return <>{rows()}</>
}

export default Persons