import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        name="country"
        placeholder="Country..."
        required
        autoComplete="off"
      />
      <input
        type="text"
        name="city"
        placeholder="City..."
        required
        autoComplete="off"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

Form.propTypes = {
  getWeather: PropTypes.func.isRequired,
};

export default Form;
