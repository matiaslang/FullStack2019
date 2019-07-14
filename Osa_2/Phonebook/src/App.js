import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/personlist'
import Notification from './services/Notification'

const App = () => {
  const [ persons, setPersons] = useState([''])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchParam, setSearchParam ] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorNum, setErrorNum] = useState(0)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')
  

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
        if(window.confirm(`${newName} is already added to phonebook, would you like to replace the old number with a new one?`)){
          const noteObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
          }
          personService
          .update(name.id, noteObject)
          .then(returnedPerson => {
            setErrorNum(0)
            setErrorMessage(
              `User ${newName} has now been updated`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
            personService
            .getAll()
            .then(initialPersons => {
            setPersons(initialPersons)
            })
          })
          .catch(error => {
            setErrorNum(1)
            setErrorMessage(
              `Information of ${newName} has been already deleted from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
      }
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
      personService
      .create(noteObject)
      .then(returnedPerson => {
        setErrorNum(0)
        setErrorMessage(
          `User ${newName} has now been added`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }
  doAdd = 0
}

  const deletePerson = (name, id) => {
    if (window.confirm(`Are you sure you wish to delete user ${name}?`)){
      personService
      .deleteUser(id)
      .then(returnedPerson=> {
          setErrorNum(0)
          setErrorMessage(
            `User ${name} has now been deleted`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          personService
          .getAll()
          .then(initialPersons => {
            setPersons(initialPersons)
          })
        })
      .catch(error => {
        setErrorNum(1)
        setErrorMessage(
          `There has been an error ${error}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    } 
  }

return (
  <div>

    <h2>Phonebook</h2>

    <Notification message={errorMessage} errorNum={errorNum} />

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

    <Persons persons={personsToShow} remove={deletePerson}/>
  </div>
)
}

export default App