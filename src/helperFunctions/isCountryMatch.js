const isCountryMatch = (country, query) => {
    const countryName = country.name.toLowerCase()
    query = query.toLowerCase()

    for (let i = 0; i < query.length; i++) {
        if (query.charAt(i) === countryName.charAt(i)) {
            // corresponding countries match!
        } 
        else {
            // corresponding characters don't match!
            return false
        }
    }
    return true
}

export default isCountryMatch