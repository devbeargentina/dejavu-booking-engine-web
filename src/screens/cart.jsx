import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CartItem from "../components/booking/cart/cart-item";
import Passangers from "../components/booking/cart/passangers";
import PriceDetails from "../components/booking/cart/price-details";
import { FetchPackageByID } from "../redux/packageSliceNew";
import Breadcrumb from "../components/booking/common/breadcrumb";
import BookingStep from "../components/booking/common/booking-step";
import CMSSPageBanner from "../components/home/modules/page-banner";
import {
  addPassenger,
  addToCart,
  createBookingInfo,
  removeFromCart,
  removePassenger,
  selectCart,
  selectPassengers,
} from "../redux/cartSice";
import { getUser, userLogin } from "../redux/authSlice";
import generateUUID from "../components/booking/common/generate-UUID";
import CartWidgets from "../components/booking/details/cart-widgets";

const Cart = (props) => {
  const navigate = useNavigate();
  //const [cart, setCart] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [isVisaFee, setIsVisaFee] = useState(false);
  const [isVisaFeeLoading, setIsVisaFeeLoading] = useState(false);
  const [isVisaFeeNotify, setIsVisaFeeNotify] = useState(false);
  const [travellerss, setTravellerss] = useState({});
  const cartItems = useSelector(selectCart);
  const passengerData = useSelector(selectPassengers);

  console.log(passengerData);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleAddPassengerData = (data) => {
    dispatch(removePassenger(data));
  };

  const { cartid } = useParams();
  const param = atob(cartid).split("/");
  const id = param[0];
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

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

  const { loadingUser, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.firstName) {
      dispatch(getUser());
    }
  }, [dispatch]);
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

  const convertTraveller = (traveller, isMainPax) => {
    return {
      isMainPax: isMainPax ? isMainPax : false,
      details: {
        firstName: traveller.firstname,
        middleName: "",
        lastName: traveller.lastname,
        location: {
          name: "Ahmedabad",
          countryCode: traveller.nationality.split("_")[0],
          countryID: traveller.nationality.split("_")[1],
          country: "India",
          address: "Ahmedabad",
          city: "Ahmedabad",
          state: "Gujarat",
          zipCode: "38004",
        },
        contactInformation: {
          phoneNumber: traveller.mobilenumber,
          phoneNumberCountryCode: "966",
          email: traveller.email,
        },
        issuingCountryCode: traveller.issuingcountry.split("_")[0],
        genderDesc: traveller.gender,
        gender: traveller.gender === "Male" ? "M" : "F",
        birthDate: traveller.birthdate + "T00:00:00",
        passportExpirationDate: traveller.expirydate + "T00:00:00",
        documentType: "PASSPORTNUMBER",
        passportExpireDate: traveller.expirydate + "T00:00:00",
        documentNumber: traveller.passportnumber,
      },
      type: 0,
      typeString: "ADT",
    };
  };

  const setTravellers = (index, traveller) => {
    setBookingStep(2);
    dispatch(addPassenger(traveller));
    // setState({
    //   isVisaFeeLoading: true,
    // });
    // travellers["" + index] = convertTraveller(traveller, index === 1);
    // if (Object.keys(travellers).length === 2) {
    //   const id =
    //     "ae06bc7a-4b51-4c78-9137-786d169f2d41:96663873-749d-43fc-b58d-93d45a9fe7de"; //props.match.params.id;
    //   let reqURL = "package/" + id + "/travellers";
    // let reqOBJ = [
    //   {
    //     item: Object.values(traveller),
    //   },
    // ];
    //   apiRequester(
    //     reqURL,
    //     reqOBJ,
    //     function (data) {
    //       checkVisaFee();
    //       //const id = props.match.params.id;
    //       //props.history.push(`/payment/${id}`);
    //     }.bind(this)
    //   );
    // }
  };
  const redirectPayment = async () => {
    const param = atob(cartid).split("/");
    const isLoggedIn =
      !localStorage.getItem("userToken") && !user.firstName ? true : false;
    if (!isLoggedIn) {
    }
    const idd = param[0];
    const paymentInfo = [
      {
        paymentId: "0",
        transactionToken: "string",
        gatewayRef: "string",
        paymentDate: "2023-03-03T15:20:41.025Z",
        paymentAmount: 0,
        userId: "0",
        packageId: "0",
        pgPaymentStatus: "string",
      },
    ];
    const reqCart = {
      id: generateUUID("CART"),
      bookingNumber: generateUUID("PBRN"),
      packageId: param[0],
      bookingStatus: "string",
      paymentId: generateUUID("PMNT"),
      userId: user.id,
      specialNotes: "string",
      bookingDate: "2023-03-03T14:52:57.997Z",
      packageTripSchedule: "0",
      bookingPaymentStatus: "string",
      departureLocation: "Ahmedabad",
      adultCount: 2,
      childCount: 1,
      packageAmount: 105000,
      bookingPaxInfo: passengerData,
      paymentInfo: paymentInfo,
    };

    dispatch(addToCart(reqCart));
    let reqCUID = reqCart;
    dispatch(createBookingInfo({ reqCUID }));

    const id =
      "ae06bc7a-4b51-4c78-9137-786d169f2d41:96663873-749d-43fc-b58d-93d45a9fe7de"; //props.match.params.id;
    //props.history.push(`/payment/${id}`);

    navigate(`/payment/${id}`);
  };

  return (
    <>
      <CMSSPageBanner />
      <div className="container">
        <div className="row">
          <Breadcrumb items={["Home", "Packages", "Dubai"]} />
          <div className="col-lg-12 mt-5">
            <BookingStep activeStep={`Step${bookingStep}`} />
          </div>

          {loading ? null : (
            <div className="container">
              {/* <div className="row">
                <div className="col-lg-12">
                  <CartItem {...cart} />
                </div>
              </div> */}
              <div className="row">
                <div className="col-lg-8">
                  <Passangers
                    {...cart}
                    user={user}
                    handleTravellers={setTravellers}
                    isVisaFeeLoading={isVisaFeeLoading}
                    isVisaFee={isVisaFee}
                    handleRedirect={redirectPayment}
                  />
                </div>
                <div className="col-lg-4 mb-5">
                  <CartWidgets
                    {...packageInfo}
                    handlePayment={redirectPayment}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
