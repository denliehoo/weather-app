import { useState } from "react";
import Button from "../UI/Button/Button";
import "./SearchHistoryItem.css";
import Modal from "../UI/Modal/Modal";
import { useWindowSize } from "../../hooks/useWindowSize";

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

  const [searchModal, setSearchModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const { width } = useWindowSize();

  const getLocationText = () => {
    const locationText = `${num}. ${city}, ${country}`;

    if (locationText.length <= 35) {
      return locationText;
    } else if (width > 660 && width < 840) {
      return locationText.substring(0, 32) + "...";
    } else {
      return locationText;
    }
  };

  const handleDelete = () => {
    const i = num - 1;
    const newHistory = [...history];
    newHistory.splice(i, 1);
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
    setDeleteModal(false);
  };
  const handleSearch = () => {
    window.scrollTo({
      top: 0,
    });
    handleSearchWeather(details);
    setSearchModal(false);
  };
  return (
    <div className="search-history-container">
      <div className="location-time-container">
        <div className="location-text">{getLocationText()}</div>
        <div>{time}</div>
      </div>
      <div className="history-item-buttons-container">
        <Button onClick={() => setSearchModal(true)} icon="search" />
        <Button onClick={() => setDeleteModal(true)} icon="delete" />
      </div>
      {searchModal && (
        <Modal
          isOpen={searchModal}
          text={`Search weather for ${city}, ${country}?`}
          onClose={() => setSearchModal(false)}
          onConfirm={handleSearch}
          buttonLoading={resultsLoading}
        />
      )}
      {deleteModal && (
        <Modal
          isOpen={deleteModal}
          text={`Delete record for ${num}. ${city}, ${country}?`}
          onClose={() => setDeleteModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
};

export default SearchHistoryItem;
