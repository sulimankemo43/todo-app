function Button({ label, onClick, type = "button", variant = "default", ariaLabel }) {
  const className = `btn btn-${variant}`;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
}

export default Button;
