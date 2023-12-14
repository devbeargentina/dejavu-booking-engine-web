import React, { Component } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import * as Global from "../../../helpers/global";

class FilterRange extends Component {
  constructor(props) {
    super(props);
    this.state = { minValue: null, maxValue: null };
  }

  onSlide = value => {
    this.setState({
      minValue: Number(value[0]),
      maxValue: Number(value[1])
    });

    const range = {
      minValue: Number(value[0]),
      maxValue: Number(value[1])
    };

    this.props.handleFilters(this.props.name, range);
  };

  render() {
    const name = this.props.name;
    const minValue = Number(this.props.minValue);
    const maxValue = Number(this.props.maxValue);

    return (
      <div className="filter-section filter-price">
        <h2>{name}</h2>
        <ul>
          <li>
            <Nouislider
              start={[minValue, maxValue]}
              range={{ min: minValue, max: maxValue }}
              step={1}
              connect={true}
              onChange={this.onSlide}
            />
            <div className="filter-price-values">
              {name === "price" ? "Price : " : "Nights : "}
              <div>
                {this.state.minValue
                  ? name === "price"
                    ? Global.Currency + " " + this.state.minValue
                    : this.state.minValue
                  : name === "price"
                  ? Global.Currency + " " + this.props.minValue
                  : this.props.minValue}
                &nbsp;-&nbsp;
                {this.state.maxValue
                  ? name === "price"
                    ? Global.Currency + " " + this.state.maxValue
                    : this.state.maxValue
                  : name === "price"
                  ? Global.Currency + " " + this.props.maxValue
                  : this.props.maxValue}
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterRange;
