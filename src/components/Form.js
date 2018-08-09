import React from 'react';

const Form = (props) => {
    return (
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..." required autoComplete="off"/>
        <input type="text" name="country" placeholder="Country..." required autoComplete="off"/>
        <button>Get Weather</button>
      </form>
    );
}

export default Form;