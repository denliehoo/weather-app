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
  lat: 1.5036,
  lon: 103.7496,
  timezone: "Asia/Kuala_Lumpur",
  timezone_offset: 28800,
  current: {
    dt: 1692151226,
    sunrise: 1692140679,
    sunset: 1692184468,
    temp: 303.99,
    feels_like: 310.99,
    pressure: 1014,
    humidity: 76,
    dew_point: 299.26,
    uvi: 5.03,
    clouds: 27,
    visibility: 10000,
    wind_speed: 3.46,
    wind_deg: 163,
    wind_gust: 4.12,
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d",
      },
    ],
  },
  // other irrelevant info...
};
