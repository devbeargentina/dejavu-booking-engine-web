import React from "react";
import { CountryLinks } from "../common/country-links";
import { CityLinks } from "../common/city-links";

const handleFooterLinks = (item, DateFormate) => {
  if (
    typeof item.hotelcityname !== "undefined" &&
    typeof item.countrycode !== "undefined" &&
    typeof item.locationcode !== "undefined" &&
    item.hotelcityname !== "" &&
    item.countrycode !== "" &&
    item.locationcode !== ""
  ) {
    var queryStringHotel =
      "http://preprod-www.dejavutour.com/booking/default.aspx?HotelCityName=#$#HotelName#$#&CountryCode=#$#CountryCode#$#&CountryName=&LocationCode=#$#LocationCode#$#&HotelCommonCode=&CheckInDateTime=#$#CheckInDateTime#$#&CheckOutDateTime=#$#CheckOutDateTime#$#&ddlAdults1=2&ddlChild1=00&TotalRooms=1&ddlRoom=1&hdChildAge=18&formOp=&hdUniquePageId=1756941426&page=list&PageID=9397672323&ddlNatinality=IN&btnSearch=Search&strAmpersAndReplacement=%5EAMPERSAND%5E&NoSpecificCheckOutDate=&NoSpecificCheckinDate=&UniqueSearchID=o3cs4o45mtikf345yp05wvbu&ddlCountry=VN&ddlLocation=GB33&shortdesc=Hotel&hdChildAge=11&ddlHotelRatings=&ddlSortBy=BestAmount&ddlSortByOrder=ASC&fromConfirmPage=true";
    var DateFormatNew = "dd/mm/yyyy";
    var DateSeparator = "/";
    var DateCutOfDay = 1;
    var DateStayInDay = 1;
    //var fullDate = new Date();
    var NewCheckInDate = new Date();
    NewCheckInDate.setDate(NewCheckInDate.getDate() + DateCutOfDay);
    var NewCheckOutDate = new Date();
    NewCheckOutDate.setDate(
      NewCheckOutDate.getDate() + DateStayInDay + DateCutOfDay
    );
    if (typeof Date.format != "undefined") {
      DateFormatNew = Date.format;
    } else if (typeof DateFormate != "undefined") {
      DateFormatNew = DateFormate;
    }
    if (DateFormatNew.indexOf("-") !== -1 && DateFormatNew.indexOf("-")) {
      DateSeparator = "-";
    }
    var addCheckInZero =
      NewCheckInDate.getDate().toString().length === 1 ? "0" : "";
    var addCheckOutZero =
      NewCheckOutDate.getDate().toString().length === 1 ? "0" : "";
    if (
      DateFormatNew.toLowerCase() === "dd-mm-yyyy" ||
      DateFormatNew.toLowerCase() === "dd/mm/yy" ||
      DateFormatNew.toLowerCase() === "dd/mm/yyyy"
    ) {
      NewCheckInDate =
        addCheckInZero +
        NewCheckInDate.getDate() +
        DateSeparator +
        (NewCheckInDate.getMonth() + 1) +
        DateSeparator +
        NewCheckInDate.getFullYear();
      NewCheckOutDate =
        addCheckOutZero +
        NewCheckOutDate.getDate() +
        DateSeparator +
        (NewCheckOutDate.getMonth() + 1) +
        DateSeparator +
        NewCheckOutDate.getFullYear();
    }
    if (
      DateFormatNew.toLowerCase() === "yyyy-mm-dd" ||
      DateFormatNew.toLowerCase() === "yy/mm/dd" ||
      DateFormatNew.toLowerCase() === "yyyy/mm/dd"
    ) {
      NewCheckInDate =
        NewCheckInDate.getFullYear() +
        DateSeparator +
        (NewCheckInDate.getMonth() + 1) +
        DateSeparator +
        addCheckInZero +
        NewCheckInDate.getDate();
      NewCheckOutDate =
        NewCheckOutDate.getFullYear() +
        DateSeparator +
        (NewCheckOutDate.getMonth() + 1) +
        DateSeparator +
        addCheckOutZero +
        NewCheckOutDate.getDate();
    }
    if (
      DateFormatNew.toLowerCase() === "mm-dd-yyyy" ||
      DateFormatNew.toLowerCase() === "mm/dd/yy" ||
      DateFormatNew.toLowerCase() === "mm/dd/yyyy"
    ) {
      NewCheckInDate =
        NewCheckInDate.getMonth() +
        1 +
        DateSeparator +
        addCheckInZero +
        NewCheckInDate.getDate() +
        DateSeparator +
        NewCheckInDate.getFullYear();
      NewCheckOutDate =
        NewCheckOutDate.getMonth() +
        1 +
        DateSeparator +
        addCheckOutZero +
        NewCheckOutDate.getDate() +
        DateSeparator +
        NewCheckOutDate.getFullYear();
    }
    queryStringHotel = queryStringHotel
      .replace("#$#HotelName#$#", item.hotelcityname)
      .replace("#$#CountryCode#$#", item.countrycode)
      .replace("#$#LocationCode#$#", item.locationcode)
      .replace("#$#CheckInDateTime#$#", NewCheckInDate)
      .replace("#$#CheckOutDateTime#$#", NewCheckOutDate);
    window.location.href = queryStringHotel;
  }
};

const FooterLinks = (props) => {
  const arrCountryLinks = CountryLinks;
  const arrCityLinks = CityLinks;

  return (
    <div className="city-links-bg">
      <div className="container">
        <div className="cityFooterLinks">
          <div>
            <h3>Country/Territory links</h3>

            <ul>
              {arrCountryLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <button onClick={() => handleFooterLinks(item)}>
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3>City links</h3>
            <ul>
              {arrCityLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <button onClick={() => handleFooterLinks(item)}>
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
