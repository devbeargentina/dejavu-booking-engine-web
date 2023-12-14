import React from "react";
// import Sticky from "react-sticky-el";

const PriceDetails = ({ name, rates, isVisaFee, isVisaFeeNotify }) => {
  const price =
    rates.find(key => key.purpose === "10").currencyCode +
    " " +
    rates.find(key => key.purpose === "10").displayAmount;

  const basePrice =
    rates.find(key => key.purpose === "1").currencyCode +
    " " +
    rates.find(key => key.purpose === "1").displayAmount;

  const visaFee = isVisaFee
    ? rates.find(key => key.purpose === "133").currencyCode +
      " " +
      rates.find(key => key.purpose === "133").amount
    : null;

  return (
    // <Sticky boundaryElement=".viewcart-right" hideOnBoundaryHit={false}>
      <div className="booking-sidebar-fare">
        <h2>
          <i className="material-icons" />
          Price Details
        </h2>

        <div>
          <h4>
            <svg x={"0px"} y={"0px"} viewBox={"0 0 512 512"}>
              <g>
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M416,384c-35.346,0-64,28.654-64,64c0,35.346,28.654,64,64,64c35.346,0,64-28.654,64-64C480,412.654,451.346,384,416,384     z M416,480c-17.673,0-32-14.327-32-32c0-17.673,14.327-32,32-32c17.673,0,32,14.327,32,32C448,465.673,433.673,480,416,480z" />{" "}
                    <path d="M192,384c-35.346,0-64,28.654-64,64c0,35.346,28.654,64,64,64c35.346,0,64-28.654,64-64C256,412.654,227.346,384,192,384     z M192,480c-17.673,0-32-14.327-32-32c0-17.673,14.327-32,32-32s32,14.327,32,32C224,465.673,209.673,480,192,480z" />{" "}
                    <path d="M192,352v-32h-48c-17.673,0-32-14.327-32-32V64c0-35.346-28.654-64-64-64H0v32h48c17.673,0,32,14.327,32,32v224     c0,35.346,28.654,64,64,64H192z" />{" "}
                    <rect x="288" y="320" width="224" height="32" />{" "}
                    <path d="M208,288h96v-32h-96c-8.837,0-16-7.163-16-16V112c0-8.837,7.163-16,16-16h224c8.837,0,16,7.163,16,16v128     c0,8.837-7.163,16-16,16h-32v32h32c26.51,0,48-21.49,48-48V112c0-26.51-21.49-48-48-48h-48V0H256v64h-48c-26.51,0-48,21.49-48,48     v128C160,266.51,181.49,288,208,288z M288,32h64v32h-64V32z" />{" "}
                    <rect x="224" y="128" width="32" height="96" />{" "}
                    <rect x="384" y="128" width="32" height="96" />{" "}
                    <rect x="224" y="320" width="32" height="32" />{" "}
                    <rect x="336" y="256" width="32" height="32" />{" "}
                  </g>{" "}
                </g>
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
            <span>{name}</span>
            <i
              style={{ display: "none" }}
              className="fa fa-angle-down section-arrow"
              aria-hidden="true"
            />
          </h4>

          <ul className="base-fare">
            <li>
              <span>Base Price :</span>
              <b>{basePrice}</b>
            </li>

            {visaFee ? (
              <li>
                <span>Visa Fee :</span>
                <b>{visaFee}</b>
              </li>
            ) : null}

            <li>
              <span>Total Price :</span>
              <b>{price}</b>
            </li>
          </ul>

          <ul className="total-fare">
            <li>
              <span>Grand Total</span>
              <b>{price}</b>
            </li>
          </ul>
        </div>
        {isVisaFeeNotify ? (
          <div className="toast-notification">
            Visa Fee added to Total Price
          </div>
        ) : null}
      </div>
    // </Sticky>
  );
};

export default PriceDetails;
