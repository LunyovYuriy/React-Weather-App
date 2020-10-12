import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({
  city,
  country,
  temperature,
  humidity,
  description,
  error,
}) => {
  return (
    <div>
      {city && country && (
        <p>
          <span>Location</span>: {city}, {country}
        </p>
      )}
      {temperature && (
        <p>
          <span>Temperature</span>: {Math.round(temperature)}&deg;C
        </p>
      )}
      {humidity && (
        <p>
          <span>Humidity</span>: {humidity}%
        </p>
      )}
      {description && (
        <p>
          <span>Conditions</span>: {description}
        </p>
      )}
      {error && (
        <p>
          <span>Error</span>: {error}
        </p>
      )}
    </div>
  );
};

Weather.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  description: PropTypes.string,
  error: PropTypes.string,
};

Weather.defaultProps = {
  city: '',
  country: '',
  temperature: 0,
  humidity: 0,
  description: '',
  error: '',
};

export default Weather;
