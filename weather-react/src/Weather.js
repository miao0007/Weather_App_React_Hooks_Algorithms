import React from 'react';

const Weather = ({description, city, country, error, temperature}) => {
    return (
        // writing the name of our data followed by && is to ensure that the API has been passed on and true before proceeding to return the data
        <div>
            
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature} °F</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather;