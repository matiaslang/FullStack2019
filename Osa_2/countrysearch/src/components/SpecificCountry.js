import React from 'react'

const SpecificCountry = ({country}) => {
    
    const languages = () =>  country[0].languages.map(lang => 
        console.log(lang))
    

    console.log("Viimeisen vaiheen maa on" ,country[0].name)
    return(
        <div>
        <h1>{country[0].name}</h1>
        
        <p>Capital {country[0].capital}</p>
        <p>Population {country[0].population}</p>
        {languages()}
        
        </div>
    )
}

export default SpecificCountry
/*
country[0].languages.map(lang =>
    <ul>{lang.name}</ul>)

    */