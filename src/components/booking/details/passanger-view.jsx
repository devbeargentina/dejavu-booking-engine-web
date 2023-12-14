import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dssv from "../../../assets/images/web/SVG/icons-22.svg";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const PassangerView = (props) => {
  const navigate = useNavigate();
  const [paymentAmount, setPaymentAmount] = useState(props.partPayment);
  const [partPayment, setPartPayment] = useState(false);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const { id, destination, startdate, enddate, adult, child } = useParams();

  useEffect(() => {
    setIsAmountValid(
      paymentAmount >= props.partPayment && paymentAmount <= props.totalAmount
    );
  }, [paymentAmount]);

  const handleAmountChange = (event) => {
    //if (paymentAmount > props.partPayment && paymentAmount < props.totalAmount) {
    setPaymentAmount(event.target.value);
    //}
  };
  const togglePartPayment = () => {
    setPartPayment(!partPayment);
  };

  const redirectToCart = () => {
    navigate(`/paymentmetho/`);
  };

  const scss = `
.select-with-icon {
  background-image: url(${dssv});
  background-repeat: no-repeat;
  background-position: calc(3% - 0px) center;
  padding-left: 30px;
}`;
  return (
    <>
      <style>{scss}</style>
      <div className="col-lg-12 p-3 pl-4 pb-5 pr-4 border-radius shadow bg-white">
        <div className="col-lg-12 d-flex pl-0 pr-0 pt-3 d-flex align-items-end justify-content-between">
          <div className="p-0 ">
            <span className="w-100 d-block h-100 font-weight-bold">{`Add personal Detail`}</span>
          </div>
          <div className="d-flex p-0 list-unstyled">
            <small
              className="text-primary cursor-pointer"
              onClick={() => props.handleEdit()}
              role="button"
            >
              Edit
            </small>
          </div>
        </div>

        <div className="col-lg-12 p-0 mt-4 ">
          <div className="col-lg-12 p-0 ">
            <span className=" font-weight-bold">{`Praful Chauhan`}</span>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-lg-3 pull-left">
            <span className="w-100 d-block h-100 text-secondary">
              Contact Number
            </span>
          </div>
          <div className="col-lg-9 pull-left">
            <span className="w-100 d-block h-100 h-25">{`+91 9722813544`}</span>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-lg-3 pull-left">
            <span className="w-100 d-block h-100 text-secondary">Email Id</span>
          </div>
          <div className="col-lg-9 pull-left">
            <span className="w-100 d-block h-100 h-25">{`cprafulm@gmail.com`}</span>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-lg-3 pull-left">
            <span className="w-100 d-block h-100 text-secondary">Gender</span>
          </div>
          <div className="col-lg-9 pull-left">
            <span className="w-100 d-block h-100 h-25">{`Male`}</span>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-lg-3 pull-left">
            <span className="w-100 d-block h-100 text-secondary">
              Birth Date
            </span>
          </div>
          <div className="col-lg-9 pull-left">
            <span className="mr-4">{`13/08/1993`}</span>
            <span className="mr-2 text-secondary">Age</span>
            <span>{`29`}</span>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-lg-3 pull-left">
            <span className="w-100 d-block h-100 text-secondary">
              Special note if any
            </span>
          </div>
          <div className="col-lg-9 pull-left">
            <span>{`Special note if any`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassangerView;
