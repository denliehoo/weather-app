import React, { useEffect, useState } from "react";
import "./SearchResult.css";

const SearchResult = (props) => {
  const { details } = props;
  const {
    city,
    country,
    main,
    description,
    temperatureLow,
    temperatureHigh,
    humidity,
    time,
    icon,
  } = details;

  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setShowTransition(false);
    }, 2000);

    return () => {
      clearTimeout(transitionTimer);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="search-result-container">
        {showTransition && (
          <div
            className="transition-animation"
            style={{
              backgroundImage: `url(https://openweathermap.org/img/wn/${icon}@2x.png)`,
              backgroundRepeat: "repeat",
            }}
          />
        )}
        <div className="weather-content">
          <div className="weather-info">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={main}
            />
            <div className="weather-main">{main}</div>
          </div>
          <div className="weather-city-country">
            {city}, {country}
          </div>
          <div className="weather-description">Description: {description}</div>
          <div className="weather-temperature">
            Temperature: {temperatureLow}°C~{temperatureHigh}°C
          </div>
          <div className="weather-humidity">Humidity: {humidity}%</div>
          <div className="weather-time">Time: {time}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
