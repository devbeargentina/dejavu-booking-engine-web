import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { decode } from "html-entities";
class OverView extends Component {
  constructor(props) {
    super(props);
    this.state = { showOverview: true };
  }

  render() {
    const hideShowOverview = this.state.showOverview
      ? "details-overview-content"
      : null;

    const hideShowBtn =
      this.props.overview.length > 460
        ? this.state.showOverview
          ? true
          : false
        : false;

    return (
      <div className="details-overview">
        <h2 className="text-primary mt-4">About {this.props.packageTitle}</h2>
        <div className={hideShowOverview}>
          {ReactHtmlParser(decode(this.props.overview))}
        </div>
        {hideShowBtn ? (
          <div className="d-flex col-lg-12 justify-content-center align-items-center">
            <button onClick={() => this.setState({ showOverview: false })}>
              Show more
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default OverView;
