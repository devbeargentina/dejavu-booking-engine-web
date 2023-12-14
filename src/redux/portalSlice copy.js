import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";
import { Config } from "../../../helpers/config";

const {siteurl} = Config;
export const FetchPortalDetails = createAsyncThunk(
  "portal/getPortalsByUser",
  async (userId, { rejectWithValue }) => {

    try {
      const response = await API.get(`cms/portal/details?${siteurl}`);;
      return response.data;
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
  Contents:[],
  error : "",
  loading: false,
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
      state.loading = false;
      state.Settings = action.payload.response;
      state.Contents = [action.payload];
    });
    builder.addCase(FetchPortalDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
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
export const getSetting = (state) => state.portal.Settings;
export const getCMSContent = (state) => state.portal.Contents;
export const getPortalById = (id) => {
  return (state) => state.portal.Contents.filter((_) => _.id === id)[0];
};

export const { setCurrentPage } = portalSlice.actions;

export default portalSlice.reducer;