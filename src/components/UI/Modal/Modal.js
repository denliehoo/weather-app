import React, { useEffect } from "react";
import "./Modal.css";
import Button from "../Button/Button";

const Modal = (props) => {
  const { isOpen, text, onConfirm, onClose, buttonLoading } = props;
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          <p className="modal-text">{text}</p>
          <Button
            label="Confirm"
            onClick={onConfirm}
            fullWidth
            loading={buttonLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
