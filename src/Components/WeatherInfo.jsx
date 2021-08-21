import React from 'react';

const WeatherInfo = ({ data }) => {
    return (
      <div className="weather-info">
        <span>{data.text}</span>
        <img src={data.icon} alt="icon" />
      </div>
    );
  };

  export default WeatherInfo;