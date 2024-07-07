import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{weather.name}</h5>
        <p className="card-text">
          Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C <br/>
          Weather: {weather.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
