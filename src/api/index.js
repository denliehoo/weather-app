import axios from "axios";
import { formatDate } from "../components/utils/formatDate";

const API_KEYS = process.env.REACT_APP_WEATHER_API_KEY;

/*
const details ={
    lat: "",
    lon: "",
    city: "",
    country: ""
}
*/
// geolocation: https://openweathermap.org/api/geocoding-api
// current weather: https://openweathermap.org/api/one-call-3#current
export const getWeatherDetailsApi = async (haveGeocoding, details) => {
  try {
    const currentDate = formatDate(new Date());
    let lat, lon;
    const { city, country } = details;
    if (haveGeocoding) {
      lat = details.lat;
      lon = details.lon;
    } else {
      const res = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${API_KEYS}`
      );
      if (!res.data.length) return [false, "Not Found"];

      lat = res.data[0].lat;
      lon = res.data[0].lon;
    }

    const res = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEYS}`
    );
    console.log(res);

    const weatherDetails = {
      city: city,
      country: country,
      main: res.data?.current?.weather[0]?.main,
      description: res.data?.current?.weather[0]?.description,
      temperatureLow: res.data?.current?.dew_point,
      temperatureHigh: res.data?.current?.temp,
      humidity: res.data?.current?.humidity,
      time: currentDate,
      lat: lat,
      lon: lon,
    };
    return [true, weatherDetails];
  } catch (err) {
    console.log(err);
    return [false, err.message];
  }
};
