import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const generateUUID = () => {
  let dt = new Date().getTime();
  let uuid = "xxxxxxx7xxxx7xxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

export const FetchPackages = createAsyncThunk(
  "package/FetchPackages",
  async ({ pagination, filterQuery }, { rejectWithValue }) => {
    try {
      //const response = await API.get(`api/Package/Browse?Page=1&Results=10&PageNumber=1&PageSize=10&OrderBy=packageTitle&SortOrder=asc`);
      const qs = require("qs");
      const params = {
        Page: pagination.currentPage,
        Results: pagination.pageSize,
        ...(pagination.orderBy && { OrderBy: pagination.orderBy }),
        ...(pagination.sortOrder && { ShortOrder: pagination.sortOrder }),
        ...(filterQuery &&
          filterQuery.PackageTitle && {
            PackageTitle: filterQuery.PackageTitle,
          }),
        ...(filterQuery &&
          filterQuery.Category.length && {
            Category: filterQuery.Category,
          }),
        ...(filterQuery &&
          filterQuery.PackageType.length && {
            PackageType: filterQuery.PackageType,
          }),
        ...(filterQuery &&
          filterQuery.BestSeasion.length && {
            BestSeasion: filterQuery.BestSeasion,
          }),
        ...(filterQuery &&
          filterQuery.CountryName && {
            CountryName: filterQuery.CountryName,
          }),
        ...(filterQuery &&
          filterQuery.StateName && { StateName: filterQuery.StateName }),
        ...(filterQuery &&
          filterQuery.CityName && { CityName: filterQuery.CityName }),
        ...(filterQuery &&
          filterQuery.DestinationName && {
            DestinationName: filterQuery.DestinationName,
          }),
        ...(filterQuery &&
          filterQuery.Duration && {
            minDuration: filterQuery.Duration[0],
            maxDuration: filterQuery.Duration[1],
          }),
        ...(filterQuery &&
          filterQuery.minDuration && {
            minDuration: filterQuery.minDuration,
          }),
        ...(filterQuery &&
          filterQuery.Duration && {
            maxDuration: filterQuery.maxDuration,
          }),
        ...(filterQuery &&
          filterQuery.startSlots && {
            startSlots: filterQuery.startSlots,
          }),
        ...(filterQuery &&
          filterQuery.endSlots && { endSlots: filterQuery.endSlots }),
        ...(filterQuery &&
          filterQuery.Price && {
            minAdultPrice: filterQuery.Price[0],
            maxAdultPrice: filterQuery.Price[1],
          }),
        ...(filterQuery &&
          filterQuery.minAdultPrice && {
            minAdultPrice: filterQuery.minAdultPrice,
          }),
        ...(filterQuery &&
          filterQuery.maxAdultPrice && {
            maxAdultPrice: filterQuery.maxAdultPrice,
          }),
        // ...filterQuery,
        //filter: filterQuery && decodeURIComponent(filterQuery),
      };

      const queryString = qs.stringify(params, { indices: false });

      const response = await API.get(
        "api/Packagesnew/resultPackage?" + queryString //"api/Package/Browse",
        // {
        //   params: {
        //     Page: pagination.currentPage,
        //     Results: pagination.pageSize,
        //     ...(pagination.orderBy && { OrderBy: pagination.orderBy }),
        //     ...(pagination.sortOrder && { ShortOrder: pagination.sortOrder }),
        //     ...(filterQuery &&
        //       filterQuery.PackageTitle && {
        //         PackageTitle: filterQuery.PackageTitle,
        //       }),
        //     ...(filterQuery &&
        //       filterQuery.Category.length && {
        //         Category: filterQuery.Category,
        //       }),
        //     ...(filterQuery &&
        //       filterQuery.PackageType.length && {
        //         PackageType: filterQuery.PackageType,
        //       }),
        //     ...(filterQuery &&
        //       filterQuery.BestSeasion.length && {
        //         BestSeasion: filterQuery.BestSeasion,
        //       }),
        //     ...(filterQuery &&
        //       filterQuery.CountryName && {
        //         CountryName: filterQuery.CountryName,
        //       }),
        //     ...(filterQuery &&
        //       filterQuery.StateName && { StateName: filterQuery.StateName }),
        //     ...(filterQuery &&
        //       filterQuery.CityName && { CityName: filterQuery.CityName }),
        //     ...(filterQuery &&
        //       filterQuery.DestinationName && {
        //         DestinationName: filterQuery.DestinationName,
        //       }),
        //     ...(filterQuery &&
        //       filterQuery.minDuration && {
        //         minDuration: filterQuery.minDuration,
        //       }),
        //     ...(filterQuery &&
        //       filterQuery.maxDuration && {
        //         maxDuration: filterQuery.maxDuration,
        //       }),
        //     ...(filterQuery &&
        //       filterQuery.startSlots && {
        //         startSlots: filterQuery.startSlots,
        //       }),
        //     ...(filterQuery &&
        //       filterQuery.endSlots && { endSlots: filterQuery.endSlots }),
        //     ...(filterQuery &&
        //       filterQuery.minAdultPrice && {
        //         minAdultPrice: filterQuery.minAdultPrice,
        //       }),
        //     ...(filterQuery &&
        //       filterQuery.maxAdultPrice && {
        //         maxAdultPrice: filterQuery.maxAdultPrice,
        //       }),
        //     // ...filterQuery,
        //     //filter: filterQuery && decodeURIComponent(filterQuery),
        //   },
        // }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchPackageByID = createAsyncThunk(
  "packagesnew/FetchPackageByID",
  async (_Id, { rejectWithValue }) => {
    try {
      const response = await API.get(`api/Packagesnew/${_Id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchPackageDestinations = createAsyncThunk(
  "Packagesnew/destinations/unique",
  async (_Id, { rejectWithValue }) => {
    try {
      const response = await API.get(`api/Packagesnew/destinations/unique`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchPackageCategories = createAsyncThunk(
  "Packagesnew/categories",
  async (_Id, { rejectWithValue }) => {
    try {
      const response = await API.get(`api/Packagesnew/categories`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchPackageTypes = createAsyncThunk(
  "Packagesnew/packageTypes",
  async (_Id, { rejectWithValue }) => {
    try {
      const response = await API.get(`api/Packagesnew/packageTypes`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchPackageBestSeasons = createAsyncThunk(
  "Packagesnew/bestSeasons",
  async (_Id, { rejectWithValue }) => {
    try {
      const response = await API.get(`api/Packagesnew/bestSeasons`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchPackageUpcoming = createAsyncThunk(
  "Packagesnew/unique-packages-with-upcoming-slots",
  async (_Id, { rejectWithValue }) => {
    try {
      const response = await API.get(
        `api/Packagesnew/unique-packages-with-upcoming-slots`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchPackageByState = createAsyncThunk(
  "Packagesnew/package-counts-by-state",
  async (_Id, { rejectWithValue }) => {
    try {
      const response = await API.get(
        `/api/Packagesnew/package-counts-by-state`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchPackageByCategory = createAsyncThunk(
  "Packagesnew/count-by-category",
  async (_Id, { rejectWithValue }) => {
    try {
      const response = await API.get(`/api/Packagesnew/count-by-category`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchPackagesAsync = createAsyncThunk(
  "package/FetchPackagesAsync",
  async (_Id, { rejectWithValue }) => {
    try {
      const response = await API.get(`api/Package/${_Id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const createPackage = createAsyncThunk(
  "package/createPackage",
  async ({ reqCUID }, { rejectWithValue }) => {
    try {
      const response = await API.post("api/Package", reqCUID);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updatePackage = createAsyncThunk(
  "package/updatePackage",
  async ({ reqCUID }, { rejectWithValue }) => {
    try {
      const response = await API.put(`api/Package/${reqCUID.id}`, reqCUID);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchPackagesByFilter = createAsyncThunk(
  "package/FetchPackagesByFilter",
  async ({ pagination }, { rejectWithValue }) => {
    try {
      let fdfsf = this.state.pagination.currentPage;
      //const response1 = await API.get(`api/Package/Browse?${queryParams}`);

      const response = await API.get(
        "/api/Packagesnew/Browse", //"api/Package/Browse",
        {
          params: {
            Page: pagination.currentPage,
            Results: pagination.pageSize,
            PageNumber: pagination.pageNumber,
            PageSize: pagination.pageSize,
            OrderBy: pagination.orderBy,
            SortOrder: pagination.sortOrder,
          },
        }
      );
      return response.data.items;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deletePortal = createAsyncThunk(
  "package/deletePortal",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await API.delete(`api/Package/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  data: {
    id: generateUUID(),
    packageID: 0,
    packageTitle: "",
    validFrom: moment().add(0, "d").format("YYYY-MM-DD"),
    validTo: moment().add(5, "d").format("YYYY-MM-DD"),
    packageType: "",
    duration: "",
    categoryID: 0,
    bestSeasion: "",
    destination: "",
    maxTravellers: 0,
    countryID: 0,
    stateID: 0,
    cityID: 0,
    starRationg: "0",
    isPublish: true,
    adultPrice: 0,
    childPrice: 0,
    discountPrice: 0,
    percentage: 0,
    isInclusive: false,
    CGSTPrice: 0,
    SGSTPrice: 0,
    partPayment: 0,
    bookBefore: "",
    totalAmount: 0,
    amountWithoutGST: 0,
    overview: "",
    priceGuideLine: "",
    termsConditions: "",
    itineraryDays: [
      {
        id: generateUUID(),
        itineraryTitle: "",
        itineraryDetails: "",
        mediaContents: {
          id: generateUUID(),
          isDefaultImage: false,
          fileExtension: "",
          fileContentType: "",
          fileData: "",
          fileName: "",
          fileURL: "",
          isActive: false,
        },
        itineraryTitleValidate: "",
        itineraryDetailsValidate: "",
        itineraryImageValidate: "",
      },
    ],
    inclusionExclusion: [
      // {
      //   id: generateUUID(),
      //   isInclusion: true,
      //   description: "<![CDATA[sfdfsf]]>",
      //   isActive: false
      // },
      // {
      //   id: generateUUID(),
      //   isInclusion: false,
      //   description: "<![CDATA[sfsdfds]]>",
      //   isActive: false
      // },
    ],
    galleryImages: [],
  },
  errors: {},
  objPackages: {},
  objArrayPackages: [],
  package: [],
  destinations: [],
  categories: [],
  types: [],
  bestSeasons: [],
  packagesByState: [],
  packagesByCategory: [],
  upcomingPackages: [],
  trendingPackages: [],
  loading: false,
  filter: {
    PackageTitle: "",
    Category: [],
    PackageType: [],
    BestSeasion: [],
    CountryName: "",
    StateName: "",
    CityName: "",
    DestinationName: "",
    minDuration: 0,
    maxDuration: 10,
    startSlots: "",
    endSlots: "",
    minAdultPrice: 0,
    maxAdultPrice: 100000,
  },
  pagination: {
    currentPage: 1,
    pageSize: 8,
    totalRecords: 0,
    hasNextPage: false,
    isBtnLoading: true,
    page: 1,
    results: [],
    pageNumber: 1,
    orderBy: "PackageTitle",
    sortOrder: "asc",
  },
  isFilters: false,
  currentPage: 0,
  pageSize: 8,
  totalRecords: 0,
  hasNextPage: false,
  isBtnLoading: true,
};

const packageSliceNew = createSlice({
  name: "package",
  initialState,
  //reducers: {},
  reducers: {
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchPackagesAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackagesAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.objPackages = action.payload;
      state.objArrayPackages = action.payload;
    });
    builder.addCase(FetchPackagesAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchPackageDestinations.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackageDestinations.fulfilled, (state, action) => {
      state.loading = false;
      state.destinations = action.payload;
    });
    builder.addCase(FetchPackageDestinations.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchPackageCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackageCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(FetchPackageCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchPackageTypes.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackageTypes.fulfilled, (state, action) => {
      state.loading = false;
      state.types = action.payload;
    });
    builder.addCase(FetchPackageTypes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchPackageBestSeasons.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackageBestSeasons.fulfilled, (state, action) => {
      state.loading = false;
      state.bestSeasons = action.payload;
    });
    builder.addCase(FetchPackageBestSeasons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchPackageUpcoming.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackageUpcoming.fulfilled, (state, action) => {
      state.loading = false;
      state.upcomingPackages = action.payload;
    });
    builder.addCase(FetchPackageUpcoming.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchPackageByState.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackageByState.fulfilled, (state, action) => {
      state.loading = false;
      state.packagesByState = action.payload;
    });

    builder.addCase(FetchPackageByState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchPackageByCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackageByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.packagesByCategory = action.payload;
    });
    builder.addCase(FetchPackageByCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchPackages.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackages.fulfilled, (state, action) => {
      state.loading = false;
      state.objArrayPackages = action.payload;

      const pagination = {
        currentPage: action.payload.currentPage,
        pageSize: action.payload.resultsPerPage,
        totalRecords: action.payload.totalResults,
        hasNextPage: action.payload.totalPages > action.payload.currentPage,
        isBtnLoading: false,
        page: action.payload.currentPage,
        results:
          action.meta.arg.pagination.currentPage !==
          state.pagination.currentPage
            ? [...state.pagination.results, ...action.payload.items]
            : action.payload.items,
        pageNumber: action.payload.totalPages,
        orderBy: action.meta.arg.pagination.orderBy,
        sortOrder: action.meta.arg.pagination.sortOrder,
      };
      state.pagination = pagination;
      if (action.meta.arg.filterQuery) {
        state.filter = action.meta.arg.filterQuery;
      }
    });
    builder.addCase(FetchPackages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchPackageByID.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackageByID.fulfilled, (state, action) => {
      state.objPackages = action.payload;
      //state.objArrayPackages = arrItemsaction.payload;
      // state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(FetchPackageByID.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(createPackage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPackage.fulfilled, (state, action) => {
      const navigate = useNavigate();
      state.loading = false;
      // state.data = action.payload;
      navigate(`/package/list/`);
    });
    builder.addCase(createPackage.rejected, (state, action) => {
      state.loading = false;
      state.isInquirySubmited = false;
      state.error = action.payload.message;
    });

    builder.addCase(updatePackage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updatePackage.fulfilled, (state, action) => {
      state.loading = false;
      state.objPackages = action.payload;
      state.objArrayPackages = action.payload;
      const navigate = useNavigate();
      navigate(`/package/list/`);
      // state.data = action.payload;
    });
    builder.addCase(updatePackage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchPackagesByFilter.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPackagesByFilter.fulfilled, (state, action) => {
      state.objArrayPackages = action.payload;
      const pagination = {
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalRecords: action.payload.totalRecords,
        hasNextPage: action.payload.hasNextPage,
        isBtnLoading: action.payload.isBtnLoading,
        page: action.payload.page,
        results: action.payload.results,
        pageNumber: action.payload.pageNumber,
        orderBy: action.payload.orderBy,
        sortOrder: action.payload.sortOrder,
      };
      state.pagination = pagination;
      //state.packagesContent.push(...state.packagesContent, ...action.payload);
      state.loading = false;
    });
    builder.addCase(FetchPackagesByFilter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export const getAllPackages = (state) => {
  return state.package.objArrayPackages;
};
export const getLoading = (state) => state.package.loading;
export const getPackage = (state) => state.package.objPackages;
export const getPackageDestinations = (state) => state.package.destinations;
export const getPackageByID = (id) => {
  return (state) => {
    return state.package.objArrayPackages.filter((_) => _.id === id);
  };
};
export const { setPagination } = packageSliceNew.actions;

export default packageSliceNew.reducer;
