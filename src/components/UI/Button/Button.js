import React from "react";
import "./Button.css";

const Button = (props) => {
  const renderIcon = () => {
    if (!icon) return null;

    let iconClass = "";
    if (icon === "delete") {
      iconClass = "fa-trash-alt";
    } else if (icon === "search") {
      iconClass = "fa-search";
    } else if (icon === "cross") {
      iconClass = "fa-xmark";
    }
    return <i className={`fas ${iconClass}`}></i>;
  };

  const { label, onClick, loading, icon, disabled, fullWidth } = props;
  return (
    <button
      className={`button ${loading ? "button--loading" : ""} ${
        fullWidth ? "button--full-width" : ""
      }`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : icon ? (
        renderIcon()
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
