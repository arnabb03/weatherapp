import React from 'react';
import Weather from './Weather';
import './Weather.css'; // Import the CSS file

const App = () => {
  return (
    <div className="weather-container">
      <h1>Weather Forecast App</h1>
      <Weather />
    </div>
  );
};

export default App;
