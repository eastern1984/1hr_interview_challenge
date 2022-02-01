import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { IWeather } from './types';
import CityTitle from './CityTitle';
import WeatherByHours from './WeatherByHours';



function App() {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch('http://api.weatherapi.com/v1/forecast.json?key=698dc13c77094cf187695058201212&q=London&days=1')
      .then(response => response.json())
      .then(result => {
        setWeather(result);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && weather &&
        <>
        <CityTitle name={weather.location.name} condition={weather.current.condition}/>
          <WeatherByHours hours={weather.forecast.forecastday[0].hour} />
        </>}
    </>
  );
}

export default App;
/*
API: http://api.weatherapi.com/v1/forecast.json?key=698dc13c77094cf187695058201212&q=London&days=1

Sample for Reference: https://duckduckgo.com/?q=weather+hourly+forecast&t=h_&ia=weather
*/