import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherSearch from './components/WeatherSearch';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {

      // const response = await fetch(`http://localhost:3000/weather?city=${city}`, {
        const response = await fetch(`https://weather-backend-h8tq.onrender.com/weather?city=${city}`, {


        headers:{
          accept: 'application/json',
          'User-agent': 'learning app',
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="App">
      <WeatherSearch onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;

