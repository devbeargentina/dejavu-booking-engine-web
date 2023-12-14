import React from "react";
import DateR from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";

const BirthDateInput = ({ name, label, error, ...rest }) => {
  return (
    <div className={"form-group " + name}>
      {label !== "" && <label htmlFor={name}>{label}</label>}
      <DateR
        id={name}
        startDate={
          rest.value !== ""
            ? moment(new Date(rest.value)).format("DD/MM/YYYY")
            : moment(new Date()).format("DD/MM/YYYY")
        }
        maxDate={moment(
          new Date().setFullYear(new Date().getFullYear() - 18)
        ).format("DD/MM/YYYY")}
        autoApply={true}
        autoUpdateInput={false}
        locale={{ format: "DD/MM/YYYY" }}
        singleDatePicker={true}
        showDropdowns={true}
        onApply={rest.onChange}
      >
        <input
          {...rest}
          value={
            rest.value !== ""
              ? moment(new Date(rest.value)).format("DD/MM/YYYY")
              : ""
          }
          name={name}
          id={name}
          className={error ? "error-bdr rounded" : "rounded"}
          readOnly
        />
        <i className="form-date fa fa-calendar" aria-hidden="true" />
      </DateR>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default BirthDateInput;
