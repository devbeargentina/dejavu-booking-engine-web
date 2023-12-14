import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactHtmlParser from "react-html-parser";
import { decode } from "html-entities";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/booking/details/loading";
import { FetchPackageByID } from "../redux/packageSliceNew";
import DetailsHeader from "../components/booking/details/details-header";
import DetailTypes from "../components/booking/details/details-types";
import ImageGallery from "../components/booking/details/image-gallery";
import JumpMenu from "../components/booking/details/jump-menu";
import InclusionIcons from "../components/booking/details/details-inclusions";
import InfoItem from "../components/booking/details/details-info";
import OverView from "../components/booking/details/overview";
import TitleList from "../components/booking/details/details-title-list";
import AboutLocation from "../components/booking/details/details-about-location";
import DayDetails from "../components/booking/details/details-days";
import ModifySearch from "../components/booking/details/modify-search";
import FAQs from "../components/booking/details/details-faqs";

import inclusionIcon from "../assets/images/web/SVG/Frame 494.svg";

import exclusionIcon from "../assets/images/web/SVG/Frame 495.svg";
import DetailAmenities from "../components/booking/details/details-amanities";
import DetailsWidgets from "../components/booking/details/details-widgets";

const Details = () => {
  const scrollRef = useRef();
  const [activeTab, setActiveTab] = useState("overview");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    loading,
    objArrayPackages: packages,
    objPackages,
  } = useSelector((state) => state.package);

  const packageData = useMemo(() => {
    return (
      packages.items &&
      packages.items?.reduce((acc, p) => {
        acc[p.id] = p;
        return acc;
      }, {})
    );
  }, [packages]);

  useEffect(() => {
    if (!packageData || !packageData[id]) {
      dispatch(FetchPackageByID(id));
    }
  }, [dispatch, id, packageData]);

  const packageInfo = useMemo(() => {
    if (!objPackages || objPackages.id !== id) {
      // If objPackages doesn't exist or has a different id, check packageData
      if (!packageData || !packageData[id]) {
        // If package data is not available, return null
        return null;
      } else {
        // If package data is available, return it
        return packageData[id];
      }
    } else {
      // If objPackages has the same id, return it
      return objPackages;
    }
  }, [id, objPackages, packageData]);

  const handleClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!packageInfo) {
    return null;
  }

  const hideModel = () => {
    // this.setState({
    //   isModify: false,
    // });
  };
  const changeItem = (business, slotId, selectedItem) => {
    // this.setState({
    //   isChangeItem: true,
    //   itemBusiness: business,
    //   slotId: slotId,
    //   selectedItem: selectedItem,
    // });
    // let reqURL = "package/" + this.packageId + "/slot/" + slotId + "/options";
    // let reqOBJ = {};
    // apiRequester(
    //   reqURL,
    //   reqOBJ,
    //   function (data) {
    //     this.setState({
    //       itemData: data,
    //     });
    //   }.bind(this),
    //   "GET"
    // );
  };
  const sccs = `
    .square {
      display: flex;
      flex-wrap: wrap;
      width: 100px;
    height: 150px;
}

.image1 {
width: 70px;
height: 100px;
}

.image2 {
width: 30px;
height: 50px;
}

.image3 {
width: 30px;
height: 50px;
margin-left: 40px;
margin-top: 50px;
}`;

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="details-page">
            {/* <DetailsHeader {...{ pageName: details.name }} /> */}
            <style>{sccs}</style>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mt-5 mb-2">
                  <DetailsHeader {...packageInfo} />
                  <DetailTypes {...packageInfo} />
                </div>
                <div className="col-lg-8 mt-3 mb-4">
                  <div className="col-lg-12 p-0">
                    <ImageGallery {...packageInfo} />
                    <DetailAmenities {...packageInfo} />
                    <OverView {...packageInfo} />
                  </div>
                </div>
                <div className="col-lg-4 mt-3 mb-4">
                  <DetailsWidgets {...packageInfo} />
                </div>
              </div>
            </div>

            <div className="col-lg-12 " style={{ background: "#F0F0F0" }}>
              <div className="container ">
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-start align-items-center">
                    <JumpMenu />
                  </div>
                </div>
              </div>
            </div>
            <div className="container ">
              <div className="row">
                <div className="col-lg-12 mt-4">
                  <DayDetails {...packageInfo} />
                </div>
              </div>
            </div>
            <div className="col-lg-12 pb-4" style={{ background: "#F0F0F0" }}>
              <div className="container ">
                <div className="row">
                  <div className="col-lg-12 mt-4">
                    <section>
                      <article>
                        <h2>{`Inclusions & Exclusions`}</h2>
                        {ReactHtmlParser(
                          decode(packageInfo.inclusionExclusion)
                        )}
                      </article>
                    </section>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <section>
                      <TitleList
                        items={packageInfo.InclusionExclusion}
                        icon={inclusionIcon}
                        title={{ key: "Inclusions & Exclusions" }}
                      />
                    </section>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <section>
                      <TitleList
                        items={packageInfo.exclusions}
                        icon={exclusionIcon}
                        title={{ key: "Exclusions" }}
                      />
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="container ">
              <div className="row">
                <div className="col-lg-12 mt-4">
                  <FAQs {...packageInfo} />
                </div>
              </div>
            </div>
            <div className="container d-none">
              <div className="details-col-wrap">
                <div className="details-left">
                  <ImageGallery {...packageInfo} />
                </div>
                <div className="details-right">
                  <InfoItem {...packageInfo} />
                </div>
              </div>

              <InclusionIcons {...packageInfo} />
              {/* <Iitinerary {...packageInfo} handleItemChange={changeItem} /> */}
              <div className="details-title-list">
                <div className="details-title-list-wrap">
                  <section>
                    <TitleList
                      items={packageInfo.inclusions}
                      title={{ key: "Inclusions" }}
                    />
                    <TitleList
                      items={packageInfo.exclusions}
                      title={{ key: "Exclusions" }}
                    />
                  </section>
                </div>
              </div>
              <div className="details-title-list">
                <div className="details-title-list-wrap">
                  <section>
                    <TitleList
                      items={packageInfo.paymentPolicy}
                      title={{ key: "Payment Policy" }}
                    />
                    <TitleList
                      items={packageInfo.cancellationPolicy}
                      title={{ key: "Cancellation Policy" }}
                    />
                  </section>
                </div>
              </div>
              <div className="details-title-list details-title-list-full">
                <div className="details-title-list-wrap">
                  <section>
                    <TitleList
                      items={packageInfo.termsAndConditions}
                      title={{ key: "Terms & Conditions" }}
                    />
                  </section>
                </div>
              </div>

              <div className="details-title-list details-title-list-full">
                <div className="details-title-list-wrap">
                  <section>
                    <TitleList
                      items={packageInfo.visaPolicy}
                      title={{ key: "Visa Policy" }}
                    />
                  </section>
                </div>
              </div>
              <DayDetails {...packageInfo} />
              <AboutLocation {...packageInfo} />
              {/* {this.state.isChangeItem ? (
              <ChangeItem
                data={this.state.itemData}
                selectedItem={this.state.selectedItem}
                business={this.state.itemBusiness}
                handleHide={this.hideItemPopup}
                handleItemSet={this.updateItem}
              />
            ) : null} */}
              {/* {this.state.isModify ? ( */}
              <ModifySearch handleHide={hideModel} />
              {/* ) : null} */}
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
  // return (
  //   <div>
  //     <div ref={scrollRef}></div>
  //     <div onClick={() => handleClick("overview")}>Overview</div>
  //     <div onClick={() => handleClick("details")}>Details</div>
  //     {activeTab === "overview" && (
  //       <div>
  //         <h1>{packageInfo.name}</h1>
  //         <p>{packageInfo.description}</p>
  //       </div>
  //     )}
  //     {activeTab === "details" && (
  //       <div>
  //         <p>{packageInfo.version}</p>
  //         <p>{packageInfo.license}</p>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Details;
