import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export const createBookingInfo = createAsyncThunk(
  "package/createBookingInfo",
  async ({ reqCUID }, { rejectWithValue }) => {
    try {
      const response = await API.post("api/BookingInfo", reqCUID);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const createPayment = createAsyncThunk(
  "package/createPayment",
  async ({ createPaymentRQ }, { rejectWithValue }) => {
    try {
      const response = await API.post(
        "/api/payments/createPayment",
        createPaymentRQ
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const completePayment = createAsyncThunk(
  "package/completePayment",
  async ({ completePaymentRQ }, { rejectWithValue }) => {
    try {
      const response = await API.post(
        "/api/payments/completePayment",
        completePaymentRQ
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  passengers: [],
  tourPackages: [],
  cart: [],
  widgets: {
    joinFrom: "",
    tripDate: "",
    duration: 0,
    available: 0,
    adults: 1,
    children: 0,
    adultPrice: 0,
    childPrice: 0,
    GST: 0,
    Discount: 0,
    PartPaymentType: "",
    PartPaymentValue: 0,
    additionalServices: [],
    subtotal: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // updateWidget: (state, action) => {
    //   // Update the widget state based on action payload
    //   debugger;
    //   const { field, value } = action.payload;
    //   state.widgets[field] = value;
    // },
    updateWidget: (state, action) => {
      debugger;
      // Update the widget state based on action payload
      const { fieldValues } = action.payload;
      if (fieldValues.additionalServices) {
        // Check if additionalServices are being updated
        const updatedAdditionalServices = [
          ...state.widgets.additionalServices,
          fieldValues.additionalServices,
        ];
        // Update the state with the updated additionalServices array
        state.widgets = {
          ...state.widgets,
          additionalServices: updatedAdditionalServices,
        };
      }
      // Update other fields in state.widgets based on fieldValues
      Object.keys(fieldValues).forEach((field) => {
        if (field !== "additionalServices") {
          state.widgets[field] = fieldValues[field];
        }
      });
    },
    // updateWidget: (state, action) => {
    //   debugger;
    //   // Update the widget state based on action payload
    //   const { fieldValues } = action.payload;
    //   Object.keys(fieldValues).forEach((field) => {
    //     if (field === "additionalServices") {
    //       var sfdfs = fieldValues[field];
    //       state.additionalServices.push(sfdfs);
    //     } else state.widgets[field] = fieldValues[field];
    //   });
    // },
    addPassenger: (state, action) => {
      state.passengers.push(action.payload);
    },
    removePassenger: (state, action) => {
      state.passengers = state.passengers.filter(
        (passenger) => passenger.id !== action.payload.id
      );
    },
    addTourPackage: (state, action) => {
      state.tourPackages.push(action.payload);
    },
    removeTourPackage: (state, action) => {
      state.tourPackages = state.tourPackages.filter(
        (tourPackage) => tourPackage.id !== action.payload.id
      );
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createBookingInfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createBookingInfo.fulfilled, (state, action) => {
      const navigate = useNavigate();
      state.loading = false;
      // state.data = action.payload;
      // navigate(`/thank-you/`);
    });
    builder.addCase(createBookingInfo.rejected, (state, action) => {
      state.loading = false;
      state.isInquirySubmited = false;
      state.error = action.payload.message;
    });
    builder.addCase(createPayment.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPayment.fulfilled, (state, action) => {
      const navigate = useNavigate();
      state.loading = false;
      // state.data = action.payload;
      //navigate(`/thank-you/`);
    });
    builder.addCase(createPayment.rejected, (state, action) => {
      state.loading = false;
      state.isInquirySubmited = false;
      state.error = action.payload.message;
    });

    builder.addCase(completePayment.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(completePayment.fulfilled, (state, action) => {
      const navigate = useNavigate();
      state.loading = false;
      // state.data = action.payload;
      navigate(`/thank-you/`);
    });
    builder.addCase(completePayment.rejected, (state, action) => {
      state.loading = false;
      state.isInquirySubmited = false;
      state.error = action.payload.message;
    });
  },
});

export const {
  addPassenger,
  removePassenger,
  addTourPackage,
  removeTourPackage,
  addToCart,
  removeFromCart,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;
export const selectPassengers = (state) => state.cart.passengers;
export const selectTourPackages = (state) => state.cart.tourPackages;
export const { updateWidget } = cartSlice.actions;

export default cartSlice.reducer;
