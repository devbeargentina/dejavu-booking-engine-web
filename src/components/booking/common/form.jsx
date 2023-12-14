import React, { Component } from "react";
import Input from "../common/form-input";
import Textarea from "../common/form-text-area";
import Select from "../common/form-select";
import BirhtDateInput from "../common/form-birthdate";
import ExpiryDateInput from "../common/form-expirydate";
import ContactInput from "../common/form-contact";
import moment from "moment";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passanger: {},
      errors: {},
    };
  }

  handleChange = ({ currentTarget: input }) => {
    const passanger = { ...this.state.passanger };
    passanger[input.name] = input.value;
    this.setState({ passanger });
  };

  handleDateChange = ({ currentTarget: input }, picker) => {
    const passanger = { ...this.state.passanger };
    passanger[input.firstChild.name] = picker.startDate.format("YYYY-MM-DD");
    this.setState({ passanger });
  };

  renderInput(name, label, type = "text") {
    const { passanger, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={passanger[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextarea(name, label, type = "text") {
    const { passanger, errors } = this.state;

    return (
      <Textarea
        type={type}
        name={name}
        value={passanger[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    const { passanger, errors } = this.state;

    return (
      <Select
        name={name}
        value={passanger[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderBirthDate(name, label, type = "text") {
    const { passanger, errors } = this.state;

    return (
      <BirhtDateInput
        type={type}
        name={name}
        value={
          passanger[name] !== ""
            ? moment(
                new Date(passanger[name]) <
                  new Date().setFullYear(new Date().getFullYear() - 18)
                  ? new Date(passanger[name])
                  : new Date().setFullYear(new Date().getFullYear() - 18)
              ).format("YYYY-MM-DD")
            : passanger[name]
        }
        label={label}
        onChange={this.handleDateChange}
        error={errors[name]}
      />
    );
  }

  renderExpiryDate(name, label, type = "text") {
    const { passanger, errors } = this.state;

    return (
      <ExpiryDateInput
        type={type}
        name={name}
        value={
          passanger[name] !== ""
            ? new Date(passanger[name]).setHours(0, 0, 0, 0) <
              new Date().setHours(0, 0, 0, 0)
              ? ""
              : moment(new Date(passanger[name])).format("YYYY-MM-DD")
            : ""
        }
        label={label}
        onChange={this.handleDateChange}
        error={errors[name]}
      />
    );
  }

  renderContactInput(name, label, type = "text") {
    const { passanger, errors } = this.state;

    return (
      <ContactInput
        type={type}
        name={name}
        value={passanger[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
