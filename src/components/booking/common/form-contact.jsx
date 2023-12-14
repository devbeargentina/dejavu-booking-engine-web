import React from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const Input = ({ name, label, error, ...rest }) => {
  const handlePhoneNumber = (status, value) => {
    console.log(status, value);
  };

  return (
    <div className={"form-group " + name}>
      {label !== "" && <label htmlFor={name}>{label}</label>}
      <input
        {...rest}
        name={name}
        id={name}
        className={error ? "error-bdr pl-5 rounded" : "pl-5 rounded"}
      />
      <IntlTelInput
        preferredCountries={["in"]}
        onSelectFlag={handlePhoneNumber}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default Input;
