import axios from "axios";
import { formatDate } from "../components/utils/formatDate";
import { capitalizeFirstOnly } from "../components/utils/transformText";

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
// current weather: https://openweathermap.org/current#one
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
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEYS}`
      // `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEYS}`
    );
    console.log(res);

    const weatherDetails = {
      city: capitalizeFirstOnly(city),
      country: res.data?.sys?.country,
      main: res.data?.weather[0]?.main,
      description: capitalizeFirstOnly(res.data?.weather[0]?.description),
      icon: res.data?.weather[0]?.icon,
      temperatureLow: res.data?.main?.temp_min,
      temperatureHigh: res.data?.main?.temp_max,
      humidity: res.data?.main?.humidity,
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
