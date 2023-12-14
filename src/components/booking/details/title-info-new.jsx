import React from "react";
import { Link } from "react-router-dom";
import Date from "../../../helpers/date";

const TitleInfoNew = (props) => {
  const { id, name, durationNights, rates, dateInfo, paxInfo } = props;
  const { price, oldPrice } = {
    price: {
      currencyCode: rates.find((key) => key.purpose === "10").currencyCode,
      amount: rates.find((key) => key.purpose === "10").displayAmount,
    },
    oldPrice: {
      currencyCode: rates.find((key) => key.purpose === "10").currencyCode,
      amount: rates.find((key) => key.purpose === "10").displayAmount,
    },
  };

  const travellers = paxInfo[0].item[0].quantity;

  return (
    <div className="details-name-new">
      <div className="container">
        <div className="details-name">
          <div>
            <h1>{name}</h1>

            <div className="details-date-info">
              <div>
                Duration : <span>{durationNights} Nights</span>
              </div>
              <div>
                Date : &nbsp;
                <span>
                  <Date date={dateInfo.startDate} />
                  &nbsp;-&nbsp;
                  <Date date={dateInfo.endDate} />
                </span>
              </div>
              <div>
                <span>{travellers} Traveler</span>
              </div>
              <button
                className="details-changedate-btn"
                onClick={props.handleModify}
              >
                Change Dates
              </button>
            </div>
          </div>

          <div>
            <article>
              <span>Starting From</span>
              <h3>
                {price.currencyCode} {price.amount}
              </h3>
              <span>
                <del style={{ display: "none" }}>
                  {oldPrice.currencyCode} {oldPrice.amount}
                </del>
              </span>
            </article>
            <Link className="top-book-btn" to={`/cart/${id}`}>
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleInfoNew;
