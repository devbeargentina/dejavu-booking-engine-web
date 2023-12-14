import { configureStore } from "@reduxjs/toolkit";
import PackageReducernew from "./packageSliceNew";
import CartReducer from "./cartSice";
import PortalReducer from "./portalSlice";
import UserReducer from "./authSlice";

export default configureStore({
  reducer: {
    portal: PortalReducer,
    package: PackageReducernew,
    cart: CartReducer,
    user: UserReducer,
  },
});
