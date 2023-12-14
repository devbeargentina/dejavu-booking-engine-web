import React, { useEffect, useState } from "react";
import "swiper/css/swiper.css";
import { useNavigate } from "react-router-dom";
import SearchDestination from "../../../assets/images/web/Filter/destination.png";
import SearchFilter from "../../../assets/images/web/Filter/your-trip.png";
import SearchCatagory from "../../../assets/images/web/Filter/category.png";
import IconSearch from "../../../assets/images/web/Filter/search.png";
import AutoSuggest from "../../booking/common/form-input-auto";
import AutoComplete from "../../booking/common/form-input-auto";
// import "antd/dist/antd.css";
import { AutoComplete as AntAutoComplete } from "antd";
import data from "../../../data.json";
import useAntAutoComplete from "../../common/hooks/useAntAutoComplete";
import { AutoComplete as AntA } from "antd";
import { Select, Space } from "antd";
import { Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchPackageBestSeasons,
  FetchPackageCategories,
  FetchPackageDestinations,
  FetchPackageTypes,
} from "../../../redux/packageSliceNew";

const { Option } = Select;

const PackageCategory = [
  { value: "", name: "Filter Your Trip" },
  { value: "Tour category", name: "Tour category" },
  { value: "Duration", name: "Duration" },
  { value: "Season", name: "Season" },
  { value: "Tour type", name: "Tour type" },
];

const packageTypeList = [
  {
    key: "Duration",
    types: [
      { name: "Select Type", value: "" },
      { name: "1 days", value: "1 days" },
      { name: "2-3", value: "2-3 days" },
      { name: "4-7", value: "4 to 7 days" },
      { name: "7-10", value: "7 to 10 days" },
    ],
  },
  {
    key: "Season",
    types: [
      { name: "Select Type", value: "" },
      { name: "Winter", value: "Winter" },
      { name: "Summeer", value: "Summeer" },
      { name: "Monsoon", value: "Monsoon" },
    ],
  },
  {
    key: "Tour type",
    types: [
      { name: "Select Type", value: "" },
      { name: "Trekking", value: "Trekking" },
      { name: "Adventure", value: "Adventure" },
      { name: "Sight seeing", value: "Sight seeing" },
    ],
  },
];

