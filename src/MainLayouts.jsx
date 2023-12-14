import React from "react";
import { Outlet } from "react-router";
// import "./assets/css/cp-template-1.css";
import Header from "./components/common/header";
import HeaderBlue from "./components/common/header-blue";
import Copywrite05 from "./components/common/footer";
import { Helmet } from "react-helmet";
import { StickyContainer, Sticky } from "react-sticky";

const MainLayouts = () => {
  return (
    <div className="djv-tours cm-pages">
      <Helmet>
        <title>Deja-vu tours treks and travel</title>
        <meta name="description" content="Deja-vu tours treks and travel" />
      </Helmet>
      <StickyContainer>
        <HeaderBlue />
        <Sticky stickyClassName="is-sticky" topOffset={30}>
          {({ style }) => (
            <div
              className={"hight-z-index mod-search-area"}
              style={{
                ...style,
                transform: "inherit",
                zIndex: "1000",
              }}
            >
              <Header />
            </div>
          )}
        </Sticky>
        <div className="cm-pages">
          <Outlet />
        </div>
        <Copywrite05 />
      </StickyContainer>
    </div>
  );
};

export default MainLayouts;
