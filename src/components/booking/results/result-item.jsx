import React from "react";
import { Link } from "react-router-dom";
import SVGIcon from "../../../helpers/svg-icon";
import CompanyProf from "../../../assets/images/web/icons (3).png";
// import CompanyProf from "../../../assets/images/web/SVG/icons.svg";
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
          {results.map((x, key) => {
            const sdsdf = x?.destinations?.map(
              (destination) => destination.adultPrice
            );
            const minAdultPrice = Math.min(...sdsdf);
            return (
              <>
                <div key={key} className="col-lg-3 mb-4">
                  <div className="bg-white populer-deals shadow-sm mb-2">
                    <div>
                      {x?.packageMedia?.filter(
                        (xx) => xx.IsDefaultImage && xx.fileExtension !== "pdf"
                      ).length === 0 &&
                        x?.packageMedia
                          ?.filter(
                            (xx) =>
                              xx.isDefaultImage && xx.fileExtension !== "pdf"
                          )
                          .map((itemm, index) => {
                            return (
                              <img
                                ket={index}
                                src={itemm.fileURL || itemm.fileData}
                                alt="sfd"
                                className="img-fluid"
                              />
                            );
                          })}
                    </div>
                    <div className="populer-deals-content text-truncate">
                      <h5>
                        <Link
                          to={"/details/" + x?.id}
                          className=" text-primary"
                        >
                          {x?.packageTitle}
                        </Link>
                      </h5>
                      <div className="days font-weight-bold"></div>
                      <div className="price w-100 text-secondary li text-truncate-line-3 ">
                        <p>
                          <img
                            ket={key + "overview"}
                            src={CompanyProf}
                            alt="fdg"
                            className=" pr-2"
                          />
                          {x?.overview}
                        </p>
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
                        {x?.destinations[0].slots[0].duration > 1 &&
                          `${x?.destinations[0].slots[0].duration}D/${
                            x?.destinations[0].slots[0].duration - 1
                          }N`}
                      </div>
                      <div className="p-2 mb-2 text-primary ">
                        <SVGIcon
                          name="rupee"
                          className="ml-1 mr-1"
                          width="12"
                          height="12"
                          type="fill"
                        ></SVGIcon>
                        {minAdultPrice + " /-"}
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
                        to={"/details/" + x?.id}
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
