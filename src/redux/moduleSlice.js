import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";


export const createModule = createAsyncThunk(
  "module/createModule",
  async ({ updatedModuleData, navigate, toast }, { rejectWithValue }) => {

    try {
      const response = await API.post("/module", updatedModuleData);
      toast.success("Added Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getModulesByUser = createAsyncThunk(
  "module/getModulesByUser",
  async (userId, { rejectWithValue }) => {

    try {
      const response = await API.get(`/module/userModules/${userId}`);;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const updateModule = createAsyncThunk(
  "module/updateModule",
  async ({ id, updatedModuleData, toast, navigate }, { rejectWithValue }) => {

    try {
      const response = await API.patch(`/module/${id}`, updatedModuleData);
      toast.success("Module Updated Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteModule = createAsyncThunk(
  "module/deleteModule",
  async ({ id, toast }, { rejectWithValue }) => {

    try {
      const response = await API.delete(`/module/${id}`);
      toast.success("Module Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const moduleSlice = createSlice({
  name: "module",
  initialState: {
    module: {},
    modules: [],
    userModules: [],
    tagModules: [],
    relatedModules: [],
    currentPage: 1,
    numberOfPages: null,
    error: "",
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createModule.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createModule.fulfilled, (state, action) => {
      state.loading = false;
      state.modules = [action.payload];
    });
    builder.addCase(createModule.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    builder.addCase(getModulesByUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getModulesByUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userModules = action.payload;
    });
    builder.addCase(getModulesByUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(updateModule.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateModule.fulfilled, (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userModules = state.userModules.map((item) =>
          item._id === id ? action.payload : item
        );
        state.modules = state.modules.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    });
    builder.addCase(updateModule.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    builder.addCase(deleteModule.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteModule.fulfilled, (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userModules = state.userModules.filter((item) => item._id !== id);
        state.modules = state.modules.filter((item) => item._id !== id);
      }
    });
    builder.addCase(deleteModule.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
   
  },
});

export const { setCurrentPage } = moduleSlice.actions;

export default moduleSlice.reducer;