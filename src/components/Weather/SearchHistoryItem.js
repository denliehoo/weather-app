import { useState } from "react";
import Button from "../UI/Button/Button";
import "./SearchHistoryItem.css";
import Modal from "../UI/Modal/Modal";

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

  const [modalText, setModalText] = useState("");
  const [modalConfirmFunction, setModalConfirmFunction] = useState(null);

  const [searchModal, setSearchModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

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
    <div className="container">
      <div className="location-time">
        <div>
          {num}. {city}, {country}
        </div>
        <div>{time}</div>
      </div>
      <div className="button-container">
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
