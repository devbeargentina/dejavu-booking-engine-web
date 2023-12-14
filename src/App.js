import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Button, ConfigProvider, Form, InputNumber } from "antd";
import { useSelector } from "react-redux";
import Home from "./screens/home";
import Results from "./screens/results";
import Details from "./screens/details";
import Cart from "./screens/cart";
import MainLayouts from "./MainLayouts";
import { Context } from "./context/context";
import response from "./response.json";
import Loader from "./components/common/loader";
import UserProfile from "./components/profile/user-profile";
import "./custom.less";

import { StyleProvider } from "@ant-design/cssinjs";
import PaymentPage from "./screens/PaymentPage";

import PaymentPageCC from "./screens/PaymentPageCC";

const defaultData = {
  borderRadius: 6,
  colorPrimary: "#1677ff",
};

const App = (props) => {
  // Access the user state from Redux store
  debugger;
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  // Check if user is logged in or not
  // const isLoggedIn = !!user.token; // Assuming your user object has a `token` property

  const getLoaderContent = () => {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "calc(100vh - 2px)", opacity: ".5" }}
      >
        <Loader />
      </div>
    );
  };
  const Contents = response;
  const Settings = response.items[0];
  const State = { Settings, Contents }; //thisState;
  const Props = Settings; //this.props;
  debugger;
  const Ctx = {
    State,
    Props,
  };
  const scss = `body .ant-btn-primary {
    color: #fff;
    background-color: #ED3237 !important;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
}
:where(.css-dev-only-do-not-override-ph9edi).ant-btn-primary {
    color: #fff;
    background-color: #1677ff;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
}`;
  return (
    <StyleProvider hashPriority="high">
      <Context.Provider value={Ctx}>
        <style>{scss}</style>
        <Suspense fallback={getLoaderContent()}>
          <Routes>
            <Route path="/" element={<MainLayouts />}>
              <Route index element={<Home />} />
              {/* <Route exact path="/results" element={<Results />} />
              <Route path="/results/:filterString" element={<Results />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/cart/:cartid" element={<Cart />} /> */}
              {/* <Route path="/acc/:mode" element={<UserProfile />} /> */}
              {/* <Route
                path="/payment/:cartid"
                element={<PaymentPage isUserLoggedIn={isUserLoggedIn} />}
            />*/}
              <Route
                path="/payment"
                element={
                  !isUserLoggedIn ? (
                    // <PrivateLayout>
                    <PaymentPage isUserLoggedIn={isUserLoggedIn} />
                  ) : (
                    // </PrivateLayout>
                    <Navigate to="/" />
                  )
                }
              /> 
              <Route
                path="/paymentcc"
                element={
                  !isUserLoggedIn ? (
                    // <PrivateLayout>
                    <PaymentPageCC isUserLoggedIn={isUserLoggedIn} />
                  ) : (
                    // </PrivateLayout>
                    <Navigate to="/" />
                  )
                }
              /> 
              {/* Use PrivateLayout for logged-in users */}
              {/* <Route
                path="/acc/:mode"
                element={
                  isUserLoggedIn ? (
                    // <PrivateLayout>
                    <UserProfile />
                  ) : (
                    // </PrivateLayout>
                    <Navigate to="/" />
                  )
                }
              /> */}
            </Route>
          </Routes>
        </Suspense>
      </Context.Provider>
    </StyleProvider>
  );
};

export default App;