const trackStyle = { backgroundColor: "red", height: 5 };
const railStyle = { backgroundColor: "gray", height: 5 };
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SearchWidgets = () => {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  const [fromLocationIsValid, setFromLocationIsValid] = useState("valid");
  const [fromLocation, setFromLocation] = useState("");

  const handleSearch = (value) => {
    let res = [];
    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map((domain) => ({
        value,
        label: `${value}@${domain}`,
      }));
    }
    setOptions(res);
  };
  const setFromLocationSet = (fromLocation) => {
    if (fromLocation === undefined) {
      setFromLocation("");
      setFromLocationIsValid("invalid");
    }
    if (fromLocation) {
      setFromLocation(fromLocation);
      setFromLocationIsValid("valid");
    }
  };

  const dispatch = useDispatch();

  const { loading, destinations, categories, types, bestSeasons } = useSelector(
    (state) => state.package
  );

  useEffect(() => {
    if (!destinations || destinations.length === 0) {
      dispatch(FetchPackageDestinations());
    }
    if (!categories || categories.length === 0) {
      dispatch(FetchPackageCategories());
    }
    if (!types || types.length === 0) {
      dispatch(FetchPackageTypes());
    }
    if (!bestSeasons || bestSeasons.length === 0) {
      dispatch(FetchPackageBestSeasons());
    }
  }, [dispatch]);
  useEffect(() => {
    const fetchData = async () => {
      // Fetch the JSON data from an API endpoint or import it from a local file
      // const response = await fetch("/path/to/cities.json");
      // const data = await response.json();

      // Transform the data to the format expected by the AutoComplete component
      const transformedData = data.countries.flatMap((country) =>
        country.states.flatMap((state) => {
          if (state.name === "Gujarat") {
            return state.cities.map((city) => ({
              value: city.name,
              //label: `${city.name}, ${state.name}, ${country.name}`,
            }));
          } else {
            return [];
          }
        })
      );
      console.log(transformedData);
      setOptions(transformedData);
    };

    fetchData();
  }, []);
  const optionsaa = [
    { value: "Burns Bay Road" },
    { value: "Downing Street" },
    { value: "Wall Street" },
  ];

  const handleCategoryChange = (value) => {
    setCategory(value);
    setType("");
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const categoryOptions = PackageCategory.map((cat) => (
    <Option key={cat.value} value={cat.value}>
      {cat.name}
    </Option>
  ));

  const typeOptions =
    category === "Duration" ? (
      packageTypeList
        .find((p) => p.key.toString() === category)
        ?.types.map((t) => (
          <Option key={t.value} value={t.value}>
            {t.name}
          </Option>
        ))
    ) : category === "Season" ? (
      bestSeasons.map((t) => (
        <Option key={t} value={t}>
          {t}
        </Option>
      ))
    ) : category === "Tour type" ? (
      types.map((t) => (
        <Option key={t} value={t}>
          {t}
        </Option>
      ))
    ) : category === "Tour category" ? (
      categories.map((t) => (
        <Option key={t} value={t}>
          {t}
        </Option>
      ))
    ) : (
      <Option>Filter Your Trip</Option>
    );

  const [antAutoComplete, inputValue, setInputValue] = useAntAutoComplete({
    options: destinations,
    placeholder: "Filter Your Trip",
    onSelect: (value) => console.log("Selected:", value),
    onSearch: (value) => console.log("Searched for:", value),
    notFoundContent: "No match found",
    classname:
      "Search-W ant-auto form-control pl-4 no-input-focus-border pt-1 pb-1 ",
  });
  const sdd = `input:focus {
  outline: none;
}
.search-widgets-container {
  border: none;
}

.search-widgets-container .ant-select, 
.search-widgets-container .ant-select-focused, 
.search-widgets-container .ant-select-open, 
.search-widgets-container .ant-select:hover, 
.search-widgets-container .ant-select:not(.ant-select-disabled):active {
  border: none;
}

.search-widgets-container .ant-select:not(.ant-select-customize-input) .ant-select-selector {
  border: none !important;
}

.search-widgets-container .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item {
  border: none !important;
}

.search-widgets-container .ant-input,
.search-widgets-container .ant-input-affix-wrapper {
  border: none;
}

.search-widgets-container .ant-input-affix-wrapper-focused,
.search-widgets-container .ant-input:focus {
  border: none !important;
  box-shadow: none !important;
}
`;
  return (
    <React.Fragment>
      <style>{sdd}</style>
      <div className="cp-home-widgets">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pb-0 pt-0">
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="text-center shadow p-1 pffl-4 pffr-4 mb-5 bg-white"
                  style={{
                    position: "absolute",
                    top: "-20px",
                    borderRadius: "30px",
                    zIndex: 100,
                  }}
                >
                  <div className="d-flex justify-content-center our-services-all-items">
                    <div className="our-services-item">
                      <div className="our-services-icon position-relative">
                        <img
                          src={SearchDestination}
                          alt=""
                          style={{
                            position: "absolute",
                            top: "5px",
                            left: "5px",
                            color: "fff",
                            zIndex: 2,
                          }}
                        />
                        {/* <input
                          name="fsdf"
                          id="fsdf"
                          className={"form-control pl-5 no-input-focus-border "}
                          style={{ border: "none" }}
                          placeholder="Search Destination Here"
                        /> */}
                        {/* <Slider
                          defaultValue={30}
                          trackStyle={trackStyle}
                          railStyle={railStyle}
                        /> */}
                        {antAutoComplete}
                        {/* <AntA
                          className={
                            "ant-auto form-control pl-5 no-input-focus-border "
                          }
                          style={{
                            width: 200,
                          }}
                          onSearch={handleSearch}
                          placeholder="input here"
                          options={options}
                        /> */}

                        {/* <AutoComplete
                          isValid={fromLocationIsValid}
                          businessName={"air"}
                          handleLocation={setFromLocation}
                          mode="From"
                          selectedOptions={
                            fromLocation && fromLocation.id
                              ? [fromLocation]
                              : []
                          }
                        /> */}
                      </div>
                    </div>
                    <div className="our-services-item">
                      <div className="our-services-icon position-relative">
                        <img
                          src={SearchFilter}
                          alt=""
                          style={{
                            paddingLeft: "10px",
                            borderLeft: "2px solid gray",
                            position: "absolute",
                            top: "5px",
                            left: "5px",
                            color: "fff",
                            zIndex: 1,
                          }}
                        />
                        {/* <input
                          name="fsdf"
                          id="fsdf"
                          className={"form-control  pl-5 no-input-focus-border"}
                          style={{ border: "none" }}
                          placeholder="Filter Your Trip"
                        /> */}
                        {/* <Select
                          className={
                            "form-control border-0 pl-5 no-input-focus-border "
                          }
                          defaultValue="lucy"
                          allowClear
                          style={{ width: "250px" }}
                          options={[
                            {
                              value: "Filter Your Trip",
                              label: "Filter Your Trip",
                            },
                            {
                              value: "lucy",
                              label: "Lucy",
                            },
                          ]}
                        /> */}
                        <Select
                          className={
                            "form-control border-0 pl-5 no-input-focus-border "
                          }
                          allowClear
                          placeholder="Select category"
                          value={category}
                          onChange={handleCategoryChange}
                          style={{ width: 250 }}
                        >
                          {categoryOptions}
                        </Select>
                      </div>
                    </div>
                    <div className="our-services-item">
                      <div className="our-services-icon position-relative">
                        <img
                          src={SearchCatagory}
                          alt=""
                          style={{
                            paddingLeft: "10px",
                            borderLeft: "2px solid gray",
                            position: "absolute",
                            top: "5px",
                            left: "5px",
                            color: "fff",
                            zIndex: 1,
                          }}
                        />
                        {/* <input
                          name="fsdf"
                          id="fsdf"
                          className={"form-control pl-5 no-input-focus-border"}
                          style={{ border: "none" }}
                          placeholder="Add Category"
                        /> */}
                        <Select
                          className={
                            "form-control border-0 pl-5 no-input-focus-border "
                          }
                          allowClear
                          placeholder="Select type"
                          value={type}
                          onChange={handleTypeChange}
                          style={{ width: 250 }}
                          // disabled={!category}
                        >
                          {typeOptions}
                        </Select>
                      </div>
                    </div>
                    <div className="our-services-item">
                      <button
                        className="btn btn-sm form-control pt-0"
                        onClick={() => {
                          navigate(`/results`);
                        }}
                      >
                        <img src={IconSearch} alt="searchIcon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchWidgets;
