import axios from "axios";
import { formatDate } from "../utils/formatDate";
import { capitalizeFirstOnly } from "../utils/transformText";

const WEATHER_API_KEYS = process.env.REACT_APP_WEATHER_API_KEY;
const GEO_API_KEYS = process.env.REACT_APP_GEO_API_KEY;
const IP_INFO_API_KEYS = process.env.REACT_APP_IP_INFO_API_KEY;

// current weather: https://openweathermap.org/current#one
export const getWeatherDetailsApi = async (details) => {
  try {
    const currentDate = formatDate(new Date());
    const { city, lat, lon } = details;

    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEYS}`
    );

    const weatherDetails = {
      city: city,
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

// https://rapidapi.com/wirefreethought/api/geodb-cities
export const getCityAutoCompleteOptionsApi = async (inputValue) => {
  const geoApiOptions = {
    headers: {
      "X-RapidAPI-Key": GEO_API_KEYS,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.get(
      "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      {
        params: {
          minPopulation: 100000,
          namePrefix: inputValue,
        },
        headers: geoApiOptions.headers,
      }
    );

    const data = response.data;

    const options = data.data.map((city) => ({
      lat: city.latitude,
      lon: city.longitude,
      city: city.name,
      country: city.countryCode,
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.countryCode}`,
    }));

    return [true, { options }];
  } catch (error) {
    console.error("Error loading options:", error);
    return [false, { options: [] }, error.message];
  }
};

export const getUserLocationApi = async () => {
  try {
    const getUserIp = await axios.get("https://api.ipify.org?format=json");
    const userIP = getUserIp.data.ip;

    const getUserLocation = await axios.get(
      `https://ipinfo.io/${userIP}/json?token=${IP_INFO_API_KEYS}`
    );

    const [lat, lon] = getUserLocation.data.loc.split(",");
    const city = getUserLocation.data.city;

    const location = {
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      city: city,
    };

    return [true, location];
  } catch (error) {
    console.error("Error:", error.message);
    return [false, error.message];
  }
};
