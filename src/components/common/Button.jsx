

function Button ({ label, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${disabled ? 'btn-disabled' : 'btn-active'}`}
    >
      {label}
    </button>
  );
}

export default Button;
