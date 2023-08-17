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

  const { label, onClick, loading, icon, disabled } = props;
  return (
    <button
      className={`custom-button ${loading ? "loading" : ""}`}
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
