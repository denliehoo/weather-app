import React, { useState } from "react";
import "./Button.css"; // Import your CSS file for styling

const Button = (props) => {
  const { label, onClick, loading } = props;
  return (
    <button
      className={`custom-button ${loading ? "loading" : ""}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

export default Button;
