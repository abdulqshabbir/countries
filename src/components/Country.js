import React from 'react'

const Country = ({country, setCountries}) => {
    const handleClick = () => {
        setCountries([{
            ...country
        }])
    }
    return(
        <div>
            <li> {country.name} </li>
            <button onClick={handleClick}>Show Information</button>
        </div>
    )
}
export default Country