import React, { useState } from 'react';

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input 
        type="text" 
        className="form-control" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city" 
      />
      <button type="submit" className="btn btn-primary mt-2">Search</button>
    </form>
  );
};

export default WeatherSearch;