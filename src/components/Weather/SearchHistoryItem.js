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
  const handleSearch = () => {
    window.scrollTo({
      top: 0,
    });
    handleSearchWeather(details);
  };

  return (
    <div className="container">
      <div className="location-time">
        <div>
          {num}. {city}, {country}
        </div>
        <div>{time}</div>
      </div>
      <div className="button-container">
        <Button onClick={handleSearch} icon="search" loading={resultsLoading} />
        <Button onClick={handleDelete} icon="delete" />
      </div>
    </div>
  );
};

export default SearchHistoryItem;
