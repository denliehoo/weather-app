import { useState } from "react";
import "./App.css";
import SearchResult from "./components/Weather/SearchResults";
import SearchHistoryItem from "./components/Weather/SearchHistoryItem";
import Button from "./components/UI/Button/Button";
import { weatherSample } from "./components/utils/sampleData";
import { formatDate } from "./components/utils/formatDate";
import { getWeatherApi, getWeatherDetailsApi } from "./api";

function App() {
  const getLocalStorage = () => {
    const storedData = localStorage.getItem("history");

    if (storedData) {
      try {
        const deserializedData = JSON.parse(storedData);
        return deserializedData;
      } catch (error) {
        console.log(error);
        return [];
      }
    } else {
      return [];
    }
  };

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState(null);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [history, setHistory] = useState(getLocalStorage());
  const [error, setError] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setError("");
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setError("");
  };
  const handleClear = () => {
    setError("");
    setCity("");
    setCountry("");
    setWeather(null);
  };
  const handleDeleteHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };
  const handleSearchWeather = async (haveGeocoding, details) => {
    setResultsLoading(true);
    setError("");
    const [isSuccess, res] = await getWeatherDetailsApi(haveGeocoding, details);
    if (!isSuccess) {
      console.log(res); // the error
      // handle the error accordingly....
      setError(res);
      setWeather(null);
      setResultsLoading(false);
      return;
    }

    const newHistory = [
      {
        lat: res.lat,
        lon: res.lon,
        city: res.city,
        country: res.country,
        time: res.time,
      },
      ...history,
    ];

    localStorage.setItem("history", JSON.stringify(newHistory));
    setHistory(newHistory);
    setWeather(res);

    setResultsLoading(false);
  };

  return (
    <div>
      <h1>Today's Weather</h1>
      <hr />
      {/* search bar */}
      <div className="weather-input-container">
        <label>
          City:
          <input
            className="weather-input"
            type="text"
            value={city}
            onChange={handleCityChange}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            className="weather-input"
            type="text"
            value={country}
            onChange={handleCountryChange}
          />
        </label>
        {/* <Button
          onClick={handleSearchButton}
          label="Search"
          loading={resultsLoading}
        /> */}
        <button
          onClick={() =>
            handleSearchWeather(false, { city: city, country: country })
          }
        >
          Search
        </button>
        <button onClick={handleClear}>Clear</button>
      </div>
      {/* error */}
      {error && <div>Error: {error}</div>}
      {/* searched details */}
      {/* make it so such that this always takes up e.g. 200 px of height so tha layout doesnt move around */}
      {resultsLoading ? (
        <div>Loading....</div>
      ) : (
        weather && <SearchResult details={weather} />
      )}
      {/* Search History */}
      <div>
        <h1>Search History</h1>
        <button onClick={handleDeleteHistory}>Delete History</button>
        <hr />

        {/* 3. User can find their records in search history, and can click search button to call api again. Can click
delete button to remove the record.

save long lat city, countr instead. refactor call api + setting of details*/}
        {history.length ? (
          history.map((details, index) => (
            <SearchHistoryItem
              details={details}
              num={index + 1}
              handleSearchWeather={handleSearchWeather}
              setHistory={setHistory}
              history={history}
            />
          ))
        ) : (
          <div>No Records</div>
        )}
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
