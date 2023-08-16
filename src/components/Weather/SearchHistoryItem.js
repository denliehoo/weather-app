import "./SearchHistoryItem.css";
const SearchHistoryItem = (props) => {
  const { details, num, handleSearchWeather, history, setHistory } = props;
  const { city, country, lat, lon, time } = details;

  const handleDelete = () => {
    const i = num - 1;
    const newHistory = [...history];
    newHistory.splice(i, 1);
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  return (
    <div className="container">
      <div className="left">
        {num}. {city}, {country}
      </div>
      <div className="right">
        {time}
        <button onClick={() => handleSearchWeather(true, details)}>
          SearchIcon
        </button>
        <button onClick={handleDelete}>DeleteIcon</button>
      </div>
    </div>
  );
};

export default SearchHistoryItem;
