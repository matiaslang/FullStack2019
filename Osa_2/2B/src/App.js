import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  console.log("LISTAN IHMISET OVAT: " , persons)

  const rows = () => persons.map(note =>
    <Card
      key={note.id}
      card={note}
    />
  )

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(noteObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        
        name:
        <input
          value={newName}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button> 
        
      </form>
      <h2>Numbers</h2>
      {rows()}
    </div>
  )

}

export default App