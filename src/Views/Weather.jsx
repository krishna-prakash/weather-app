import React from "react";

//components
import WeatherInfo from "../Components/WeatherInfo";

const Weather = () => {
  const [weatherData, setWeatherdata] = React.useState(null);
  const [showForecast, setShowForecast] = React.useState(false);
  const url =
    "http://api.weatherapi.com/v1/forecast.json?key=698dc13c77094cf187695058201212&q=London&days=1";
  React.useEffect(() => {
    fetch(url, { Method: "GET" })
      .then((d) => d.json())
      .then((d) => setWeatherdata(d));
  }, []);

  if (!weatherData) {
    return "Loading";
  }

  const {location, current, forecast} = weatherData;

  return (
    <div className="weather-list-container">
      <div className="listing">
        <div className="current-weather-info">
            <p>City: {location.name}</p>
            <p>Country: {location.country}</p>
            <div className="temp-representaion">
            Temprature: {current.temp_c} c
            <WeatherInfo data={current.condition} />
            </div>
        </div>
        <div className="forecast-container">
        {forecast?.forecastday.map((m) => {
          return (
            <>
              <p>Date: {m.date}</p>
              <p>Maximum Temperature: {m.day.maxtemp_c}</p>
              <p>Next 24 Hours</p>
              <div>
                <button onClick={() => setShowForecast(!showForecast)}>
                  Show forecast
                </button>
                {showForecast &&
                  m.hour.map((n) => {
                    return (
                      <div className="forecast">
                        <p>{n.time}</p>
                        <p>{n.temp_c}</p>
                        <WeatherInfo data={n.condition} />
                      </div>
                    );
                  })}
              </div>
            </>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Weather;
