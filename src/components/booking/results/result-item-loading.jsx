import React from "react";

const ResultItemLoading = () => {
  const loading = [...Array(10).keys()];
  return (
    <div id="BEHotel-GridDiv" className="search-results">
      <div className="results-listview">
        {loading.map(function (item, key) {
          return (
            <div className="results-bg-wrap results-bg-wrap-loading" key={key}>
              <article className="results-bg">
                <figure>
                  <div className="sk-wave">
                    <div className="sk-rect sk-rect1" />
                    <div className="sk-rect sk-rect2" />
                    <div className="sk-rect sk-rect3" />
                    <div className="sk-rect sk-rect4" />
                    <div className="sk-rect sk-rect5" />
                  </div>
                </figure>

                <div className="results-details">
                  <h2>&nbsp;</h2>

                  <h5>&nbsp;</h5>

                  <h4>
                    <span title="&nbsp;">&nbsp;</span>
                  </h4>
                </div>

                <div className="results-price">
                  <div className="results-price-wrap">
                    <div className="results-price-cnt ">
                      <h3
                        className="price results-price-new"
                        style={{ width: "80%" }}
                      >
                        &nbsp;
                      </h3>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultItemLoading;
