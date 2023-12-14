import React from "react";

const ResultsLoading = () => {
  const loading = [...Array(5).keys()];
  return (
    <div className="container results-loading">
      <div className="row border-bottom mb-4 no-gutters align-items-center">
        <div className="col-lg-2 pt-4 pb-3">
          <h3 className="w-75 m-0 p-0">&nbsp;</h3>
        </div>
        <div className="col-lg-10 text-right pt-3 pb-3">
          <span className="badge w-25 mr-2 d-inline-block">&nbsp;</span>
          <span className="badge w-25 mr-2 d-inline-block">&nbsp;</span>
          <span className="badge w-25 mr-2 d-inline-block">&nbsp;</span>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 d-none">
          <div className="filter-area border shadow-sm p-3">
            <div className="row">
              {loading.map((item, key) => {
                return (
                  <div key={key} className="col-lg-12 col-sm-6">
                    <div className="border-bottom mb-3">
                      <h3>&nbsp;</h3>
                      <ul className="list-unstyled">
                        <li>
                          <div>
                            <h3 className="w-50">&nbsp;</h3>
                            <h3 className="w-75">&nbsp;</h3>
                            <h3 className="w-50">&nbsp;</h3>
                            <h3 className="w-50">&nbsp;</h3>
                            <h3 className="w-50">&nbsp;</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="search-results">
            <div className="row">
              {loading.map((item, key) => {
                return (
                  <div key={key} className="col-lg-3 result-item border-radius">
                    <div className="d-flexs border shadow-sm mb-3 border-radius">
                      <div className="col-lg-12 p-0 d-flex  border-top-left-radius  border-top-right-radius align-items-center justify-content-center results-loading-img">
                        <div
                          className="spinner-border-sm spinner-border"
                          role="status"
                        ></div>
                      </div>
                      <div className="col-lg-12 d-inline-block p-3">
                        <h2>&nbsp;</h2>
                        <h2 className="w-50">&nbsp;</h2>
                        <div className="result-amenities">
                          <span className="badge w-25 mr-2">&nbsp;</span>
                          <span className="badge w-25 mr-2">&nbsp;</span>
                          <span className="badge w-25 mr-2">&nbsp;</span>
                          <span className="badge w-25 mr-2">&nbsp;</span>
                          <span className="badge w-25 mr-2">&nbsp;</span>
                          <span className="badge w-25 mr-2">&nbsp;</span>
                          <span className="badge w-25 mr-2">&nbsp;</span>
                          <span className="badge w-25 mr-2">&nbsp;</span>
                        </div>
                      </div>
                      <div className="col-lg-12 p-3 d-inline-block border-left bg-light">
                        <div className="col-lg-6 pull-left">
                          {" "}
                          <h3 className="w-100 d-inline-block">&nbsp;</h3>
                        </div>
                        <div className="col-lg-6 pull-left">
                          {" "}
                          <h3 className="w-100 d-inline-block">&nbsp;</h3>
                        </div>
                        {/* <h3 className="small w-50 d-inline-block">&nbsp;</h3>
                        <h3 className="btn btn-primary mt-2 w-75" to={`/`}>
                          &nbsp;
                        </h3> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsLoading;
