import React, { lazy, Suspense, useMemo } from "react";
import "../assets/css/search-widget.css";
// import NormalLoginForm from "./login-form";

const Home = () => {
  // const getLoaderContent = useMemo(() => {
  //   return <div className="container ">{/* <Loader /> */}</div>;
  // }, []);
  var Slider = lazy(() => import("../components/home/modules/slider"));
  var Deals = lazy(() => import("../components/home/modules/deals"));
  var DealsCat = lazy(() => import("../components/home/modules/deals-cat"));
  var DealsState = lazy(() => import("../components/home/modules/deals-state"));
  var DealsStay = lazy(() => import("../components/home/modules/deals-stay"));
  var TravelStory = lazy(() =>
    import("../components/home/modules/travel-story")
  );
  var SearchWidgets = lazy(() =>
    import("../components/home/modules/search-widgets")
  );

  const getLoaderContent = () => {
    return (
      // <div className="row p-3">
      <div className="container ">{/* <Loader /> */}</div>
      // </div>
    );
  };
  const componentDelasPackages = (
    <Suspense fallback={getLoaderContent()}>
      <Slider />
      {/* <NormalLoginForm /> */}
      <SearchWidgets />
      <Deals />
      <DealsState />
      <DealsCat />
      <DealsStay />
      <TravelStory />
    </Suspense>
  );
  return (
    <React.Fragment>
      <div className="cm-pages">{componentDelasPackages}</div>
    </React.Fragment>
  );
};

export default Home;
