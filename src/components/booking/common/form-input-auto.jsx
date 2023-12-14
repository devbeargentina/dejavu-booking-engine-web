import React, { Component } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import HtmlParser from "../../../helpers/html-parser";
import data from "../../../states-and-districts.json";

let isSearching = false;
class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results:
        typeof this.props.selectedOptions === "undefined"
          ? []
          : this.props.selectedOptions,
      targetItem: "",
      isLoading: false,
      showLoader: false,
    };
    this.myRef = React.createRef();
  }

  onChange = (item) => {
    if (this.props.mode === "From-MultiDestination") {
      this.props.handleLocation(
        this.props.sequenceNumber,
        "fromlocation",
        typeof item === "string" ? item : item[0]
      );
    } else if (this.props.mode === "To-MultiDestination") {
      this.props.handleLocation(
        this.props.sequenceNumber,
        "tolocation",
        typeof item === "string" ? item : item[0]
      );
    } else this.props.handleLocation(typeof item === "string" ? item : item[0]);
  };

  handleInputChange(input, e) {
    var arr = [];
    if (this.props.mode === "From-MultiDestination") {
      this.props.handleLocation(this.props.sequenceNumber, "fromlocation", arr);
    } else if (this.props.mode === "To-MultiDestination") {
      this.props.handleLocation(this.props.sequenceNumber, "tolocation", arr);
    } else this.props.handleLocation(arr);
  }

  handleOnSearch = (query) => {
    if (!isSearching) {
      this.setState({ isLoading: true, results: [] });
    }
    isSearching = true;
    let reqURL =
      "api/v1/" +
      (this.props.businessName === "air" ? "air" : this.props.businessName) +
      "/search/" +
      (this.props.mode === "airline" ? "operator" : "location");

    let reqOBJ = {
      Request: query,
    };

    if (query.length > 0) {
      setTimeout(() => {
        // const filteredOptions = data.packageType.filter((option) =>
        //   option.value.toLowerCase().includes(query.toLowerCase())
        // );
        const filteredOptions = data.states.reduce((acc, state) => {
          const filteredDistricts = state.districts.filter((district) =>
            district.toLowerCase().includes(query.toLowerCase())
          );
          return [...acc, ...filteredDistricts];
        }, []);

        isSearching = false;
        this.setState({
          results: filteredOptions,
          isLoading: false,
        });
      }, 1000);
    } else {
      this.setState({ isLoading: false, results: [] });
    }
  };

  handleTransportationCompany = (query) => {
    let data = JSON.parse(
      localStorage.getItem(
        "transportation_companies_" + localStorage.getItem("lang")
      )
    );
    var enteredText = new RegExp(this.escapeRegExp(query), "i");
    data = data.filter((x) => enteredText.test(x.name));
    this.setState({
      results: data,
      isLoading: false,
    });
  };

  handleGroundServiceCompany = (query) => {
    let data = JSON.parse(
      localStorage.getItem(
        "groundservice_UOCompanies_" + localStorage.getItem("lang")
      )
    );
    var enteredText = new RegExp(this.escapeRegExp(query), "i");
    data = data.filter((x) => enteredText.test(x.name));
    this.setState({
      results: data,
      isLoading: false,
    });
  };

  escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  handleRefClick = () => {
    this.myRef.current.focus();
  };

  static getDerivedStateFromProps(props, state) {
    let props_selectedOptions = props.selectedOptions;
    let state_results = state.results;
    if (
      props.businessName === "air" &&
      props_selectedOptions &&
      Array.isArray(props_selectedOptions) &&
      props_selectedOptions.length > 0 &&
      state_results &&
      Array.isArray(state_results) &&
      state_results.length > 0 &&
      (props.mode === "From" || props.mode === "To") &&
      state_results.filter((x) => x.id === props_selectedOptions[0].id)
        .length === 0
    ) {
      return {
        results: props_selectedOptions,
        isStateUpdateFromThisComponent: false,
      };
    }
  }

  render() {
    let rest = {};
    if (
      this.props.businessName === "air" &&
      (this.props.mode === "From" || this.props.mode === "To")
    ) {
      rest = { selected: this.props.selectedOptions };
    }
    return (
      <React.Fragment>
        {/* <button onClick={() => this.myRef.current.clear()}>click to get focus</button> */}
        <AsyncTypeahead
          ref={this.myRef}
          //ref={this.props.inputRef}
          defaultInputValue={
            typeof this.state.results !== "undefined" &&
            this.state.results &&
            this.state.results.length > 0
              ? this.state.results[0][
                  this.props.businessName === "air" &&
                  this.props.mode !== "airline"
                    ? "address"
                    : "name"
                ] !== undefined
                ? this.state.results[0][
                    this.props.businessName === "air" &&
                    this.props.mode !== "airline"
                      ? "address"
                      : "name"
                  ]
                : ""
              : ""
          }
          {...rest}
          name="asyncTypeaheadControl"
          className={
            "form-control pl-0 no-input-focus-border border-0 p-0 w-75 "
          }
          style={{ border: "none" }}
          emptyLabel={"_noMatchesFound"}
          id="asyncTypeaheadControl"
          isLoading={this.state.isLoading}
          isInvalid={this.props.isValid === "valid" ? false : true}
          options={
            this.state.results && this.state.results.length === 0
              ? []
              : this.state.results
          }
          onChange={this.onChange}
          useCache={false}
          onInputChange={this.onChange}
          searchText={"LocationSearching"}
          labelKey={(option) =>
            `${option
              .split("&lt;")
              .join("<")
              .split("&gt;")
              .join(">")
              .split("&nbsp;")
              .join(" ")
              .split("&amp;")
              .join("&")}`
          }
          placeholder={"SearchPlaceholder"}
          onSearch={(query) => {
            this.handleOnSearch(query);
          }}
          renderMenuItemChildren={(option, props) => (
            <div>
              <span>
                <HtmlParser
                  text={option.replace(
                    new RegExp("(" + props.text + ")", "gi"),
                    '<span class="font-weight-bold">$1</span>'
                  )}
                />
              </span>
            </div>
          )}
        />
      </React.Fragment>
    );
  }
}

export default AutoComplete;
