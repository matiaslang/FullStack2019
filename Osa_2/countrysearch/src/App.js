import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Results from './components/Results'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([''])
  //const [filteredCountries, setFilteredCountries] = useState([''])

  const manualChange = (props) => {
    setSearch(props)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  const filteredCountries = search === ""
    ? countries
    : countries.filter(country =>
        country.name.toLowerCase().includes(search.toLowerCase())
    );

  
    
  
  return (
      <div>
        find countries: <input value={search} onChange={handleSearchChange}/>
        <Results list = {filteredCountries} searchMethod={manualChange}/>
      </div>
  )
}

export default App
