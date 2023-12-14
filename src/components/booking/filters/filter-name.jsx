import React, { Component } from "react";

class FilterName extends Component {
  constructor(props) {
    super(props);
    this.state = { defaultValue: "" };
  }

  render() {
    return (
      <div className="filter-section filter-name">
        <h2>{this.props.name}</h2>

        <ul>
          <li>
            <input
              placeholder="Type Here"
              type="text"
              value={this.state.defaultValue}
              onChange={(e) => this.setState({ defaultValue: e.target.value })}
            />
            <button
              className="gobtn material-icons"
              type="button"
              onClick={() =>
                this.props.handleFilters(
                  this.props.name,
                  this.state.defaultValue
                )
              }
            >
              <i className="fa fa-search text-white" />
            </button>
            {this.state.defaultValue !== "" ? (
              <button
                className="clearbtn material-icons"
                onClick={() => {
                  this.setState({ defaultValue: "" });
                  this.props.handleFilters(this.props.name, "");
                }}
              >
                <i className="fa fa-times" />
              </button>
            ) : null}
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterName;
