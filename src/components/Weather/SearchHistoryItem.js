import Button from "../UI/Button/Button";
import "./SearchHistoryItem.css";

const SearchHistoryItem = (props) => {
  const {
    details,
    num,
    handleSearchWeather,
    history,
    setHistory,
    resultsLoading,
  } = props;
  const { city, country, time } = details;

  const handleDelete = () => {
    const i = num - 1;
    const newHistory = [...history];
    newHistory.splice(i, 1);
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  return (
    <div className="container">
      <div className="location-time">
        <div className="location">
          {num}. {city}, {country}
        </div>
        <div className="time">{time}</div>
      </div>
      <div className="button-container">
        <div className="search-button">
          <Button
            onClick={() => handleSearchWeather(details)}
            icon="search"
            loading={resultsLoading}
          />
        </div>
        <div className="delete-button">
          <Button onClick={handleDelete} icon="delete" />
        </div>
      </div>
    </div>
  );
};

export default SearchHistoryItem;
