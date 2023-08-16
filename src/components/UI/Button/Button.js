import "./Button.css";

const Button = (props) => {
  const renderIcon = () => {
    if (!icon) return null;

    let iconClass = "";
    if (icon === "delete") {
      iconClass = "fa-trash-alt";
    } else if (icon === "search") {
      iconClass = "fa-search";
    }
    return <i className={`fas ${iconClass}`}></i>;
  };

  const { label, onClick, loading, icon } = props;
  return (
    <button
      className={`custom-button ${loading ? "loading" : ""}`}
      onClick={onClick}
      disabled={loading}
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
