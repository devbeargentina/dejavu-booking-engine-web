import React from "react";
import { Link } from "react-router-dom";
import SVGIcon from "../../../helpers/svg-icon";
import CompanyProf from "../../../assets/images/web/SVG/icons.svg";
import ItemDuration from "../../../assets/images/web/icons-107.png";
import HtmlParser from "../../../helpers/html-parser";
import StarRatting from "../common/star-rating";
import ResultInclusions from "../results/result-inclusions";
import { decode } from "html-entities";

const ResultItem = (props) => {
  const results = props.data;
  const noItemFound = props.data && props.data.length > 0 ? true : false;
  const currentView = "results-listview results-" + props.currentView;

  return (
    <div
      id="BEHotel-GridDiv"
      className="col-lg-12 search-results w-100 "
      style={{ maxWidth: "initial" }}
    >
      {noItemFound ? (
        <div className={currentView}>
          {results.map((item, key) => {
            return (
              <>
                <div key={key} className="col-lg-3 mb-4">
                  <div className="bg-white populer-deals shadow-sm mb-2">
                    <div>
                      {item?.galleryImages?.filter(
                        (x) => x.IsDefaultImage && x.fileExtension !== "pdf"
                      ).length === 0 &&
                        item?.galleryImages
                          ?.filter(
                            (x) => x.isDefaultImage && x.fileExtension !== "pdf"
                          )
                          .map((itemm, index) => {
                            return (
                              <img
                                ket={index}
                                src={
                                  itemm.fileURL ||
                                  itemm.fileData ||
                                  "https://www.dejavutours.in/images/kutch-desert-culture.jpeg"
                                }
                                alt="sfd"
                                className="img-fluid"
                              />
                            );
                          })}
                    </div>
                    <div className="populer-deals-content text-truncate">
                      <h5>
                        <Link
                          to={"/details/" + item?.id}
                          className=" text-primary"
                        >
                          {item?.packageTitle}
                        </Link>
                      </h5>
                      <div className="days font-weight-bold"></div>
                      <div className="price w-100 text-secondary text-truncate ">
                        {<HtmlParser text={decode(item?.overview)} />}
                      </div>
                      <div className="price w-100" style={{ display: "none" }}>
                        Starting at
                        <SVGIcon
                          name="viewewei"
                          className="ml-1 mr-1"
                          width="12"
                          height="12"
                          type="fill"
                        ></SVGIcon>
                        {item?.discountPrice > 0 && (
                          <span
                            style={{
                              textDecoration:
                                item?.totalAmount > 0 ? "line-through" : "none",
                              marginRight: ".6rem",
                            }}
                          >
                            {item?.discountPrice + " "}
                          </span>
                        )}
                        {item?.totalAmount > 0 && (
                          <span>{item?.totalAmount + ""}</span>
                        )}
                        /-* per person
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="p-2 mb-2 text-secondary">
                        <img
                          ket={key + "duration"}
                          src={ItemDuration}
                          alt="fdg"
                          className="mr-2"
                        />
                        {item?.duration.length > 1 && item?.duration}
                      </div>
                      <div className="p-2 mb-2 text-primary ">
                        <SVGIcon
                          name="rupee"
                          className="ml-1 mr-1"
                          width="12"
                          height="12"
                          type="fill"
                        ></SVGIcon>
                        {item?.totalAmount + " /-"}
                      </div>
                    </div>
                    <div
                      className="d-none"
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "0",
                        right: "0",
                        height: "26px",
                      }}
                    >
                      <Link
                        to={"/details/" + item?.id}
                        className="btn-booknow d-none"
                      >
                        BOOK NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="results-noItems">
          <h2>No Results found</h2>
          {/* <button onClick={() => props.handleFilter([])}>Reset Filters</button> */}
        </div>
      )}
    </div>
  );
};

export default ResultItem;
