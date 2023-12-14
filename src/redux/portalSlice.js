import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";
// import { Config } from "../helpers/config";

const { siteurl } = "cmsConfig";
export const FetchPortalDetails = createAsyncThunk(
  "portal/details",
  async (userId, { rejectWithValue }) => {

    try {
      const response = await API.get(`cms/portal/details?${siteurl}`);;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchHTMLModuleContent = createAsyncThunk(
  "portal/htmlmodule",
  async (moduleName, { rejectWithValue }) => {

    try {
      const response = await API.get(`cms/htmlmodule?${siteurl}&modulename=${moduleName}&culturecode=en-us`);;
      return response.data?.response && (response.data?.response[0]?.desktopHtml || "");
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const createContactUsInquiry = createAsyncThunk(
  "portal/createContactUsInquiry",
  async ({ reqCUID }, { rejectWithValue }) => {

    try {
      const response = await API.post("cms/contact/send", reqCUID);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const FetchSprecialPromotionByID = createAsyncThunk(
  "portal/specialpromotiondetails",
  async (iD, { rejectWithValue }) => {

    try {
      const response = await API.get(`cms/specialpromotiondetails?portalid=0&itemid=${iD}`);;
      return response.data?.response && (response.data?.response[0]?.desktopHtml || "");
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const createPortal = createAsyncThunk(
  "portal/createPortal",
  async ({ updatedPortalData, navigate, toast }, { rejectWithValue }) => {

    try {
      const response = await API.post("/portal", updatedPortalData);
      toast.success("Added Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getPortalsByUser = createAsyncThunk(
  "portal/getPortalsByUser",
  async (userId, { rejectWithValue }) => {

    try {
      const response = await API.get(`/portal/userPortals/${userId}`);;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const updatePortal = createAsyncThunk(
  "portal/updatePortal",
  async ({ id, updatedPortalData, toast, navigate }, { rejectWithValue }) => {

    try {
      const response = await API.patch(`/portal/${id}`, updatedPortalData);
      toast.success("Portal Updated Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deletePortal = createAsyncThunk(
  "portal/deletePortal",
  async ({ id, toast }, { rejectWithValue }) => {

    try {
      const response = await API.delete(`/portal/${id}`);
      toast.success("Portal Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  Settings: "",
  portalDetails: [],
  Contents: [],
  sliderContent: [],
  howItWorkContent: [],
  socialMediaContent: [],
  dealsContent: [],
  packagesContent: [],
  lastMinuteDealsContent: [],
  topLocationsContents: [],
  testimonialContent: [],
  contactDetailsContent: [],
  aboutUsContent: [],
  termsConditionsContent: [],
  error: "",
  loading: false,
  contactUs: {
    data: {
      name: "",
      business: "",
      email: "",
      phone: "",
      comments: "",
      captcha: "",
      isValidCaptcha: true,
    },
    isInquirySubmited: false,
    errors: {},
  }
};


const portalSlice = createSlice({
  name: "cmsPortal",
  initialState,
  reducers: {},
  // reducers: {
  //   setCurrentPage: (state, action) => {
  //     state.currentPage = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(FetchPortalDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPortalDetails.fulfilled, (state, action) => {



      action.payload.dealsContent = action.payload.dealsContent.map(obj => {
        if (typeof (obj.iclusionExclusion) === "string" && obj.iclusionExclusion !== "")
          obj.iclusionExclusion = JSON.parse(obj.iclusionExclusion);
        if (typeof (obj.largeImages) === "string" && obj.largeImages !== "")
          obj.largeImages = JSON.parse(obj.largeImages);
        return obj;
      }
      );

      action.payload.lastMinuteDealsContent = action.payload.lastMinuteDealsContent.map(obj => {
        if (typeof (obj.iclusionExclusion) === "string" && obj.iclusionExclusion !== "")
          obj.iclusionExclusion = JSON.parse(obj.iclusionExclusion);
        if (typeof (obj.largeImages) === "string" && obj.largeImages !== "")
          obj.largeImages = JSON.parse(obj.largeImages);
        return obj;
      }
      );

      action.payload.packagesContent = action.payload.packagesContent.map(obj => {
        if (typeof (obj.iclusionExclusion) === "string" && obj.iclusionExclusion !== "")
          obj.iclusionExclusion = JSON.parse(obj.iclusionExclusion);
        if (typeof (obj.largeImages) === "string" && obj.largeImages !== "")
          obj.largeImages = JSON.parse(obj.largeImages);
        return obj;
      }
      );

      state.loading = false;
      state.Settings = action.payload.response;
      state.Contents = [action.payload];

    });
    builder.addCase(FetchPortalDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(FetchHTMLModuleContent.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchHTMLModuleContent.fulfilled, (state, action) => {

      if (action.meta.arg === "about us")
        state.aboutUsContent = action.payload;
      else if (action.meta.arg === "ContactDetails")
        state.contactDetailsContent = action.payload;
      else if (action.meta.arg === "Terms and Conditions")
        state.termsConditionsContent = action.payload;
      state.loading = false;
    });
    builder.addCase(FetchHTMLModuleContent.rejected, (state, action) => {
      state.loading = false;
      if (action.meta.arg === "about us")
        state.aboutUsContent = action.payload.message;
      else if (action.meta.arg === "ContactDetails")
        state.contactDetailsContent = action.payload.message;
      else if (action.meta.arg === "Terms and Conditions")
        state.termsConditionsContent = action.payload.message;
    });

    builder.addCase(createContactUsInquiry.pending, (state, action) => {

      state.loading = true;
    });
    builder.addCase(createContactUsInquiry.fulfilled, (state, action) => {

      state.loading = false;
      //state.contactUs.data. = [action.payload];
      state.contactUs.data.name = "";
      state.contactUs.data.business = "";
      state.contactUs.data.email = "";
      state.contactUs.data.phone = "";
      state.contactUs.data.comments = "";
      state.contactUs.data.captcha = "";
      state.contactUs.data.isValidCaptcha = false;
      state.contactUs.isInquirySubmited = true;
      state.contactUs.error = {};
    });
    builder.addCase(createContactUsInquiry.rejected, (state, action) => {

      state.loading = false;
      state.contactUs.isInquirySubmited = false;
      state.contactUs.error = action.payload.message;
    });

    builder.addCase(FetchSprecialPromotionByID.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchSprecialPromotionByID.fulfilled, (state, action) => {

      state.packagesContent.push(...state.packagesContent, ...action.payload);
      state.loading = false;
    });
    builder.addCase(FetchSprecialPromotionByID.rejected, (state, action) => {
      state.loading = false;
      if (action.meta.arg === "about us")
        state.aboutUsContent = action.payload.message;
      else if (action.meta.arg === "ContactDetails")
        state.contactDetailsContent = action.payload.message;
      else if (action.meta.arg === "Terms and Conditions")
        state.termsConditionsContent = action.payload.message;
    });

    // builder.addCase(createPortal.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(createPortal.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.portals = [action.payload];
    // });
    // builder.addCase(createPortal.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // });
    // builder.addCase(getPortalsByUser.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(getPortalsByUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.userPortals = action.payload;
    // });
    // builder.addCase(getPortalsByUser.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // });

    // builder.addCase(updatePortal.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(updatePortal.fulfilled, (state, action) => {
    //   state.loading = false;
    //   const {
    //     arg: { id },
    //   } = action.meta;
    //   if (id) {
    //     state.userPortals = state.userPortals.map((item) =>
    //       item._id === id ? action.payload : item
    //     );
    //     state.portals = state.portals.map((item) =>
    //       item._id === id ? action.payload : item
    //     );
    //   }
    // });
    // builder.addCase(updatePortal.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // }
    // ,
    // builder.addCase(deletePortal.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(deletePortal.fulfilled, (state, action) => {
    //   state.loading = false;
    //   const {
    //     arg: { id },
    //   } = action.meta;
    //   if (id) {
    //     state.userPortals = state.userPortals.filter((item) => item._id !== id);
    //     state.portals = state.portals.filter((item) => item._id !== id);
    //   }
    // });
    // builder.addCase(deletePortal.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // });

  },
});



export const getAllData = (state) => {
  return state.portal.Contents;
}
export const getLoading = (state) => state.portal.loading;
export const getSetting = (state) => state.portal.Settings[0];
export const getCMSContent = (state) => state.portal.Contents[0];
export const getHTMLModuleContent = (moduleName) => {
  if (moduleName === "about us")
    return (state) => state.portal.aboutUsContent;
  else if (moduleName === "ContactDetails")
    return (state) => state.portal.contactDetailsContent;
  else if (moduleName === "Terms and Conditions")
    return (state) => state.portal.termsConditionsContent;
  else if (moduleName === "about us1")
    return (state) => state.portal.aboutUsContent;
};

// export const getHTMLModuleContent = (state) => state.portal.aboutUsContent;
export const getAboutUsContent = (state) => state.portal.aboutUsContent;

export const getContactUsFormData = (state) => state.portal.contactUs;

export const getSpecialPromotionByID = (id) => {
  return (state) => state.portal.Contents[0].packagesContent.filter((_) => _.specialPromotionID === parseInt(id));
};

export const getPortalById = (id) => {
  return (state) => state.portal.Contents.filter((_) => _.id === id)[0];
};
export const { setCurrentPage } = portalSlice.actions;

export default portalSlice.reducer;