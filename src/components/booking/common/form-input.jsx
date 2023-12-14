import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className={"form-group " + name}>
      {label !== "" && <label htmlFor={name}>{label}</label>}
      <input
        {...rest}
        name={name}
        id={name}
        className={error ? "error-bdr rounded w-100" : "rounded w-100"}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default Input;
