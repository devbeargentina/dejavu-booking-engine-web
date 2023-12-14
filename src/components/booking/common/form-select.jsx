import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className={"form-group " + name}>
      {label !== "" && <label htmlFor={name}>{label}</label>}
      <select
        name={name}
        id={name}
        {...rest}
        className={error ? "error-bdr rounded" : "rounded"}
      >
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default Select;
