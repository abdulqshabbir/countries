import React from 'react'
import Country from './Country'
import SingleCountry from './SingleCountry'
import isCountryMatch from '../helperFunctions/isCountryMatch'

const onlyOne = (countries) => countries.length === 1
const fewerThanTen = (countries) => countries.length < 10

const Countries = ({ countries, setCountries, query}) => {
    
    const matchingCountries = countries.filter(country => isCountryMatch(country, query))

    if (query.length === 0) {
        return (
            <p>There were no matches to your query</p>
        )
    }

    else if (onlyOne(matchingCountries)) {
        return (
            < SingleCountry country={matchingCountries} />
        )
    }
    else if (fewerThanTen(matchingCountries)) {
        return(
            matchingCountries.map(country => 
                <Country 
                    key={country.name}
                    country={country}
                    setCountries={setCountries}
                />
            )
        )
    }
    else {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
}

export default Countries