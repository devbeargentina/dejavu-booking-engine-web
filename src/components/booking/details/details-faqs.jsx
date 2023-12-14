import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import mapIcon from "../../../assets/images/web/SVG/icons-33.svg";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { decode } from "html-entities";

const DetailsFAQs = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="details-day-itinerary">
      <h2>FAQs</h2>
      <div id="accordion" className="position-relative ">
        {faqs.map((item, index) => {
          return (
            <div className="card  border rounded mb-3 " key={index}>
              <div
                id={`heading${index}`}
                className={`card-header bg-white ${
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
                <h3 className="mb-0 font-weight-bold">
                  <div className="row">
                    <div className="col-lg-12">
                      <img
                        src={mapIcon}
                        alt="map icon"
                        class="map-icon bg-white"
                      />
                      {`${item.question}`}
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
                  <div className="col-lg-12 d-flex ">
                    <p className="cls">
                      {ReactHtmlParser(decode(item.answer))}
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
export default DetailsFAQs;
