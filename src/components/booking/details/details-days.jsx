import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import mapIcon from "../../../assets/images/web/SVG/icons-10.svg";
import Iti from "../../../assets/images/web/somnath.jpg";
import { decode } from "html-entities";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const DayDetails = ({ itineraryDays }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
    <div className="details-day-itinerary">
      <style>{sccs}</style>
      <h2>Itinerary</h2>
      <div id="accordion" className="position-relative border rounded vLine ">
        {itineraryDays.map((item, index) => {
          return (
            <div className="card border-0 " key={index}>
              <div
                id={`heading${index}`}
                className={`card-header bg-white text-primary border-0 ${
                  activeIndex === index ? "" : "collapsed"
                }`}
                onClick={() => handleAccordionClick(index)}
                aria-expanded={activeIndex === index ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                <i
                  className={`fa mr-2 pull-right ${
                    activeIndex === index ? "fa-chevron-down" : "fa-chevron-up"
                  }`}
                ></i>
                <h3 className="mb-0 text-primary font-weight-bold">
                  <div className="row">
                    <div className="col-lg-1 p-0 pull-left">{`Days ${
                      index + 1
                    }`}</div>
                    <div className="col-lg-11 pl-5">
                      <img
                        src={mapIcon}
                        alt="map icon"
                        class="map-icon bg-white"
                      />
                      {`${item.itineraryTitle}`}
                    </div>
                  </div>
                </h3>
              </div>
              <div
                id={`collapse${index}`}
                className={`collapse ${activeIndex === index ? "show" : ""}`}
                aria-labelledby={`heading${index}`}
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="col-lg-11 d-flex pl-5 offset-lg-1">
                    {item.mediaContents && item.mediaContents.fileURL && (
                      <img
                        style={{ width: "275px", float: "left" }}
                        className="mr-3"
                        src={item.mediaContents.fileURL || Iti}
                        alt=""
                      />
                    )}
                    <p className="cls">
                      {ReactHtmlParser(decode(item.itineraryDetails))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DayDetails;
