import React, { useState, useEffect } from 'react'
import axios from 'axios'


const SpecificCountry = ({ name, capital, population, languages, flag}) => {
    var languageList = ['']
    const [weather, setWeather] = useState([]);
    const [icon, setIcon] = useState("");

    

    const updateWeather = capital => {
        require('dotenv').config()
        const API_KEY = process.env.REACT_APP_API_KEY
        const request = axios.get(`http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${capital}`)
        return request.then(response => {
          return response.data;
        })
      }
    useEffect(() => {
        updateWeather(capital).then(response => {
          setWeather(response.current);
          setIcon(response.current.condition.icon);
        });
      }, [capital]);


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
        <img src={flag} alt={""} height="200" width="250" />
        </div>
        <div>
            <h2>Weather in {capital}</h2>
            <p>Temperature: {weather.temp_c} Celsius</p>
            <img src={icon} alt={""} height="50" width="50"/>
        </div>
        </>
    )
}

export default SpecificCountry
