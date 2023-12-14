import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dssv from "../../../assets/images/web/SVG/icons-22.svg";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import FormatDuration from "../common/format-duration";
import PercentageCalculation from "../common/amount-calculate";
import { useSelector } from "react-redux";

const CartWidgets = (props) => {
  const navigate = useNavigate();

  const widgets = localStorage.getItem("cardWidgets")
    ? JSON.parse(localStorage.getItem("cardWidgets"))
    : {
        joinFrom: "",
        tripDate: "",
        duration: 0,
        available: 0,
        adults: 0,
        children: 0,
        adultPrice: 0,
        childPrice: 0,
        GST: 0,
        Discount: 0,
        PartPaymentType: "",
        PartPaymentValue: 0,
        additionalServices: [],
        subtotal: 0,
      };
  const [paymentAmount, setPaymentAmount] = useState(
    widgets.PartPaymentType === "Percentage"
      ? PercentageCalculation({
          amount:
            widgets.adults * widgets.adultPrice +
            widgets.children * widgets.childPrice +
            widgets.additionalServices.reduce(
              (acc, service) => acc + service.price,
              0
            ) +
            PercentageCalculation({
              amount:
                widgets.adults * widgets.adultPrice +
                widgets.children * widgets.childPrice +
                widgets.additionalServices.reduce(
                  (acc, service) => acc + service.price,
                  0
                ),
              percentage: widgets.GST,
            }),
          percentage: widgets.PartPaymentValue,
        })
      : widgets.PartPaymentValue
  );
  const [partPayment, setPartPayment] = useState(false);
  const [isAmountValid, setIsAmountValid] = useState(true);

  // const { id, destination, startdate, enddate, adult, child } = useParams();

  const { cartid } = useParams();
  const param = atob(cartid).split("/");
  const id = param[0];
  const destination = param[1];
  const dateStartEnd = param[2];
  const adults = param[3];
  const children = param[4];

  useEffect(() => {
    const ppAmount =
      widgets.PartPaymentType === "Percentage"
        ? PercentageCalculation({
            amount:
              widgets.adults * widgets.adultPrice +
              widgets.children * widgets.childPrice +
              widgets.additionalServices.reduce(
                (acc, service) => acc + service.price,
                0
              ) +
              PercentageCalculation({
                amount:
                  widgets.adults * widgets.adultPrice +
                  widgets.children * widgets.childPrice +
                  widgets.additionalServices.reduce(
                    (acc, service) => acc + service.price,
                    0
                  ),
                percentage: widgets.GST,
              }),
            percentage: widgets.PartPaymentValue,
          })
        : widgets.PartPaymentValue;
    debugger;
    const tAmount =
      widgets.adults * widgets.adultPrice +
      widgets.children * widgets.childPrice +
      widgets.additionalServices.reduce(
        (acc, service) => acc + service.price,
        0
      ) +
      PercentageCalculation({
        amount:
          widgets.adults * widgets.adultPrice +
          widgets.children * widgets.childPrice +
          widgets.additionalServices.reduce(
            (acc, service) => acc + service.price,
            0
          ),
        percentage: widgets.GST,
      });
    setIsAmountValid(paymentAmount >= ppAmount && paymentAmount <= tAmount);
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
    props.handlePayment();
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
      <div className="col-lg-12 p-3 pl-4 pr-4 border-radius shadow bg-white">
        <div className="col-lg-12 d-flex pl-0 pr-0 pt-3 d-flex align-items-end justify-content-between">
          <div className="p-0 ">
            <span className="w-100 d-block h-100 font-weight-bold">{`${props.packageTitle}`}</span>
          </div>
          <div className="d-flex p-0 list-unstyled">
            {/*             
          <span className="w-100 d-block h-100">{`${
              adults * props.adultPrice// + children * props.childPrice
            }/- `}<small>PP</small></span> */}
            <span className="w-100 d-block h-100">
              {`${widgets.adultPrice}/-`}
              <small className="text-secondary">pp</small>
            </span>
          </div>
        </div>

        <div className="col-lg-12 p-0 d-flex mt-3 align-items-center justify-content-between">
          <div className="p-0 ">
            <small className="w-100 d-block text-secondary">Tour starts</small>
            <span className="w-100 d-block h-25">{`${moment(
              widgets.tripDate
            ).format("DD/MM/YYYY")}`}</span>
            <small className="w-100 d-block h-25 text-secondary">
              {`Ex.${widgets.joinFrom}`}
            </small>
          </div>
          <div className="p-0 ">
            <small className="w-100 d-block h-25 text-secondary">
              <hr class="w-100 mb-2 map-line" />
              <FormatDuration numDays={widgets.duration} />
            </small>
          </div>
          <div className="p-0 te">
            <small className="w-100 d-block h-25 text-secondary">
              Tour Ends
            </small>
            <span className="w-100 d-block h-25">{`${moment(widgets.tripDate)
              .add(widgets.duration, "days")
              .format("DD/MM/YYYY")}`}</span>
            <small className="w-100 d-block h-25 text-secondary">
              {`Ex.${widgets.joinFrom}`}
            </small>
          </div>
        </div>

        <div className="col-lg-12 p-0 d-flex mt-3 align-items-center justify-content-between">
          <div className="p-0 ">
            <span className="mr-2 h-25 text-secondary">Trip Category</span>
            <small className="h-25">{props.category.join(" | ")}</small>
          </div>
        </div>
        <div className="col-lg-12 p-0 d-flex mt-3 align-items-center justify-content-between">
          <div className="p-0 ">
            <span className="mr-2 h-25 text-secondary">Trip Type</span>
            <small className="h-25">{props.packageType.join(" | ")}</small>
          </div>
        </div>
        <div className="col-lg-12 p-0 d-flex mt-3 align-items-center justify-content-between">
          <div className="p-0 ">
            <span className="mr-2 h-25 text-secondary">
              Number Of Traveller
            </span>
          </div>
        </div>
        <div className="col-lg-12 p-0 d-flex align-items-center justify-content-between">
          <div className="p-0 ">
            <div className="p-0 ">
              <small className="h-25">{`${widgets.adults} Adult + ${widgets.children} Child`}</small>
            </div>
            <div className="p-0 ">
              <small className="h-25">{`(${widgets.adults} * ${widgets.adultPrice}) + (${widgets.children} * ${widgets.childPrice})`}</small>
            </div>
          </div>
          <div className="p-0 ">
            <span className="w-100 d-block h-25">{`${
              widgets.adults * widgets.adultPrice +
              widgets.children * widgets.childPrice
            }/- `}</span>
          </div>
        </div>
        {widgets.additionalServices.reduce(
          (acc, service) => acc + service.price,
          0
        ) > 0 && (
          <div className="col-lg-12 p-0 d-flex mt-2 align-items-center justify-content-between">
            <div className="p-0 ">
              <div className="p-0 ">
                <small className="h-25">{`Additional Services`}</small>
              </div>
              <div className="p-0 ">
                <small className="h-25">{`(${widgets.additionalServices
                  .map((service) => service.price)
                  .join(" + ")})`}</small>
              </div>
            </div>
            <div className="p-0 ">
              <span className="w-100 d-block h-25">{`${widgets.additionalServices.reduce(
                (acc, service) => acc + service.price,
                0
              )}/- `}</span>
            </div>
          </div>
        )}
        <div className="col-lg-12 p-0 d-flex pt-3 mt-2 border-top justify-content-between">
          <div className="p-0 ">
            <span className="w-100 d-block h-100">Sub Total</span>
          </div>
          <div className="d-flex p-0 list-unstyled">
            <span className="w-100 d-block h-100">{`${
              widgets.adults * widgets.adultPrice +
              widgets.children * widgets.childPrice +
              widgets.additionalServices.reduce(
                (acc, service) => acc + service.price,
                0
              )
            }/- `}</span>
          </div>
        </div>
        <div className="col-lg-12 p-0 d-flex pt-3 mt-2 justify-content-between">
          <div className="p-0 ">
            <span className="w-100 d-block h-100">{`+${widgets.GST}% GST`}</span>
          </div>
          <div className="d-flex p-0 list-unstyled">
            <span className="w-100 d-block h-100">
              {`${PercentageCalculation({
                amount:
                  widgets.adults * widgets.adultPrice +
                  widgets.children * widgets.childPrice +
                  widgets.additionalServices.reduce(
                    (acc, service) => acc + service.price,
                    0
                  ),
                percentage: widgets.GST,
              })}/-`}
            </span>
          </div>
        </div>
        <div className="col-lg-12 p-0 d-flex pt-3 mt-2 border-top justify-content-between">
          <div className="p-0 ">
            <span className="w-100 d-block h-100">Total Amount</span>
          </div>
          <div className="d-flex p-0 list-unstyled">
            <span className="w-100 d-block h-100">{`${
              widgets.adults * widgets.adultPrice +
              widgets.children * widgets.childPrice +
              widgets.additionalServices.reduce(
                (acc, service) => acc + service.price,
                0
              ) +
              PercentageCalculation({
                amount:
                  widgets.adults * widgets.adultPrice +
                  widgets.children * widgets.childPrice +
                  widgets.additionalServices.reduce(
                    (acc, service) => acc + service.price,
                    0
                  ),
                percentage: widgets.GST,
              })
            }/-`}</span>
          </div>
        </div>
        <div className="col-lg-12 p-0 pt-3 mt-3 border-top ">
          <div className="p-0 text-right ">
            <span
              className="text-primary cursor-pointer"
              onClick={togglePartPayment}
              role="button"
            >
              Make part payent
            </span>
          </div>
          {partPayment && (
            <div className="p-0 w-100 text-right mt-2">
              <div class="form-group w-auto">
                <label htmlFor="amount">Amount:</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={paymentAmount}
                  onChange={handleAmountChange}
                  className={
                    isAmountValid
                      ? "form-control w-auto d-inline ml-2"
                      : "form-control w-auto d-inline ml-2 is-invalid"
                  }
                  min={PercentageCalculation({
                    amount:
                      widgets.PartPaymentType === "Percentage"
                        ? PercentageCalculation({
                            amount:
                              widgets.adults * widgets.adultPrice +
                              widgets.children * widgets.childPrice +
                              widgets.additionalServices.reduce(
                                (acc, service) => acc + service.price,
                                0
                              ) +
                              PercentageCalculation({
                                amount:
                                  widgets.adults * widgets.adultPrice +
                                  widgets.children * widgets.childPrice +
                                  widgets.additionalServices.reduce(
                                    (acc, service) => acc + service.price,
                                    0
                                  ),
                                percentage: widgets.GST,
                              }),
                            percentage: widgets.PartPaymentValue,
                          })
                        : widgets.PartPaymentValue,
                    percentage:
                      widgets.PartPaymentType === "Percentage"
                        ? widgets.PartPaymentValue
                        : 100,
                  })}
                  max={PercentageCalculation({
                    amount:
                      widgets.adults * widgets.adultPrice +
                      widgets.children * widgets.childPrice +
                      widgets.additionalServices.reduce(
                        (acc, service) => acc + service.price,
                        0
                      ) +
                      PercentageCalculation({
                        amount:
                          widgets.adults * widgets.adultPrice +
                          widgets.children * widgets.childPrice +
                          widgets.additionalServices.reduce(
                            (acc, service) => acc + service.price,
                            0
                          ),
                        percentage: widgets.GST,
                      }),
                    percentage: 100,
                  })}
                  required
                />
                {!isAmountValid && (
                  <div className="invalid-feedback">
                    Amount must be greater than or equal to{" "}
                    {widgets.PartPaymentType === "Percentage"
                      ? PercentageCalculation({
                          amount:
                            widgets.adults * widgets.adultPrice +
                            widgets.children * widgets.childPrice +
                            widgets.additionalServices.reduce(
                              (acc, service) => acc + service.price,
                              0
                            ) +
                            PercentageCalculation({
                              amount:
                                widgets.adults * widgets.adultPrice +
                                widgets.children * widgets.childPrice +
                                widgets.additionalServices.reduce(
                                  (acc, service) => acc + service.price,
                                  0
                                ),
                              percentage: widgets.GST,
                            }),
                          percentage: widgets.PartPaymentValue,
                        })
                      : widgets.PartPaymentValue}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-12 d-flex p-0 mt-4 justify-content-between">
          {isAmountValid && partPayment ? (
            <button
              onClick={() => redirectToCart()}
              className="btn btn-primary w-100"
            >
              Proceed to Book
            </button>
          ) : (
            <button className="btn btn-primary w-100">Proceed to Book</button>
          )}
        </div>
      </div>
    </>
  );
};

export default CartWidgets;
