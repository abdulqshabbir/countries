import React, {useState, useEffect} from 'react'
import axios from 'axios';

const SingleCountry = ({country}) => {
    const [capitalWeather, setCapitalWeather] = useState({})
    country = country[0] // Take out only country object from array
    useEffect(() =>{
        axios
            .get(`https://api.apixu.com/v1/current.json?key=1245018ff0804137a1e160726190706&q=${country.capital}`)
            .then(response => {
                setCapitalWeather({
                    temperature: response.data.current.temp_c,
                    wind: response.data.current.wind_kph
                })
            })
    }, [country.capital])
    return(
        <div key={country.name}>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages: </h3>
            <ul>
                {country
                    .languages
                    .map(l => <li>{l.name}</li>
                )}
            </ul>
            <img 
                src={country.flag} 
                alt="country flag"
                width="300px"
                height="150px"
            />
            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {capitalWeather.temperature} degrees celcius</p>
            <p>Wind: {capitalWeather.wind} kph</p>
        </div>
    )
}

export default SingleCountry