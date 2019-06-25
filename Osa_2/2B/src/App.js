import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const rows = () => persons.map(note =>
    <Card
      key={note.name}
      card={note}
    />
  )

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addNote = (event) => {
  let doAdd = 0
    persons.forEach(function(name,id){
      if(name.name === newName){
        doAdd = 1
      }
    })

    event.preventDefault()
    setNewName('')
    setNewNumber('')
    if(doAdd === 0){ 
      const noteObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
    setPersons(persons.concat(noteObject))
  }else{
    alert(`${newName} is already in phone book`)
  }
  doAdd = 0
}


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>name: <input value={newName} onChange={handleNoteChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>        
      </form>
      <h2>Numbers</h2>
      {rows()}
    </div>
  )

}

export default App