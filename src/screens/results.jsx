import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  FetchPackages,
  FetchPackagesByFilter,
  setPagination,
} from "../redux/packageSliceNew";
import dataJSON from "../data.json";
import ResultsLoading from "./results-loading";
import TotalItems from "../components/booking/results/total-items";
import Filters from "../components/booking/filters/filters copy";
import ResultItem from "../components/booking/results/result-item";
import ResultItemLoading from "../components/booking/results/result-item-loading";
import ResultFilterView from "../components/booking/results/result-fliter";
import Sorting from "../components/booking/sorting/sorting";
import CMSSlider from "../components/home/modules/slider";
import SearchWidgets from "../components/home/modules/search-widgets";
import Breadcrumb from "../components/booking/common/breadcrumb";
import { Button, Drawer } from "antd";

const Results = (props) => {
  const { filterString } = useParams();

  const pagination = useSelector((state) => state.package.pagination);
  const filter = useSelector((state) => state.package.filter);
  const [isFilter, setIsFilter] = useState(true);
  const [jsonData, setJsonData] = useState(dataJSON);
  const { objArrayPackages, loading, ...rest } = useSelector((state) => ({
    ...state.package,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleApplyFilter = (filterValues) => {
    console.log(filterValues);
    // Call filter API with filterValues
  };

  useEffect(() => {
    // Split the filter string into an array of key/value pairs
    const filterArray = window.location.pathname
      .replace("/results/", "")
      .split("/");

    // Create an empty object to hold the filter key/value pairs
    const filterObj = {};

    // Loop through the array two elements at a time (key/value pairs)
    for (let i = 0; i < filterArray.length; i += 2) {
      const key = filterArray[i];
      const value = filterArray[i + 1];
      filterObj[key] = value;
    }

    if (objArrayPackages.length === 0) {
      dispatch(
        FetchPackages({
          pagination: pagination,
          filterObj,
        })
      );
    }
  }, [dispatch]);

  const [state, setState] = useState({
    results: [],
    isDeleteConfirmPopup: false,
    deleteItem: 0,
    isFilters: true,
    currentPage: 0,
    pageSize: 10,
    totalRecords: 0,
    hasNextPage: false,
    isBtnLoading: true,
  });

  const createQueryString = (obj) => {
    return Object.entries(obj)
      .filter(([, value]) => value !== undefined && value !== "" && value !== 0)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
  };

  const handleSorting = (data) => {
    const paginationNew = {
      currentPage: 1,
      pageSize: 8,
      totalRecords: pagination.totalRecords,
      hasNextPage: pagination.hasNextPage,
      isBtnLoading: pagination.isBtnLoading,
      page: pagination.page,
      results: pagination.results,
      pageNumber: pagination.pageNumber,
      orderBy: data.name,
      sortOrder: data.order,
    };

    // dispatch(setPagination(paginationNew));
    dispatch(FetchPackages({ pagination: paginationNew }));
  };
  const handleFilters = (data) => {
    dispatch(
      FetchPackages({
        pagination: pagination,
        filterQuery: data,
      })
    );
    // const queryString = filterQuery
    //   ? paginationQuery + "&filter=" + filterQuery
    //   : paginationQuery;
    // dispatch(FetchPackagesByFilter(queryString));
  };

  const handleChangeView = () => {
    setIsFilter(!isFilter);
  };
  const hideItemPopup = () => {
    setIsFilter(!isFilter);
    setState({
      isFilter: false,
      itemData: null,
    });
  };
  const { results, isLoading, currentView, results1 } = state;
  return (
    <React.Fragment>
      {/* <PageTitle {...{ pageName: "Dejavu Tour Packages" }} /> */}

      <CMSSlider />
      <SearchWidgets />
      <div className="be-results-header">
        <div className="container">
          <div className="row">
            <Breadcrumb items={["Home", "Packages", "Dubai"]} />
            {/* <TotalItems {...results} /> */}
            <div className="col-lg-12 d-flex justify-content-between align-items-center">
              <ResultFilterView handleFilterView={showDrawer} />

              <Drawer
                title="Filter"
                placement="right"
                onClose={onClose}
                onApplyFilter={handleFilters}
                visible={visible}
              >
                <Filters
                  {...rest}
                  onClose={onClose}
                  handleHide={hideItemPopup}
                  handleFilter={handleFilters}
                  onApplyFilter={handleFilters}
                />
              </Drawer>
              <Sorting {...rest.pagination} handleSorting={handleSorting} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {loading ? (
            // <ResultItemLoading {...results} />
            <ResultsLoading />
          ) : (
            <div className="col-lg-12 p-0 mt-3 mb-5 cp-home-deals">
              {/* <div id="BEHotel-SearchDiv col-lg-3 text-dark">
                <div className="filter-results">
                  <Filters {...results1} handleFilter={this.getResults} />
                </div>
              </div> */}

              <ResultItem
                {...results}
                data={rest.pagination.results}
                currentView={currentView}
              />
            </div>
          )}

          {rest.pagination?.hasNextPage && (
            <div className="col-lg-12 d-flex mt-2 mb-3 justify-content-center">
              <button
                className={`stretched-link ${loading ? "loading" : ""}`}
                onClick={() => {
                  if (!loading) {
                    const paginationNew = {
                      currentPage: pagination.currentPage + 1,
                      pageSize: pagination.pageSize,
                      totalRecords: pagination.totalRecords,
                      hasNextPage: pagination.hasNextPage,
                      isBtnLoading: pagination.isBtnLoading,
                      page: pagination.page,
                      results: pagination.results,
                      pageNumber: pagination.pageNumber,
                      orderBy: pagination.orderBy,
                      sortOrder: pagination.sortOrder,
                    };
                    //dispatch(setPagination(paginationNew));
                    dispatch(
                      FetchPackages({
                        pagination: paginationNew,
                        filterQuery: { ...rest.filter },
                      })
                    );
                    // dispatch(
                    //   FetchPackagesByFilter(createQueryString(paginationNew))
                    // );
                  }
                }}
              >
                {loading ? "Loading..." : "Load more"}
              </button>
            </div>
          )}
          {/* {isFilter ? (
            <Filters
              {...results1}
              handleHide={hideItemPopup}
              handleFilter={handleFilters}
            />
          ) : null} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Results;
