import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";
import { Config } from "../helpers/config";

const { siteurl } = Config;
export const fetchAllPackage = createAsyncThunk(
  "package/fetchAllPackage",
  async (packageParam, { rejectWithValue }) => {
    try {
      var reqURL =
        "cms/package/getall?page=" +
        packageParam.currentPage +
        "&records=" +
        packageParam.pageSize;
      reqURL += "&packagetheme=0"
      if (packageParam.filter.packagename)
        reqURL += "&packagename=" + packageParam.filter.packagename;
      if (packageParam.filter.customername)
        reqURL += "&customername=" + packageParam.filter.customername;
      if (packageParam.filter.email)
        reqURL += "&email=" + packageParam.filter.email;
      if (packageParam.filter.phone)
        reqURL += "&phone=" + packageParam.filter.phone;
      if (packageParam.filter.rating > 0)
        reqURL += "&rating=" + packageParam.filter.rating;
      if (packageParam.filter.fromDate)
        reqURL += "&datefrom=" + packageParam.filter.fromDate;
      if (packageParam.filter.toDate)
        reqURL += "&dateto=" + packageParam.filter.toDate;
      reqURL += "&datemode=" + packageParam.filter.dateMode;
      reqURL += "&searchby=" + packageParam.filter.searchBy;
      //reqURL += "&groupby=nogroup";//+packageParam.filter.groupBy;
      if (localStorage.getItem('portalType') === 'B2C')
        reqURL += "&customerId=" + this.props.userInfo.customerID;
      const response = await API.get(reqURL);
      //const response = await API.get(`cms/package/getbyid?id=${packageid}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const fetchPackageByID = createAsyncThunk(
  "package/fetchPackageByID",
  async (packageid, { rejectWithValue }) => {
    try {
      const response = await API.get(`cms/package/getbyid?id=${packageid}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  Packages: "",
  Package: [],
  error: "",
  loading: false,
};

const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPackage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllPackage.fulfilled, (state, action) => {
      state.loading = false;
      state.Packages = action.payload.response;
      state.Package = [action.payload];
    });
    builder.addCase(fetchAllPackage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(fetchPackageByID.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPackageByID.fulfilled, (state, action) => {
      state.loading = false;

      let data = action.payload.response.package[0];
      data.termsConditions = action.payload.response.package[0].termsConditions;
      data.description = action.payload.response.package[0].description;
      data.packageName = action.payload.response.package[0].shortDescription;
      data.images = action.payload.response.images.map((item) => {
        item["id"] = item.imageid;
        item["isDefaultImage"] = false;
        item["isDeleted"] = false;
        item["fileExtension"] = "jpg";
        item["fileURL"] = item.imagepath;
        item["portalID"] = action.payload.response.package[0].portalID;
        delete item["createdby"];
        delete item["createddate"];
        delete item["updatedby"];
        delete item["updateddate"];
        delete item["specialpromotionimageid"];
        delete item["specialpromotionid"];
        return item;
      });
      data.inclusionExclusion = action.payload.response.inclusionExclusion.map(
        (item) => {
          item["id"] = item.inclusionExclusionID;
          item["isInclusion"] = item.isInclusion;
          item["description"] = item.shortDescription;
          item["isDeleted"] = false;
          return item;
        }
      );

      // var obj = {};
      // obj["imageid"] = 190824;
      // obj["imagepath"] = action.payload.response.package[0].smallImagePath;
      // obj["isDefaultImage"] = true;
      // obj["isDeleted"] = false;
      // obj["id"] = action.payload.response.package[0].smallImageID;
      // obj["fileExtension"] = "jpg";
      // obj["fileURL"] = action.payload.response.package[0].smallImagePath;
      // obj["portalID"] = action.payload.response.package[0].portalID;
      // data.images.push(obj);

      data.packageBrochure = [];
      if (action.payload.response.package[0].brochureFileName) {
        var objPDF = {};
        objPDF["isDefaultImage"] = true;
        objPDF["isDeleted"] = false;
        objPDF["id"] = action.payload.response.package[0].specialPromotionID;
        objPDF["fileExtension"] = "pdf";
        objPDF["fileURL"] = action.payload.response.package[0].brochureFileName;
        objPDF["portalID"] = action.payload.response.package[0].portalID;
        data.packageBrochure.push(objPDF);
      }
      if (action.payload.response.package[0].twOthers) {
        let supplierObj = JSON.parse(
          action.payload.response.package[0].twOthers
        );
        data["supplierCurrency"] = supplierObj.supplierCurrency;
        data["conversionRate"] = supplierObj.conversionRate;
        data["supplierCostPrice"] = supplierObj.supplierCostPrice;
        data["supplierTaxPrice"] = supplierObj.supplierTaxPrice;
        data["costPrice"] = supplierObj.costPrice;
        data["markupPrice"] = supplierObj.markupPrice;
        data["discountPrice"] = supplierObj.discountPrice;
        data["CGSTPrice"] = supplierObj.CGSTPrice;
        data["SGSTPrice"] = supplierObj.SGSTPrice;
        data["IGSTPrice"] = supplierObj.IGSTPrice;
        data["brn"] = supplierObj.brn;
        data["bookBefore"] = supplierObj.bookBefore;
      }
      state.Packages = data;
      state.Package = [data];
    });
    builder.addCase(fetchPackageByID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});


export const getAllPackageData = (state) => {
  
  return state.package.Packages;
}
export const getLoading = (state) => state.package.loading;
// export const getSetting = (state) => state.package.Settings;
// export const getCMSContent = (state) => state.portal.Contents;
export const getPackageById = (id) => {
  return (state) => {

    console.log("state.package.Packages", state.package.Packages);
    state.package.Package.filter((_) => _.specialPromotionID === parseInt(id));
  }
};

export const { setCurrentPage } = packageSlice.actions;

export default packageSlice.reducer;