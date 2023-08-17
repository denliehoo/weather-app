import { useState } from "react";
import "./App.css";
import SearchResult from "./components/Weather/SearchResults";
import SearchHistoryItem from "./components/Weather/SearchHistoryItem";
import Button from "./components/UI/Button/Button";
import { weatherSample } from "./utils/sampleData";
import { getWeatherDetailsApi } from "./api";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import AutoCompleteLocation from "./components/Weather/AutoCompleteLocation";
import Modal from "./components/UI/Modal/Modal";

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

  const [weather, setWeather] = useState(null);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [history, setHistory] = useState(getLocalStorage());
  const [error, setError] = useState("");
  const [cityDetails, setCityDetails] = useState(null);
  const [resetAutoComplete, setResetAutoComplete] = useState(false);
  const [deleteHistoryModal, setDeleteHistoryModal] = useState(false);

  const handleClear = () => {
    setError("");
    setCityDetails(null);
    setResetAutoComplete(true);
    setWeather(null);
  };
  const handleDeleteHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
    setDeleteHistoryModal(false);
  };
  const handleSearchWeather = async (details) => {
    setResultsLoading(true);
    setError("");
    const [isSuccess, res] = await getWeatherDetailsApi(details);
    console.log(isSuccess, res);
    if (!isSuccess) {
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

      <div className="search-input-container">
        <AutoCompleteLocation
          setCityDetails={setCityDetails}
          resetAutoComplete={resetAutoComplete}
          onResetAutoComplete={() => setResetAutoComplete(false)}
          handleSearchWeather={handleSearchWeather}
          setError={setError}
        />
        <Button
          onClick={handleClear}
          icon="cross"
          disabled={cityDetails || weather ? false : true}
        />
      </div>
      {/* error */}
      {error && <div className="error-container">Error: {error}</div>}
      {/* searched details */}
      <div
        className={weather || resultsLoading ? "weather-display-container" : ""}
      >
        {resultsLoading ? (
          <LoadingSpinner />
        ) : (
          weather && <SearchResult details={weather} />
        )}
      </div>
      {/* Search History */}
      <div>
        <div className="search-history-header-container">
          <h1>Search History</h1>
          <Button
            onClick={() => setDeleteHistoryModal(true)}
            label="Delete History"
            disabled={!history.length}
          />
        </div>
        {history.length ? (
          history.map((details, index) => (
            <SearchHistoryItem
              details={details}
              num={index + 1}
              handleSearchWeather={handleSearchWeather}
              setHistory={setHistory}
              history={history}
              resultsLoading={resultsLoading}
            />
          ))
        ) : (
          <div className="no-records">
            <div className="no-records-text">No records</div>
            <div className="no-records-text">To get started, select a city</div>
          </div>
        )}
      </div>
      {deleteHistoryModal && (
        <Modal
          isOpen={deleteHistoryModal}
          text={"Are you sure you want to delete all history records?"}
          onClose={() => setDeleteHistoryModal(false)}
          onConfirm={handleDeleteHistory}
        />
      )}
    </div>
  );
}

export default App;
