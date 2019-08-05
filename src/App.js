import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
    const [query, setQuery] = useState('')
    const [countries, setCountries] = useState([])
    
    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    }
    
    const fetchCountries = () => {
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            setCountries(response.data)
        })
    }

    useEffect(fetchCountries, [query])

    return(
        <div>
            <label>
                Find countries: 
            </label>
            <input 
                type="text" 
                onChange={handleQueryChange}
            />
            <Countries 
                countries={countries}
                setCountries={setCountries}
                query={query} 
            />
        </div>
    )
}

export default App