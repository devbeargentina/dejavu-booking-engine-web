import React from "react";

const Textarea = ({ name, label, error, ...rest }) => {
  return (
    <div className={"form-group " + name}>
      {label && label !== "" && <label htmlFor={name}>{label}</label>}
      <textarea
        {...rest}
        cols={60}
        rows={3}
        name={name}
        id={name}
        className={error ? "error-bdr rounded" : "rounded"}
      ></textarea>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default Textarea;
