import React from 'react';

const Weather = (props) => {
    return (
      <div>
        {props.city && props.country && <p><span>Location</span>: {props.city}, {props.country}</p>}
        {props.temperature && <p><span>Temperature</span>: {Math.round(props.temperature)}&deg;C</p>}
        {props.humidity && <p><span>Humidity</span>: {props.humidity}%</p>}
        {props.description && <p><span>Conditions</span>: {props.description}</p>}
        {props.error && <p><span>Error</span>: {props.error}</p>}
      </div>
    );
}

export default Weather;