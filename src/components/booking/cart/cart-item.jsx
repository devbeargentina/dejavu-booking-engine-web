import React from "react";
import InclusionIcons from "../results/result-inclusions";
import Date from "../../../helpers/date";
import { useParams } from "react-router-dom";

const CartItem = ({
  slots,
  name,
  galleryImages,
  durationNights,
  totalAmount,
  dateInfo,
  ...rest
}) => {
  const { id, destination, startdate, enddate, adult, child } = useParams();
  const url =
    galleryImages?.filter((x) => x.isDefaultImage && x.fileExtension !== "pdf")
      .legnth > 0 &&
    galleryImages?.filter((x) => x.isDefaultImage && x.fileExtension !== "pdf")
      .fileURL;
  const price = totalAmount;

  return (
    <div className="book-cart">
      <div className="cart-grid-wrap">
        <div className="cart-grid">
          <div className="cart-grid-l">
            <div className="cart-grid-row">
              <div className="cart-grid-name">
                <svg x={"0px"} y={"0px"} viewBox={"0 0 512 512"}>
                  <g>
                    <g>
                      <g>
                        <path d="M416,384c-35.346,0-64,28.654-64,64c0,35.346,28.654,64,64,64c35.346,0,64-28.654,64-64C480,412.654,451.346,384,416,384     z M416,480c-17.673,0-32-14.327-32-32c0-17.673,14.327-32,32-32c17.673,0,32,14.327,32,32C448,465.673,433.673,480,416,480z" />
                        <path d="M192,384c-35.346,0-64,28.654-64,64c0,35.346,28.654,64,64,64c35.346,0,64-28.654,64-64C256,412.654,227.346,384,192,384     z M192,480c-17.673,0-32-14.327-32-32c0-17.673,14.327-32,32-32s32,14.327,32,32C224,465.673,209.673,480,192,480z" />
                        <path d="M192,352v-32h-48c-17.673,0-32-14.327-32-32V64c0-35.346-28.654-64-64-64H0v32h48c17.673,0,32,14.327,32,32v224     c0,35.346,28.654,64,64,64H192z" />
                        <rect x="288" y="320" width="224" height="32" />
                        <path d="M208,288h96v-32h-96c-8.837,0-16-7.163-16-16V112c0-8.837,7.163-16,16-16h224c8.837,0,16,7.163,16,16v128     c0,8.837-7.163,16-16,16h-32v32h32c26.51,0,48-21.49,48-48V112c0-26.51-21.49-48-48-48h-48V0H256v64h-48c-26.51,0-48,21.49-48,48     v128C160,266.51,181.49,288,208,288z M288,32h64v32h-64V32z" />
                        <rect x="224" y="128" width="32" height="96" />
                        <rect x="384" y="128" width="32" height="96" />
                        <rect x="224" y="320" width="32" height="32" />
                        <rect x="336" y="256" width="32" height="32" />
                      </g>
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
                <h2 title={name}>{name}</h2>
              </div>

              <div className="cart-grid-date">
                <div>
                  <Date date={startdate} /> - <Date date={enddate} />
                </div>
              </div>
            </div>
          </div>

          <div className="cart-grid-r">
            <div className="cart-grid-row">
              <div className="cart-grid-action">
                <h3>{totalAmount}</h3>
                <button style={{ display: "none" }}>
                  <i aria-hidden="true" className="fa fa-minus mr-1" />
                  Details
                </button>
                <button style={{ display: "none" }}>
                  <i className="fa fa-times mr-2" aria-hidden="true" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-item active">
        <figure>
          <img src={url} alt={name} />
        </figure>
        <div>
          <h2 title={name}>{name}</h2>
          <div className="cart-item-duration">
            <b>Duration :</b> {durationNights} Nights
          </div>
          <InclusionIcons slots={slots} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
