import React from 'react'
import Country from './Country'
import SpecificCountry from './SpecificCountry'

const Results = ({ list }) => {

    console.log("filtered countries: " ,list)

    const showResult = () => list.map(country => 
        <Country
        key={country.numericCode}
        name={country.name}
        capital={country.capital}
        />
    )
    const firstDecision = () => (
        list.length >= 10
                    ? <p>Too many countries, specify another filter</p> 
                    : secondDecision()
    )

    const secondDecision = () => (
        list.length > 1 && list.length
                    ? showResult()
                    : thirdDecision()
    )

    const thirdDecision = () => list.length !== 0 ? <SpecificCountry country={list}/> : <p>No countries found :(</p>
    
    return (
        <div>{firstDecision()}</div>
    )
}

export default Results
