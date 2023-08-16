// http://api.openweathermap.org/geo/1.0/direct?q=Johor,MY&appid=API_KEY
export const geocodingSample = [
  {
    name: "Johor Bahru",
    local_names: {
      th: "โจโฮร์บะฮ์รู",
      lt: "Džohor Baru",
      ms: "Johor Bahru",
      en: "Johor Bahru",
      zh: "新山",
      fa: "جوهور بهرو",
      ru: "Джохор-Бару",
      ja: "ジョホールバル",
      ko: "조호르바루",
      ur: "جوھر بھرو ضلع",
      el: "Τζοχόρ Μπάχρου",
      ar: "جوهر بهرو",
      uk: "Джохор-Бару",
      ta: "ஜொகூர் பாரு",
    },
    lat: 1.503555,
    lon: 103.7495586,
    country: "MY",
    state: "Johor",
  },
];

// https://api.openweathermap.org/data/3.0/onecall?lat=1.503555&lon=103.7495586&appid=API_KEY
export const weatherSample = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 501,
      main: "Rain",
      description: "moderate rain",
      icon: "10d",
    },
  ],
  base: "stations",
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  rain: {
    "1h": 3.16,
  },
  clouds: {
    all: 100,
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: "IT",
    sunrise: 1661834187,
    sunset: 1661882248,
  },
  timezone: 7200,
  id: 3163858,
  name: "Zocca",
  cod: 200,
};
