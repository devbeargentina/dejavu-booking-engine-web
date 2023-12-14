import React from "react";
import * as DropDownList from "../../../helpers/dropdown-list";
import Form from "../common/form";
import generateUUID from "../common/generate-UUID";

class Passanger extends Form {
  constructor(props) {
    super(props);
    const user = this.props.user;
    this.state = {
      passanger: {
        bookingPaxInfoId: generateUUID("BPAX"),
        packageId: "string",
        bookingId: "string",
        name:
          user && user.firstName ? user.firstName + " " + user.lastName : "",
        gender: user && user.firstName ? user.gender : "",
        birthDate:
          user && user.firstName ? user.birthdate : "2023-03-04T03:11:49.256Z",
        phone: user && user.firstName ? user.phoneNumber : "",
        email: user && user.firstName ? user.email : "",
        address: "string",
        city: "string",
        state: "string",
        country: "string",
        idproofId: "string",
        idproofValue: "string",
      },
      errors: {},
    };
    this.props.listenerHandler(this.validationHandler);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.passengerData.length > 0 &&
      this.setState({ passanger: { ...this.props.passengerData[0] } });
  }

  validate = () => {
    const errors = {};
    const { passanger } = this.state;
    if (passanger.name.trim() === "") errors.name = "Full Name is required";
    // if (passanger.cityname.trim() === "")
    //   errors.cityname = "City Name is required";
    // if (passanger.address.trim() === "")
    //   errors.address = "Street address is required";
    // if (passanger.idproofdetails.trim() === "")
    //   errors.idproofdetails = "ID Proof Details is required";
    if (passanger.birthDate.trim() === "")
      errors.birthDate = "Birth Date is required";
    // if (passanger.passportnumber.trim() === "")
    //   errors.passportnumber = "Passport Number is required";
    // if (passanger.expirydate.trim() === "")
    //   errors.expirydate = "Expiry Date is required";
    // else if (new Date(passanger.expirydate.trim()) < new Date())
    //   errors.expirydate = "Expiry Date is not valid";
    if (passanger.phone.trim() === "")
      errors.phone = "Mobile Number is required";
    // Email Adress
    if (passanger.email.trim() === "") errors.email = "Email is required";
    else if (!passanger.email.includes("@") || !passanger.email.includes(".")) {
      errors.email = "Email is not valid";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  validationHandler = {
    validate: function () {
      const errors = this.validate();
      this.setState({ errors: errors || {} });
      if (errors) return;

      const { passanger } = this.state;
      this.props.handlePassangers(this.props.travellersCount, passanger);
    }.bind(this),
  };

  render() {
    console.log(this.props.passengerData);
    const { CountryList: countrylist, Gender: genderlist } = DropDownList;
    const user = this.props.user;
    console.log(this.props.user);
    console.log(this.state.passanger);
    return (
      <section className="container w-100 m-0  mt-2 p-0">
        <h3 className="p-0">Primary Traveller</h3>
        <div className="row">
          <div className="col-lg-9">
            {this.renderInput("name", "Full Name")}
          </div>
          <div className="col-lg-3">
            {this.renderSelect("gender", "Gender", genderlist)}
          </div>
          <div className="col-lg-3">
            {this.renderBirthDate("birthDate", "Birth Date")}
          </div>
          <div className="col-lg-4">
            {this.renderContactInput("phone", "Mobile Number")}
          </div>
          <div className="col-lg-5">{this.renderInput("email", "Email")}</div>

          <div className="col-lg-12">
            {this.renderTextarea("specialNote", "Special Note if Any")}
          </div>
          {/* <div className="col-lg-3">
            {this.renderInput("cityname", "City Name")}
          </div>
          <div className="col-lg-3">
            {this.renderSelect("stateid", "State", countrylist)}
          </div>
          <div className="col-lg-6">
            {this.renderInput("address", "Street Address")}
          </div>
          <div className="col-lg-3">
            {this.renderSelect("idprooftype", "ID Proof", countrylist)}
          </div>

          <div className="col-lg-9">
            {this.renderInput("idproofdetails", "ID Proof Details")}
          </div> */}

          <div className="col-lg-8"></div>

          <div className="col-lg-8"></div>
        </div>
      </section>
    );
  }
}

export default Passanger;
