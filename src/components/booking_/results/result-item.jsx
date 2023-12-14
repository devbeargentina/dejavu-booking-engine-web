import React from "react";
import { Link } from "react-router-dom";
import SVGIcon from "../../../helpers/svg-icon";
import StarRatting from "../common/star-rating";
import ResultInclusions from "../results/result-inclusions";

const ResultItem = (props) => {
  const results = props.data;
  const noItemFound = props.data.length > 0 ? true : false;
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
                      ).length == 0 &&
                        item?.galleryImages
                          ?.filter(
                            (x) => x.isDefaultImage && x.fileExtension !== "pdf"
                          )
                          .map((itemm, index) => {
                            return (
                              <img
                                src={itemm.fileURL || itemm.fileData}
                                alt="sfd"
                                className="img-fluid"
                              />
                            );
                          })}
                    </div>
                    <div className="populer-deals-content">
                      <h5>
                        <Link to={`/Details/${item.id}`}>
                          {item.packageTitle}
                        </Link>
                      </h5>
                      <div className="days font-weight-bold">
                        {item?.duration}
                      </div>
                      <div className="price w-100 text-secondary">
                        {item?.overview.length > 50
                          ? item?.overview.substring(0, 50) + "..."
                          : item?.overview}
                      </div>
                      <div className="price w-100">
                        Starting at
                        <SVGIcon
                          name="viewewei"
                          className="ml-1 mr-1"
                          width="12"
                          height="12"
                          type="fill"
                        ></SVGIcon>
                        <span
                          style={{
                            textDecoration: "line-through",
                            marginRight: ".6rem",
                          }}
                        >
                          {"INR 10000"}
                        </span>
                        <span>{"INR 80000"}</span>
                        /-* per person
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="p-2 mb-2">
                        <SVGIcon
                          name="rupee"
                          className="ml-1 mr-1"
                          width="12"
                          height="12"
                          type="fill"
                        ></SVGIcon>
                        Flex item 1
                      </div>
                      <div className="p-2 mb-2">
                        <SVGIcon
                          name="rupee"
                          className="ml-1 mr-1"
                          width="12"
                          height="12"
                          type="fill"
                        ></SVGIcon>
                        Flex item 2
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
                      <Link to={`/Details/${item.id}`} className="btn-booknow">
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
          <h2>No Results found for selected preferences.</h2>
        </div>
      )}
    </div>
  );
};

export default ResultItem;
