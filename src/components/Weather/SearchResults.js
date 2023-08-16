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
  } = details;

  // const city = "Johor";
  // const country = "MY";
  // const main = "Clouds";
  // const description = "scattered clouds";
  // const temperatureLow = "303.15";
  // const temperatureHigh = "306.15";
  // const humidity = "58";
  // const time = "2021-03-16 03:15 PM";

  return (
    <div>
      <div>
        <div>
          {city},{country}
        </div>
        <div>{main}</div>
        <div>Description: {description}</div>
        <div>
          Temperature: {temperatureLow}°C~{temperatureHigh}°C
        </div>
        <div>Humidity: {humidity}%</div>
        <div>Time: {time}</div>
      </div>
    </div>
  );
};

export default SearchResult;
