import './scss/style.scss';

import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import OpeningDisplay from './components/opening-display/openingDisplay';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/currentWeather';
import Forecast from './components/forecast/forecast';
import { useState } from 'react';

function App() {
  const [curWeather, setCurWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isMetric, setIsMetric] = useState(true); //--> continue here and implement toggle for imperial to metric and back//

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(' ');

    const curWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    // &units=${isMetric ? 'metric' : 'imperial' }  removed this to allow for in-line unit coversion using formula from kelvins to °C or °F... only 1 fetch request//

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([curWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherData = await response[0].json();
        const forcastData = await response[1].json();

        setCurWeather({ city: searchData.label, ...weatherData });
        setForecast({ city: searchData.label, ...forcastData });
      })
      .catch((err) => console.log(err));

    console.log(curWeather);
    console.log(forecast);
  };

  return (
    <div className="container">
      <div className="container__search">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="container__button">
        <button
          onClick={() => setIsMetric(!isMetric)}
          className="container__button-units"
        >
          {isMetric ? 'Switch to Imperial' : 'Switch to Metric'}
        </button>
      </div>
      {!curWeather ? (
        <div className="container__opening-display">
          {' '}
          <OpeningDisplay />{' '}
        </div>
      ) : (
        <div className="container__weather fade-in">
          {curWeather && (
            <CurrentWeather data={curWeather} isMetric={isMetric} />
          )}
        </div>
      )}

      <div className="container__forecast">
        {forecast && <Forecast data={forecast} isMetric={isMetric} />}
      </div>
    </div>
  );
}

export default App;
