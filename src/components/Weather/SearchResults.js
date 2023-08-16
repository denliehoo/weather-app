// const SearchResult = (props) => {
//   const { details } = props;
//   const {
//     city,
//     country,
//     main,
//     description,
//     temperatureLow,
//     temperatureHigh,
//     humidity,
//     time,
//     icon,
//   } = details;

//   return (
//     <div>
//       <div>
//         <img
//           src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
//           alt={main}
//         />
//         <div>
//           {city},{country}
//         </div>
//         <div>{main}</div>
//         <div>Description: {description}</div>
//         <div>
//           Temperature: {temperatureLow}°C~{temperatureHigh}°C
//         </div>
//         <div>Humidity: {humidity}%</div>
//         <div>Time: {time}</div>
//       </div>
//     </div>
//   );
// };

// export default SearchResult;

//   // const city = "Johor";
//   // const country = "MY";
//   // const main = "Clouds";
//   // const description = "scattered clouds";
//   // const temperatureLow = "303.15";
//   // const temperatureHigh = "306.15";
//   // const humidity = "58";
//   // const time = "2021-03-16 03:15 PM";
//   // const icon="10d"

import React from "react";
import "./SearchResult.css"; // Import your CSS file for styling

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

  return (
    <div className="search-result-container">
      <div className="weather-info">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={main}
        />
        <div className="main">{main}</div>
      </div>
      <div className="city-country">
        {city}, {country}
      </div>
      <div className="description">Description: {description}</div>
      <div className="temperature">
        Temperature: {temperatureLow}°C~{temperatureHigh}°C
      </div>
      <div className="humidity">Humidity: {humidity}%</div>
      <div className="time">Time: {time}</div>
    </div>
  );
};

export default SearchResult;
