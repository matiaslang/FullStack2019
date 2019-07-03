import React from 'react'

const SpecificCountry = ({ name, capital, population, languages, flag , truth }) => {
    var languageList = ['']

    console.log("kielet:",languages)
    if(typeof(languages) !== "undefined"){
        languageList = languages.map(lang =>
            <li key={lang.iso639_2}>{lang.name}</li>)
    }
    return(
        <>
        <div>
            <h1>{name}</h1>
        </div>
        <div>
            <p>Capital {capital}</p>
            <p>Population {population}</p>
        </div>
        <div>
        <h2>Languages</h2>
        <ul>{languageList}</ul>
        </div>
        <div>
        <img src={flag} alt={""} height="100" width="150" />
        </div>
        </>
    )
}

export default SpecificCountry
