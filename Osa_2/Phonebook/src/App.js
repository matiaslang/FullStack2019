import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([''])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchParam, setSearchParam ] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        console.log("DATA ON: " , response.data)
      })
  }
  useEffect(hook, [])
  

  const personsToShow = searchParam === ""
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(searchParam.toLowerCase())
    );

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchParam(event.target.value)
  }

  const addPerson = (event) => {
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

    <Filter value={searchParam} onChange={handleSearchChange} />

    <h3>Add a new</h3>

    <PersonForm 
      newName={newName}
      nameChange = {handleNameChange}
      newNumber={newNumber}
      numberChange={handleNumberChange}
      submit={addPerson}
    />

    <h3>Numbers</h3>

    <Persons persons={personsToShow}/>
  </div>
)
}

export default App