import React, { Component } from "react";
import FilterCheckBox from "./filter-checkbox";
import FilterRange from "./filter-range";
import FilterSelect from "./filter-select";
import FilterName from "./filter-name";
import FilterMap from "./filter-map";
import FilterCurrency from "./filter-currency";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.currentFilters = [];
  }

  filterResults = (filterName, filterValue) => {
    let filterArr = this.currentFilters;
    let filterNameArr = filterArr.find((o) => o.name === filterName);

    if (filterNameArr === undefined) {
      if (
        filterName === "currency" ||
        filterName === "name" ||
        filterName === "startingLocations"
      ) {
        filterArr.push({
          name: filterName,
          defaultValue: filterValue,
        });
      } else if (filterName === "price" || filterName === "duration") {
        filterArr.push({
          name: filterName,
          minValue: filterValue.minValue,
          maxValue: filterValue.maxValue,
        });
      } else {
        filterArr.push({
          name: filterName,
          values: [filterValue],
        });
      }
    } else {
      if (
        filterName === "currency" ||
        filterName === "name" ||
        filterName === "startingLocations"
      ) {
        filterNameArr.defaultValue = filterValue;
      } else if (filterName === "price" || filterName === "duration") {
        filterNameArr.minValue = filterValue.minValue;
        filterNameArr.maxValue = filterValue.maxValue;
      } else {
        if (filterNameArr.values.includes(filterValue)) {
          if (filterNameArr.values.length !== 1) {
            filterNameArr.values = filterNameArr.values.filter(
              (item) => item !== filterValue
            );
          } else {
            this.currentFilters = filterArr.filter(
              (item) => item !== filterNameArr
            );
          }
        } else {
          filterNameArr.values.push(filterValue);
        }
      }
    }

    this.props.handleFilter(this.currentFilters);
  };

  render() {
    console.log(JSON.stringify(this.props.availableFiltersIndex));

    return (
      <div className="docker">
        <section className="docker-item bg-white w-25 mt-3">
          <section className="docker-wrap mt-5">
            <h2 className="docker-title">
              {"Filter"}
              <i
                className="fa fa-angle-left"
                aria-hidden="true"
                onClick={this.props.handleHide}
              />
            </h2>
            <div className="filter-area">
              <FilterName
                name="Package Title"
                handleFilters={this.filterResults}
              />
              <FilterRange
                minValue="0"
                maxValue="100000"
                name="price"
                handleFilters={this.filterResults}
              />
              <FilterRange
                minValue="1"
                maxValue="8"
                name="duration"
                handleFilters={this.filterResults}
              />

              <FilterCheckBox
                name="rating"
                values={["1", "2", "3", "4", "5"]}
                handleFilters={this.filterResults}
              />

              {/* <FilterSelect
                name="startingLocations"
                defaultValue="Dubai"
                values={["Singapore", "Skopje", "Sofia"]}
                handleFilters={this.filterResults}
              /> */}
            </div>
          </section>
        </section>

        <div className="docker-overlay" onClick={this.props.handleHide} />
      </div>
    ); // : null;
  }
}

export default Filters;
