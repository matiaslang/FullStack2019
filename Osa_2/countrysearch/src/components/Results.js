import React from 'react'
import Country from './Country'
import SpecificCountry from './SpecificCountry'

const Results = ({ list , searchMethod }) => {

    const handleClick = (props) => { 
        searchMethod(props)
    }

    const showResult = () => list.map(country =>
        <Country
        key={country.area + country.population}
        name={country.name}
        capital={country.capital}
        population={country.population}
        languages={country.languages}
        flag={country.flag}
        mtod={handleClick}
        />
     
    )
    const firstDecision = () => (
        list.length >= 10
                    ? <p>Too many countries, specify another filter</p> 
                    : secondDecision()
    )

    const secondDecision = () => (
        list.length > 1
                    ? showResult()
                    : thirdDecision()
    )
    const thirdDecision = () => list.length !== 0 
                    ? <SpecificCountry
                     name={list[0].name}
                     capital={list[0].capital}
                     population={list[0].population}
                     languages={list[0].languages}
                     flag={list[0].flag}
                     /> 
                    : <p>No countries found :(</p>
 
    return (
        <div>{firstDecision()}</div>
    )
}

export default Results
