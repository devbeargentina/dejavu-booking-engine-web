import React, { Component, useEffect, useState } from "react";
import moment from "moment";
import * as DropdownList from "../../helpers/dropdown-list";
import * as Global from "../../helpers/global";
import CMSSPageBanner from "../../components/home/modules/page-banner";
import NavigationArrowImg from "../../assets/images/web/right-menu-arrow.png";
import LocationIcon from "../../assets/images/web/location-icon.png";
import MyProfileActive from "../../assets/images/web/my-profile-active.png";
import MyBookingsActive from "../../assets/images/web/my-booking-active.png";
import MyBookingsDeactive from "../../assets/images/web/my-booking-deactive.png";
import MyProfileDeactive from "../../assets/images/web/my-profile-deactive.png";
import HtmlParser from "../../helpers/html-parser";
import SVGIcon from "../../helpers/svg-icon";
import { decode } from "html-entities";

import Form from "../../components/booking/common/form";
import ViewProfile from "./view-profile";
import MyCoravellers from "./my-co-travellers";
import MyBookings from "./my-bookings";
import MyViewBooking from "./my-view-booking";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/authSlice";
import { useRef } from "react";
const UserProfile = () => {
  const { mode } = useParams();
  const [bgColor, setBgColor] = useState("");

  const [activeTab, setActiveTab] = useState(mode);
  const scrollRef = useRef(null);
  const dispatch = useDispatch();

  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.firstName) {
      dispatch(getUser());
    }
  }, [dispatch]);

  function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  useEffect(() => {
    if (!user.firstName) {
      dispatch(getUser());
    }
    setBgColor(generateRandomColor());
  }, []);
  // state = {
  //   data: {
  //     validFrom: moment().add(0, "d").format(Global.DateFormate),
  //     gender: "Male",
  //   },
  //   activeTab: "Overview",
  //   errors: {},
  //   result: {
  //     details: [
  //       {
  //         specialpromotionid: 47351,
  //         twAgentId: 26352,
  //         countryid: 3,
  //         cityid: 1,
  //         validfrom: "2022-10-16T00:00:00",
  //         validto: "2022-10-22T00:00:00",
  //         shortdescription: "South america",
  //         summarydescription: "Hotel Flora",
  //         price: 5000.0,
  //         offerPrice: -1.0,
  //         friendlyName: "47351",
  //         brochureFileName: "",
  //         twPriceGuideLine: "",
  //         rating: 4.0,
  //         cityName: "Melbourne",
  //         countryName: "Thailand",
  //         currencySymbol: "$",
  //         imagepath:
  //           "https://tc-appdata.s3.us-east-2.amazonaws.com/tourwiz/media/adaa9521-d5f9-440a-ab78-96e61a426249.jpg",
  //       },
  //     ],
  //     tabs: {
  //       description: [
  //         {
  //           description:
  //             "&lt;div align=&quot;left&quot;&gt;Day 1 - Arrive Singapore&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Welcome  to Singapore!!! The Lion City! After clearing immigrations and customs  you will be transferred to your hotel in Singapore. In the evening enjoy Night Safari, your eyes will take a while to adjust  to the darkness here, but once they do, you’ll be greeted by close to  900 animals from over 100 species in this world’s first nocturnal  wildlife park. 41% of these species are threatened, including many  indigenous to the region, such as the endangered Asian elephant, Malayan  tapir and Malayan tiger.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Overnight at your hotel, Singapore.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;&amp;#160;&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Day 2 - Singapore&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Enjoy  breakfast at the hotel. After breakfast proceed for half day Singapore city tour. Includes  Merlion photostop, Suntec city, fountain of wealth, Orchard road, Little  india and Chinatown. Later, proceed for Sentosa Island which is located just 15 minutes from  the city, Enjoy your day at Sentosa island. Start your Sentosa experience  on a high by riding the Singapore Cable Car Sky Network from Faber Peak  Singapore into the island. En route take in the view of Resorts World  Sentosa’s Adventure Cove, Sentosa’s lush jungle foliage and surrounding  coastline. Other than that you can also enjoy Skyride and take in the  fantastic panoramic scenery of the city skyline and beautiful coastline.   In the evening, you will discover spectacular light water show. An awe  inspiring display of water, laser and fire effects, set to majestic  music and a panorama of breathtaking vistas – Wings of time.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Overnight at your hotel, Singapore.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Meals : Breakfast.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;&lt;strong&gt;&lt;br /&gt;\r\n&lt;/strong&gt;&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Day 3 – Singapore&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Enjoy  breakfast at the hotel. Today morning is at leisure to explore the city on your own Or we suggest you to take option tour to Universal Studio. Universal Studios  Singaporeis a theme park located within the Resorts World Sentosa,  Singapore. It features 28 rides, shows, and attractions in seven themed  zones. It is one of the six Universal Studios theme parks around the  world.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Overnight at your hotel, Singapore.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Meals : Breakfast.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;&amp;#160;&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Day 4 – Singapore&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Enjoy  breakfast at the hotel. After breakfast, you will proceed to visit Garden by the bay. Gardens by  the bay are man-made incredible nature park premises in the bay area of  Singapore. This sprawling area is spread on 101 hectares in central  Singapore. This mechanical garden is an icon of Singapore tourism. The  vision of Singapore government was to bring a city in the garden, they  wanted to make an environment for their citizens to live in peace and  give them better surroundings to work. Later, will visit Sky Park  observation deck. The Sky Park Observation Deck boasts scenic views of  the panoramic vistas of Marina Bay and Singapore’s world-class city  scape.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Overnight at your hotel.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Meals : Breakfast.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;&amp;#160;&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Day 5 – Singapore - Malaysia&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Enjoy  your breakfast at the hotel. After breakfast check out of the hotel and Later proceed to the airport  Arrive at Malaysia, Kuala Lumpur International airport and proceed for  your transfer to the hotel. You have the rest of the day at leisure.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Overnight at your hotel.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Meals : Breakfast&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;&amp;#160;&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Day 6 – Kuala Lumpur&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;After  breakfast, proceed for Half Day Kuala Lumpur City Tour, see the major  landmarks and monuments of the Malaysian capital. The tour includes  photo stops at Petronas Twin Towers, King’s Palace, National Monument,  KL City Gallery, Sultan Abdul Samad Building &amp;amp; Independence Square,  Kwai Chai Hong, Petaling Street. Drive pass by Parliament house and  National Museum.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Overnight at Kuala Lumpur.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Meals :&lt;b&gt; &lt;/b&gt;Breakfast&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;&amp;#160;&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Day 7 – Departure&lt;b&gt; &lt;/b&gt;&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Enjoy your breakfast at the hotel. After breakfast check out of the hotel and later proceed to the airport for your flight back home with memories.&lt;/div&gt;\r\n&lt;div align=&quot;left&quot;&gt;Meals : Breakfast&lt;/div&gt;",
  //         },
  //       ],
  //       inclusion: [
  //         {
  //           shortdescription:
  //             "04 Nights accommodation at Hotel Aqueen Heritage Little India (3***) or Similar in Singapore.",
  //         },
  //         {
  //           shortdescription:
  //             "02 Nights accommodation at Hotel Metro Hotel Bukit Bintang in Malaysia.",
  //         },
  //         {
  //           shortdescription: "Daily breakfast.",
  //         },
  //         {
  //           shortdescription: "Night Safari tour on seat-in-coach basis.",
  //         },
  //         {
  //           shortdescription:
  //             "Singapore City Tour Drive on seat-in-coach basis.",
  //         },
  //         {
  //           shortdescription:
  //             "Sentosa Saver (01 way cable car with Sentosa cable line + Luge & Skyride (02 ride) + Wings of time 0730pm) on seat-in-coach basis.",
  //         },
  //         {
  //           shortdescription:
  //             "Gardens by the Bay + Sands Sky Park Observation Deck on seat-in-coach basis.",
  //         },
  //         {
  //           shortdescription:
  //             "Half Day Kuala Lumpur city tour with KL Tower and Petronas Twin Towers.",
  //         },
  //         {
  //           shortdescription:
  //             "Coach arrival transfer and Kuala Lumpur Airport departure transfer.",
  //         },
  //         {
  //           shortdescription: "All tours & transfers on seat-in-coach basis.",
  //         },
  //         {
  //           shortdescription:
  //             "Return airport transfers on seat-in-coach basis.",
  //         },
  //       ],
  //       exclusion: [
  //         {
  //           shortdescription: "Airfare.",
  //         },
  //         {
  //           shortdescription: "Visa Cost.",
  //         },
  //         {
  //           shortdescription:
  //             "Kula Lumpur Tourism tax to be paid by the guest directly at the hotel.",
  //         },
  //         {
  //           shortdescription:
  //             "Coach Tickets KUL - SIN Or SIN - KUL Not Included.",
  //         },
  //         {
  //           shortdescription:
  //             "Cost of Insurance.Travel Insurance rates will vary as per age of Passengers. Senior Citizens will be charged extra.",
  //         },
  //         {
  //           shortdescription:
  //             "Any increase in Airfare, Govt. Taxes, Surcharges and any applicability of new taxes from Govt.",
  //         },
  //         {
  //           shortdescription:
  //             "Any up gradation in hotel room category and airline class.",
  //         },
  //         {
  //           shortdescription: "Cost of pre or post tour hotel accommodation.",
  //         },
  //         {
  //           shortdescription:
  //             "Any extra expense such as route change, Date change, Accommodation facilities, etc. incurred due to the unforeseen, unavoidable forced majeure circumstances during the tour.",
  //         },
  //         {
  //           shortdescription:
  //             "Porterage, laundry, telephone charges, shopping, wines and alcoholic beverages, mineral water, items of personal nature and food or drink which is not part of a set group menu.",
  //         },
  //         {
  //           shortdescription:
  //             "Any extra cost incurred on behalf of an individual due to illness, accident, hospitalization, or any personal emergency.",
  //         },
  //         {
  //           shortdescription:
  //             "Any services or activity charges other than those included in the group tour itinerary.",
  //         },
  //         {
  //           shortdescription:
  //             "Anything specifically not mentioned in the ‘tour price includes’ column.",
  //         },
  //       ],
  //       photoGallery: [
  //         {
  //           imagepath:
  //             "https://tc-appdata.s3.us-east-2.amazonaws.com/tourwiz/media/c7239be9-70c8-475c-9fa2-aca51e608f86.jpg",
  //         },
  //         {
  //           imagepath:
  //             "https://tc-appdata.s3.us-east-2.amazonaws.com/tourwiz/media/2ba7d29e-f290-434b-9565-c43b6e608a4e.jpg",
  //         },
  //         {
  //           imagepath:
  //             "https://tc-appdata.s3.us-east-2.amazonaws.com/tourwiz/media/51d50b96-052f-4d2f-81ea-f929b9ed6529.jpg",
  //         },
  //         {
  //           imagepath:
  //             "https://tc-appdata.s3.us-east-2.amazonaws.com/tourwiz/media/3f254305-f9ac-42f6-89f8-1790b6417948.jpg",
  //         },
  //         {
  //           imagepath:
  //             "https://tc-appdata.s3.us-east-2.amazonaws.com/tourwiz/media/c75c8eff-85f6-4fa0-8697-2808cc30ad04.jpg",
  //         },
  //         {
  //           imagepath:
  //             "https://tc-appdata.s3.us-east-2.amazonaws.com/tourwiz/media/e1ac2d5d-73ef-4c19-97c3-f0c498a5a482.jpg",
  //         },
  //         {
  //           imagepath:
  //             "https://tc-appdata.s3.us-east-2.amazonaws.com/tourwiz/media/a4a6858b-bb70-475c-b040-819765b67e99.jpg",
  //         },
  //       ],
  //       priceGuideLine: [
  //         {
  //           priceGuideLine: "",
  //         },
  //       ],
  //       termsConditions: [
  //         {
  //           termsConditions:
  //             "&lt;div align=&quot;left&quot;&gt;\r\n&lt;ul&gt;\r\n    &lt;li&gt;Rates are applicable for a minimum of 02 passengers travelling together.&lt;/li&gt;\r\n    &lt;li&gt;Rates are Nett and non - commissionable.&lt;/li&gt;\r\n    &lt;li&gt;All services mentioned in the itinerary are subject to availability at the time of booking.&lt;/li&gt;\r\n    &lt;li&gt;The  total amount of the Booking shall be paid by the client no later than  30 days prior to the date of travel. If the client fails to pay the  balance amount within this stipulated time of 30 days prior to the date  of travel, then the booking shall be deemed to be cancelled and the  entire Booking amount shall be forfeited by our company and the client  shall not be entitled to any refund of the same.&lt;/li&gt;\r\n    &lt;li&gt;Hotel Check-In is at 1400/1500 Hrs. and Check-Out is at 1100/1200 Hrs.&lt;/li&gt;\r\n    &lt;li&gt;Rate Of Exchange is applicable as per our company policy.&lt;/li&gt;\r\n    &lt;li&gt;Cheque Payment Subject to Realisation. Booking will proceed after the Cheque Realisation.&lt;/li&gt;\r\n    &lt;li&gt;All  special requests like early Check-In, smoking, non-smoking, views,  floors, king, twin, adjoining and/or interconnecting rooms are strictly  subject to availability upon arrival and same cannot be guaranteed  prior.&lt;/li&gt;\r\n    &lt;li&gt;The above quotation is based on specific airline and  hotels. In case if the same are not available as specified above,  alternate options will be suggested. The difference in cost if any is  payable extra.&lt;/li&gt;\r\n    &lt;li&gt;Surcharges applicable during Conventions, Special Events and Trade fairs.&lt;/li&gt;\r\n    &lt;li&gt;Peak Season / Weekend Surcharges may be applicable at the time of confirmation.&lt;/li&gt;\r\n    &lt;li&gt;Midnight Surcharge will be applicable for transfers between 2300 hrs.to 0700 hrs.&lt;/li&gt;\r\n    &lt;li&gt;All the above room/rooms are of the lowest base category of the hotel.&lt;/li&gt;\r\n    &lt;li&gt;Under  unavoidable circumstances itineraries may be changed or reversed,  however all inclusions in the itinerary will remain same.&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;/div&gt;\r\n&lt;p&gt;&amp;#160;&lt;/p&gt;",
  //         },
  //       ],
  //     },
  //   },
  // };
  // scrollRef = React.createRef();

  const handleTabs = (activeTab) => {
    setActiveTab(activeTab);
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scss = `
.active {color :#0034AC !important;}`;

  return (
    <React.Fragment>
      {user.firstName && (
        <>
          <style>{scss}</style>
          <CMSSPageBanner />
          <div className="container">
            <div className="row" style={{ marginTop: "-40PX" }}>
              {/* <div className="col-lg-12 mb-5">
              <small>HOME</small>
              <img src={NavigationArrowImg} alt="" className="ml-3 mr-3" />
              <small>STATE</small>
               <img src={NavigationArrowImg} alt="" className="ml-3 mr-3" />
              <small>GUJARAT</small>
              <img src={NavigationArrowImg} alt="" className="ml-3 mr-3" />
              <small>EXPERIENCE KUTCH</small>
            </div> */}
              <div className="col-lg-3 mt-2 mb-2">
                <div className="col-lg-12 p-3 pl-4 pr-4 border-radius shadow-sm bg-white">
                  <div
                    className="col-lg-12 p-0 d-flex align-items-center justify-content-center"
                    style={{ marginTop: "-45px" }}
                  >
                    <span
                      className="p-1 pl-3 pr-3 rounded-circle h1 "
                      style={{ backgroundColor: bgColor }}
                    >
                      {user && user.firstName.charAt(0)}
                    </span>
                  </div>
                  <div className="col-lg-12 p-0 mt-4">
                    <h4 className="font-weight-bold">
                      {user && user.firstName + " " + user.lastName}
                    </h4>
                  </div>
                  <div className="col-lg-12 p-0">
                    <span>{user && user.email}</span>
                  </div>
                  <div className="col-lg-12 p-0 mt-2">
                    <span>{user && user.phoneNumber}</span>
                  </div>
                  <hr />

                  <div className="col-lg-12 p-0 mt-3">
                    <h6
                      className={`text-primary cursor-pointer align-items-center d-flex justify-content-start ${
                        activeTab === "my-profile" && " active "
                      }`}
                      onClick={() => handleTabs("my-profile")}
                      role="button"
                    >
                      <img
                        src={
                          activeTab === "my-profile"
                            ? MyProfileActive
                            : MyProfileDeactive
                        }
                        alt="MyProfile"
                        className="mr-1"
                        style={{ height: "20px" }}
                      />
                      My Profile
                    </h6>
                  </div>
                  <div className="col-lg-12 p-0 mt-3">
                    <h6
                      className={`text-primary cursor-pointer align-items-center d-flex justify-content-start ${
                        activeTab === "my-bookings" ? " active " : ""
                      }`}
                      onClick={() => handleTabs("my-bookings")}
                      role="button"
                    >
                      <img
                        src={
                          activeTab === "my-bookings"
                            ? MyBookingsActive
                            : MyBookingsDeactive
                        }
                        alt="MyProfile"
                        className="mr-1"
                        style={{ height: "20px" }}
                      />
                      My Bookings
                    </h6>
                  </div>
                  {/* <div className="col-lg-12 p-0 mt-3">
                <h6
                  className={`text-primary cursor-pointer align-items-center d-flex justify-content-start ${
                    activeTab === "my-bookings" && " active "
                  }`}
                  onClick={handleTabs}
                  role="button"
                >
                  <img
                    src={
                      activeTab === "my-bookings"
                        ? MyProfileActive
                        : MyProfileDeactive
                    }
                    alt="MyProfile"
                    className="mr-1"
                    style={{ height: "20px" }}
                  />
                  My Profile
                </h6>
              </div> */}
                </div>
              </div>
              <div className="col-lg-9 mt-2 mb-5">
                <div ref={scrollRef}></div>
                {activeTab === "my-bookings" && <MyBookings user={user} />}
                {activeTab === "my-profile" && <ViewProfile user={user} />}
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default UserProfile;
