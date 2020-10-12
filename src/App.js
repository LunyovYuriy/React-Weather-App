import React, { Component } from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends Component {
  constructor() {
    super();
    this.state = {
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: null,
    };
  }

  getWeather = (event) => {
    const API_KEY = '996ff97b78e75c6484b7e99fe0e6b9d7';
    const URL = 'https://api.openweathermap.org/data/2.5/weather';
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    fetch(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === '404') {
          this.setState({
            temperature: null,
            city: null,
            country: null,
            humidity: null,
            description: null,
            error: data.message,
          });
        } else {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: '',
          });
        }
      });
  };

  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      description,
      error,
    } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <div className="title">
            <Titles />
          </div>
          <div className="info">
            <Form getWeather={this.getWeather} />
            <Weather
              temperature={temperature}
              city={city}
              country={country}
              humidity={humidity}
              description={description}
              error={error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
