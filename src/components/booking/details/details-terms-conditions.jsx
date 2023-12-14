import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import mapIcon from "../../../assets/images/web/SVG/icons-10.svg";
import Iti from "../../../assets/images/web/travel-concept-with-baggage 2.png";
import { decode } from "html-entities";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const DetailsTermsConditions = (props) => {
  const sccs = `
  .map-icon {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
    width:20px;
    z-index: 1;
  }
  .vLine:after {
  content:"";
  position: absolute;
  z-index: 0;
  top: 20px;
  bottom: 20px;
  left: 9.5%;
  border-left: 1px dashed #ED3237;
  height: auto; /* adjust height as needed */
}`;
  return (
    <div className="details-itinerary">
      <style>{sccs}</style>
      <h2>Itinerary</h2>
      <br />
      <div className="row">
        <div className="col-lg-10 d-flex">
          <p className="cls">
            {ReactHtmlParser(decode(props.termsConditions))}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailsTermsConditions;
