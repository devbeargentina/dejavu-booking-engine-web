import React, { Component } from "react";

class Loading extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="page-header-title-bg page-header-title-be">
          <div className="container">
            <div>
              <h1>&nbsp;</h1>
            </div>

            <ul>
              <li>
                <a href="http://www.tripshop.com">Home</a>
              </li>
              <li>&nbsp;</li>
              <li className="active">&nbsp;</li>
            </ul>
          </div>
        </div>
        <div className="details-page-loading">
          <div className="sk-wave">
            <div className="sk-rect sk-rect1" />
            <div className="sk-rect sk-rect2" />
            <div className="sk-rect sk-rect3" />
            <div className="sk-rect sk-rect4" />
            <div className="sk-rect sk-rect5" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Loading;
