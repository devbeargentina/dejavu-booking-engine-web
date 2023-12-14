import React from "react";

const props = {
  slots: [
    { data: { business: "hotel", rating: 4.5 } },
    { data: { business: "air" } },
    { data: { business: "activity" } },
    { data: { business: "transfers" } },
  ],
  durationNights: 5,
};
const ResultInclusions = (propss) => {
  const isHotel = props.slots
    .filter((x) => x.data)
    .find((bus) => bus.data.business === "hotel");

  const isFLight = props.slots
    .filter((x) => x.data)
    .find((bus) => bus.data.business === "air");

  // const isTransfer = props.slots
  //   .filter(x => x.data)
  //   .find(bus => bus.data.business === "activity");

  // const isTransfer = props.slots
  //   .filter(x => x.data)
  //   .find(bus => bus.data.business === "transfers");

  const isTransfer = true;

  const hotel = props.slots
    .filter((x) => x.data)
    .find((bus) => bus.data.business === "hotel");

  const hotelRating = hotel && hotel.data.rating;

  return (
    <div className="results-inclusions">
      <span>
        <svg x={"0px"} y={"0px"} viewBox={"0 0 43.199 47.542"}>
          <g
            id="night"
            transform="matrix(0.966, -0.259, 0.259, 0.966, 0, 8.793)"
          >
            <path
              id="Path_3273"
              data-name="Path 3273"
              d="M32.237,7.19a1.356,1.356,0,0,0,1.135-1.032,1.431,1.431,0,0,0-.447-1.445A20.043,20.043,0,1,0,33.51,34.92a1.493,1.493,0,0,0,.413-1.479,1.373,1.373,0,0,0-1.17-.963A12.757,12.757,0,0,1,21.5,19.817,12.621,12.621,0,0,1,32.237,7.19ZM18.647,19.782A15.618,15.618,0,0,0,29.312,34.576a17.191,17.191,0,1,1-.585-29.347A15.421,15.421,0,0,0,18.647,19.782Z"
              transform="translate(0 0)"
              fill="#043c5d"
            ></path>
          </g>
        </svg>
        <label>{props.durationNights} Nights</label>
      </span>

      {isFLight ? (
        <span>
          <svg x={"0px"} y={"0px"} viewBox={"0 0 39.397 39.425"}>
            <g id="plane" transform="translate(0)">
              <g
                id="Group_86"
                data-name="Group 86"
                transform="translate(15.759 0)"
              >
                <g id="Group_85" data-name="Group 85">
                  <path
                    id="Path_3274"
                    data-name="Path 3274"
                    d="M211.351,1.781a3,3,0,0,0-1.89-1.692,2.786,2.786,0,0,0-3.19,1.452,13.762,13.762,0,0,0-1.435,6.176V28.263a.658.658,0,0,0,.012.124l1.768,9.159a2.188,2.188,0,0,0,2.158,1.879h0a2.178,2.178,0,0,0,2.153-1.845l1.773-9.193a.606.606,0,0,0,.012-.124V7.716A13.754,13.754,0,0,0,211.351,1.781ZM211.4,28.2l-1.766,9.165a.869.869,0,0,1-1.725-.033L206.15,28.2V7.714a12.451,12.451,0,0,1,1.3-5.588,1.465,1.465,0,0,1,1.652-.775,1.693,1.693,0,0,1,1.056.973A12.488,12.488,0,0,1,211.4,7.717V28.2Z"
                    transform="translate(-204.836 0)"
                    fill="#043c5d"
                  />
                </g>
              </g>
              <g
                id="Group_88"
                data-name="Group 88"
                transform="translate(0 14.473)"
              >
                <g id="Group_87" data-name="Group 87">
                  <path
                    id="Path_3275"
                    data-name="Path 3275"
                    d="M16.938,188.053a.656.656,0,0,0-.649-.013L.53,196.576a.656.656,0,0,0-.344.577v3.94a.658.658,0,0,0,.887.615l15.759-5.91a.658.658,0,0,0,.426-.615v-6.566A.657.657,0,0,0,16.938,188.053Zm-.993,6.675L1.5,200.145v-2.6l14.446-7.824Z"
                    transform="translate(-0.186 -187.96)"
                    fill="#043c5d"
                  />
                </g>
              </g>
              <g
                id="Group_90"
                data-name="Group 90"
                transform="translate(22.325 14.474)"
              >
                <g id="Group_89" data-name="Group 89">
                  <path
                    id="Path_3276"
                    data-name="Path 3276"
                    d="M306.839,196.579l-15.759-8.536a.656.656,0,0,0-.969.577v6.566a.657.657,0,0,0,.426.615l15.759,5.91a.674.674,0,0,0,.231.041.648.648,0,0,0,.373-.117.657.657,0,0,0,.283-.54v-3.94A.657.657,0,0,0,306.839,196.579Zm-.969,3.569-14.446-5.417v-5.009l14.446,7.825Z"
                    transform="translate(-290.111 -187.964)"
                    fill="#043c5d"
                  />
                </g>
              </g>
              <g
                id="Group_92"
                data-name="Group 92"
                transform="translate(8.536 15.131)"
              >
                <g id="Group_91" data-name="Group 91">
                  <path
                    id="Path_3277"
                    data-name="Path 3277"
                    d="M113.009,196.5a1.972,1.972,0,0,0-1.97,1.97v1.97h1.313v-1.97a.657.657,0,1,1,1.313,0v.657h1.313v-.657A1.972,1.972,0,0,0,113.009,196.5Z"
                    transform="translate(-111.039 -196.497)"
                    fill="#043c5d"
                  />
                </g>
              </g>
              <g
                id="Group_94"
                data-name="Group 94"
                transform="translate(2.626 18.413)"
              >
                <g id="Group_93" data-name="Group 93">
                  <path
                    id="Path_3278"
                    data-name="Path 3278"
                    d="M36.264,239.124a1.972,1.972,0,0,0-1.97,1.97v1.97h1.313v-1.97a.657.657,0,0,1,1.313,0h1.313A1.972,1.972,0,0,0,36.264,239.124Z"
                    transform="translate(-34.294 -239.124)"
                    fill="#043c5d"
                  />
                </g>
              </g>
              <g
                id="Group_96"
                data-name="Group 96"
                transform="translate(26.921 15.131)"
              >
                <g id="Group_95" data-name="Group 95">
                  <path
                    id="Path_3279"
                    data-name="Path 3279"
                    d="M351.771,196.5a1.972,1.972,0,0,0-1.97,1.97v.657h1.313v-.657a.657.657,0,1,1,1.313,0v1.97h1.313v-1.97A1.972,1.972,0,0,0,351.771,196.5Z"
                    transform="translate(-349.801 -196.497)"
                    fill="#043c5d"
                  />
                </g>
              </g>
              <g
                id="Group_98"
                data-name="Group 98"
                transform="translate(32.831 18.413)"
              >
                <g id="Group_97" data-name="Group 97">
                  <path
                    id="Path_3280"
                    data-name="Path 3280"
                    d="M428.516,239.124a1.972,1.972,0,0,0-1.97,1.97h1.313a.657.657,0,0,1,1.313,0v1.97h1.313v-1.97A1.972,1.972,0,0,0,428.516,239.124Z"
                    transform="translate(-426.546 -239.124)"
                    fill="#043c5d"
                  />
                </g>
              </g>
              <g
                id="Group_100"
                data-name="Group 100"
                transform="translate(9.849 31.64)"
              >
                <g id="Group_99" data-name="Group 99">
                  <path
                    id="Path_3281"
                    data-name="Path 3281"
                    d="M136.521,416.056l-7.114,1.186v-1.479l6.248-3.749-.676-1.126-6.566,3.94a.655.655,0,0,0-.318.563v2.626a.657.657,0,0,0,.657.657.74.74,0,0,0,.107-.009l7.879-1.313Z"
                    transform="translate(-128.094 -410.888)"
                    fill="#043c5d"
                  />
                </g>
              </g>
              <g
                id="Group_102"
                data-name="Group 102"
                transform="translate(20.904 31.64)"
              >
                <g id="Group_101" data-name="Group 101">
                  <path
                    id="Path_3282"
                    data-name="Path 3282"
                    d="M279.984,414.828l-6.566-3.94-.676,1.126,6.248,3.749v1.479l-7.115-1.186-.215,1.3,7.879,1.313a.664.664,0,0,0,.108.009.657.657,0,0,0,.656-.657V415.39A.657.657,0,0,0,279.984,414.828Z"
                    transform="translate(-271.659 -410.888)"
                    fill="#043c5d"
                  />
                </g>
              </g>
              <g
                id="Group_104"
                data-name="Group 104"
                transform="translate(17.763 3.968)"
              >
                <g id="Group_103" data-name="Group 103">
                  <path
                    id="Path_3283"
                    data-name="Path 3283"
                    d="M234.287,52.6a1.6,1.6,0,0,0-1.5-1.072,1.549,1.549,0,0,0-1.482,1.1l-.447,1.313,1.244.423.455-1.341a.252.252,0,0,1,.238-.184.255.255,0,0,1,.242.173l.447,1.346,1.246-.413Z"
                    transform="translate(-230.863 -51.525)"
                    fill="#043c5d"
                  />
                </g>
              </g>
            </g>
          </svg>
          <label>Flight Included</label>
        </span>
      ) : null}

      {isHotel ? (
        <span>
          <svg x={"0px"} y={"0px"} viewBox={"0 0 34.317 33.746"}>
            <g id="hotel" transform="translate(0)">
              <g id="Group_13" data-name="Group 13" transform="translate(0 0)">
                <g id="Group_12" data-name="Group 12">
                  <path
                    id="Path_3216"
                    data-name="Path 3216"
                    d="M33.746,9.148H27.454V4.572A.572.572,0,0,0,26.882,4H7.435a.572.572,0,0,0-.572.572v8.007H.572A.572.572,0,0,0,0,13.151V36.6a.572.572,0,1,0,1.144,0V13.723h5.72v23.45a.572.572,0,0,0,.572.572H26.882a.572.572,0,0,0,.572-.572V10.292h5.72V36.6a.572.572,0,1,0,1.144,0V9.72A.572.572,0,0,0,33.746,9.148ZM16.587,36.6H14.3V31.454h2.288Zm3.432,0H17.731V31.454h2.288Zm6.292,0H21.163v-5.72a.572.572,0,0,0-.572-.572H13.727a.572.572,0,0,0-.572.572V36.6H8.007V5.144h18.3Z"
                    transform="translate(0 -4)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_15"
                data-name="Group 15"
                transform="translate(9.151 2.288)"
              >
                <g
                  id="Group_14"
                  data-name="Group 14"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3217"
                    data-name="Path 3217"
                    d="M132,36h-3.432a.572.572,0,0,0-.572.572V40a.572.572,0,0,0,.572.572H132a.572.572,0,0,0,.572-.572V36.572A.572.572,0,0,0,132,36Zm-.572,3.432h-2.288V37.144h2.288Z"
                    transform="translate(-128 -36)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_17"
                data-name="Group 17"
                transform="translate(14.871 2.288)"
              >
                <g
                  id="Group_16"
                  data-name="Group 16"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3218"
                    data-name="Path 3218"
                    d="M212,36h-3.432a.572.572,0,0,0-.572.572V40a.572.572,0,0,0,.572.572H212a.572.572,0,0,0,.572-.572V36.572A.572.572,0,0,0,212,36Zm-.572,3.432h-2.288V37.144h2.288Z"
                    transform="translate(-208 -36)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_19"
                data-name="Group 19"
                transform="translate(20.591 2.288)"
              >
                <g
                  id="Group_18"
                  data-name="Group 18"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3219"
                    data-name="Path 3219"
                    d="M292,36h-3.432a.572.572,0,0,0-.572.572V40a.572.572,0,0,0,.572.572H292a.572.572,0,0,0,.572-.572V36.572A.572.572,0,0,0,292,36Zm-.572,3.432h-2.288V37.144h2.288Z"
                    transform="translate(-288 -36)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_21"
                data-name="Group 21"
                transform="translate(9.151 8.007)"
              >
                <g
                  id="Group_20"
                  data-name="Group 20"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3220"
                    data-name="Path 3220"
                    d="M132,116h-3.432a.572.572,0,0,0-.572.572V120a.572.572,0,0,0,.572.572H132a.572.572,0,0,0,.572-.572v-3.432A.572.572,0,0,0,132,116Zm-.572,3.432h-2.288v-2.288h2.288Z"
                    transform="translate(-128 -116)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_23"
                data-name="Group 23"
                transform="translate(14.871 8.007)"
              >
                <g
                  id="Group_22"
                  data-name="Group 22"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3221"
                    data-name="Path 3221"
                    d="M212,116h-3.432a.572.572,0,0,0-.572.572V120a.572.572,0,0,0,.572.572H212a.572.572,0,0,0,.572-.572v-3.432A.572.572,0,0,0,212,116Zm-.572,3.432h-2.288v-2.288h2.288Z"
                    transform="translate(-208 -116)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_25"
                data-name="Group 25"
                transform="translate(20.591 8.007)"
              >
                <g
                  id="Group_24"
                  data-name="Group 24"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3222"
                    data-name="Path 3222"
                    d="M292,116h-3.432a.572.572,0,0,0-.572.572V120a.572.572,0,0,0,.572.572H292a.572.572,0,0,0,.572-.572v-3.432A.572.572,0,0,0,292,116Zm-.572,3.432h-2.288v-2.288h2.288Z"
                    transform="translate(-288 -116)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_27"
                data-name="Group 27"
                transform="translate(9.151 13.727)"
              >
                <g id="Group_26" data-name="Group 26">
                  <path
                    id="Path_3223"
                    data-name="Path 3223"
                    d="M132,196h-3.432a.572.572,0,0,0-.572.572V200a.572.572,0,0,0,.572.572H132a.572.572,0,0,0,.572-.572v-3.432A.572.572,0,0,0,132,196Zm-.572,3.432h-2.288v-2.288h2.288Z"
                    transform="translate(-128 -196)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_29"
                data-name="Group 29"
                transform="translate(14.871 13.727)"
              >
                <g id="Group_28" data-name="Group 28">
                  <path
                    id="Path_3224"
                    data-name="Path 3224"
                    d="M212,196h-3.432a.572.572,0,0,0-.572.572V200a.572.572,0,0,0,.572.572H212a.572.572,0,0,0,.572-.572v-3.432A.572.572,0,0,0,212,196Zm-.572,3.432h-2.288v-2.288h2.288Z"
                    transform="translate(-208 -196)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_31"
                data-name="Group 31"
                transform="translate(20.591 13.727)"
              >
                <g id="Group_30" data-name="Group 30">
                  <path
                    id="Path_3225"
                    data-name="Path 3225"
                    d="M292,196h-3.432a.572.572,0,0,0-.572.572V200a.572.572,0,0,0,.572.572H292a.572.572,0,0,0,.572-.572v-3.432A.572.572,0,0,0,292,196Zm-.572,3.432h-2.288v-2.288h2.288Z"
                    transform="translate(-288 -196)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_33"
                data-name="Group 33"
                transform="translate(9.151 19.447)"
              >
                <g id="Group_32" data-name="Group 32">
                  <path
                    id="Path_3226"
                    data-name="Path 3226"
                    d="M132,276h-3.432a.572.572,0,0,0-.572.572V280a.572.572,0,0,0,.572.572H132a.572.572,0,0,0,.572-.572v-3.432A.572.572,0,0,0,132,276Zm-.572,3.432h-2.288v-2.288h2.288Z"
                    transform="translate(-128 -276)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_35"
                data-name="Group 35"
                transform="translate(14.871 19.447)"
              >
                <g id="Group_34" data-name="Group 34">
                  <path
                    id="Path_3227"
                    data-name="Path 3227"
                    d="M212,276h-3.432a.572.572,0,0,0-.572.572V280a.572.572,0,0,0,.572.572H212a.572.572,0,0,0,.572-.572v-3.432A.572.572,0,0,0,212,276Zm-.572,3.432h-2.288v-2.288h2.288Z"
                    transform="translate(-208 -276)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_37"
                data-name="Group 37"
                transform="translate(20.591 19.447)"
              >
                <g id="Group_36" data-name="Group 36">
                  <path
                    id="Path_3228"
                    data-name="Path 3228"
                    d="M292,276h-3.432a.572.572,0,0,0-.572.572V280a.572.572,0,0,0,.572.572H292a.572.572,0,0,0,.572-.572v-3.432A.572.572,0,0,0,292,276Zm-.572,3.432h-2.288v-2.288h2.288Z"
                    transform="translate(-288 -276)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_39"
                data-name="Group 39"
                transform="translate(2.288 10.867)"
              >
                <g
                  id="Group_38"
                  data-name="Group 38"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3229"
                    data-name="Path 3229"
                    d="M33.144,156h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,33.144,156Z"
                    transform="translate(-32 -156)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_41"
                data-name="Group 41"
                transform="translate(4.576 10.867)"
              >
                <g
                  id="Group_40"
                  data-name="Group 40"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3230"
                    data-name="Path 3230"
                    d="M65.144,156h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,65.144,156Z"
                    transform="translate(-64 -156)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_43"
                data-name="Group 43"
                transform="translate(2.288 13.155)"
              >
                <g id="Group_42" data-name="Group 42">
                  <path
                    id="Path_3231"
                    data-name="Path 3231"
                    d="M33.144,188h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,33.144,188Z"
                    transform="translate(-32 -188)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_45"
                data-name="Group 45"
                transform="translate(4.576 13.155)"
              >
                <g id="Group_44" data-name="Group 44">
                  <path
                    id="Path_3232"
                    data-name="Path 3232"
                    d="M65.144,188h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,65.144,188Z"
                    transform="translate(-64 -188)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_47"
                data-name="Group 47"
                transform="translate(2.288 15.443)"
              >
                <g id="Group_46" data-name="Group 46">
                  <path
                    id="Path_3233"
                    data-name="Path 3233"
                    d="M33.144,220h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,33.144,220Z"
                    transform="translate(-32 -220)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_49"
                data-name="Group 49"
                transform="translate(4.576 15.443)"
              >
                <g id="Group_48" data-name="Group 48">
                  <path
                    id="Path_3234"
                    data-name="Path 3234"
                    d="M65.144,220h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,65.144,220Z"
                    transform="translate(-64 -220)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_51"
                data-name="Group 51"
                transform="translate(2.288 17.731)"
              >
                <g id="Group_50" data-name="Group 50">
                  <path
                    id="Path_3235"
                    data-name="Path 3235"
                    d="M33.144,252h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,33.144,252Z"
                    transform="translate(-32 -252)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_53"
                data-name="Group 53"
                transform="translate(4.576 17.731)"
              >
                <g id="Group_52" data-name="Group 52">
                  <path
                    id="Path_3236"
                    data-name="Path 3236"
                    d="M65.144,252h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,65.144,252Z"
                    transform="translate(-64 -252)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_55"
                data-name="Group 55"
                transform="translate(2.288 20.019)"
              >
                <g
                  id="Group_54"
                  data-name="Group 54"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3237"
                    data-name="Path 3237"
                    d="M33.144,284h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,33.144,284Z"
                    transform="translate(-32 -284)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_57"
                data-name="Group 57"
                transform="translate(4.576 20.019)"
              >
                <g
                  id="Group_56"
                  data-name="Group 56"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3238"
                    data-name="Path 3238"
                    d="M65.144,284h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,65.144,284Z"
                    transform="translate(-64 -284)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_59"
                data-name="Group 59"
                transform="translate(2.288 22.306)"
              >
                <g id="Group_58" data-name="Group 58">
                  <path
                    id="Path_3239"
                    data-name="Path 3239"
                    d="M33.144,316h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,33.144,316Z"
                    transform="translate(-32 -316)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_61"
                data-name="Group 61"
                transform="translate(4.576 22.306)"
              >
                <g id="Group_60" data-name="Group 60">
                  <path
                    id="Path_3240"
                    data-name="Path 3240"
                    d="M65.144,316h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,65.144,316Z"
                    transform="translate(-64 -316)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_63"
                data-name="Group 63"
                transform="translate(2.288 24.594)"
              >
                <g id="Group_62" data-name="Group 62">
                  <path
                    id="Path_3241"
                    data-name="Path 3241"
                    d="M33.144,348h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,33.144,348Z"
                    transform="translate(-32 -348)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_65"
                data-name="Group 65"
                transform="translate(4.576 24.594)"
              >
                <g id="Group_64" data-name="Group 64">
                  <path
                    id="Path_3242"
                    data-name="Path 3242"
                    d="M65.144,348h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,65.144,348Z"
                    transform="translate(-64 -348)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_67"
                data-name="Group 67"
                transform="translate(2.288 26.882)"
              >
                <g id="Group_66" data-name="Group 66">
                  <path
                    id="Path_3243"
                    data-name="Path 3243"
                    d="M33.144,380h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,33.144,380Z"
                    transform="translate(-32 -380)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_69"
                data-name="Group 69"
                transform="translate(4.576 26.882)"
              >
                <g id="Group_68" data-name="Group 68">
                  <path
                    id="Path_3244"
                    data-name="Path 3244"
                    d="M65.144,380h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,65.144,380Z"
                    transform="translate(-64 -380)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_71"
                data-name="Group 71"
                transform="translate(2.288 29.17)"
              >
                <g id="Group_70" data-name="Group 70">
                  <path
                    id="Path_3245"
                    data-name="Path 3245"
                    d="M33.144,412h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,33.144,412Z"
                    transform="translate(-32 -412)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_73"
                data-name="Group 73"
                transform="translate(4.576 29.17)"
              >
                <g id="Group_72" data-name="Group 72">
                  <path
                    id="Path_3246"
                    data-name="Path 3246"
                    d="M65.144,412h-.572a.572.572,0,0,0-.572.572v.572a.572.572,0,0,0,.572.572h.572a.572.572,0,0,0,.572-.572v-.572A.572.572,0,0,0,65.144,412Z"
                    transform="translate(-64 -412)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_75"
                data-name="Group 75"
                transform="translate(28.598 7.435)"
              >
                <g id="Group_74" data-name="Group 74">
                  <path
                    id="Path_3247"
                    data-name="Path 3247"
                    d="M402.86,108h-2.288a.572.572,0,0,0-.572.572v2.288a.572.572,0,0,0,.572.572h2.288a.572.572,0,0,0,.572-.572v-2.288A.572.572,0,0,0,402.86,108Zm-.572,2.288h-1.144v-1.144h1.144Z"
                    transform="translate(-400 -108)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_77"
                data-name="Group 77"
                transform="translate(28.598 12.011)"
              >
                <g id="Group_76" data-name="Group 76">
                  <path
                    id="Path_3248"
                    data-name="Path 3248"
                    d="M402.86,172h-2.288a.572.572,0,0,0-.572.572v2.288a.572.572,0,0,0,.572.572h2.288a.572.572,0,0,0,.572-.572v-2.288A.572.572,0,0,0,402.86,172Zm-.572,2.288h-1.144v-1.144h1.144Z"
                    transform="translate(-400 -172)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_79"
                data-name="Group 79"
                transform="translate(28.598 16.587)"
              >
                <g id="Group_78" data-name="Group 78">
                  <path
                    id="Path_3249"
                    data-name="Path 3249"
                    d="M402.86,236h-2.288a.572.572,0,0,0-.572.572v2.288a.572.572,0,0,0,.572.572h2.288a.572.572,0,0,0,.572-.572v-2.288A.572.572,0,0,0,402.86,236Zm-.572,2.288h-1.144v-1.144h1.144Z"
                    transform="translate(-400 -236)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_81"
                data-name="Group 81"
                transform="translate(28.598 21.163)"
              >
                <g id="Group_80" data-name="Group 80">
                  <path
                    id="Path_3250"
                    data-name="Path 3250"
                    d="M402.86,300h-2.288a.572.572,0,0,0-.572.572v2.288a.572.572,0,0,0,.572.572h2.288a.572.572,0,0,0,.572-.572v-2.288A.572.572,0,0,0,402.86,300Zm-.572,2.288h-1.144v-1.144h1.144Z"
                    transform="translate(-400 -300)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
              <g
                id="Group_83"
                data-name="Group 83"
                transform="translate(28.598 25.738)"
              >
                <g id="Group_82" data-name="Group 82">
                  <path
                    id="Path_3251"
                    data-name="Path 3251"
                    d="M402.86,364h-2.288a.572.572,0,0,0-.572.572v2.288a.572.572,0,0,0,.572.572h2.288a.572.572,0,0,0,.572-.572v-2.288A.572.572,0,0,0,402.86,364Zm-.572,2.288h-1.144v-1.144h1.144Z"
                    transform="translate(-400 -364)"
                    fill="#043c5d"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <label>{hotelRating} Stars Hotel Included</label>
        </span>
      ) : null}

      {isTransfer ? (
        <span>
          <svg x={"0px"} y={"0px"} viewBox={"0 0 512 512"}>
            <g>
              <g>
                <path d="M450.1,187.5l-10.2-10.8l-35.8-96.5C398,63.9,382.4,53.1,365,53H109.3c-17.4,0-33,10.9-39.1,27.2l-35.3,95.3l-14.7,13.6    C7.4,200,0,216,0,232.8v140.6c0.1,23,18.8,41.6,41.8,41.6h26.4c23,0,41.7-18.6,41.8-41.6V353h248v20.4c0.1,23,18.8,41.6,41.8,41.6    h26.4c23,0,41.7-18.6,41.8-41.6V229.1C467.9,213.4,461.5,198.4,450.1,187.5z M89,87c3.2-8.5,11.3-14,20.3-14h255.8    c9,0,17.1,5.6,20.3,14l31.2,84h-23.3c-5.5-37.5-40.4-63.4-77.9-57.8c-29.9,4.4-53.4,27.9-57.8,57.8H57.8L89,87z M372.9,171h-95.1    c5.5-26.3,31.3-43.1,57.6-37.6C354.2,137.4,368.9,152.1,372.9,171z M90,373.4c-0.1,12-9.8,21.6-21.8,21.6H41.8    c-12,0-21.7-9.6-21.8-21.6v-26.2c6,3.9,13.9,5.8,21.8,5.8H90V373.4z M448,373.4c-0.1,12-9.8,21.6-21.8,21.6h-26.4    c-12,0-21.7-9.7-21.8-21.6V353h48.2c7.9,0,15.8-1.9,21.8-5.8V373.4z M426.2,333H41.8c-11.9,0.1-21.7-9.4-21.8-21.4v-78.8    c0-11,4.9-21.5,13.3-28.6c0.1-0.1,0.3-0.3,0.4-0.4L47.3,191H426l9.6,10.3c0.1,0.2,0.4,0.3,0.5,0.5c7.5,7.1,11.8,17,11.8,27.3v82.5    h0.1C447.9,323.5,438.1,333.1,426.2,333z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M132,231H57c-5.5,0-10,4.5-10,10v52c0,5.5,4.5,10,10,10h75c5.5,0,10-4.5,10-10v-52C142,235.5,137.5,231,132,231z M122,283    H67v-32h55V283z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M411,231h-75c-5.5,0-10,4.5-10,10v52c0,5.5,4.5,10,10,10h75c5.5,0,10-4.5,10-10v-52C421,235.5,416.5,231,411,231z     M401,283h-55v-32h55V283z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M282.3,273h-96.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h96.6c5.5,0,10-4.5,10-10S287.8,273,282.3,273z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M282.3,242h-96.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h96.6c5.5,0,10-4.5,10-10S287.8,242,282.3,242z" />
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
          <label>Transfer Included</label>
        </span>
      ) : null}

      <span>
        <svg x={"0px"} y={"0px"} viewBox={"0 0 34.655 34.655"}>
          <g id="services" transform="translate(0)">
            <path
              id="Path_3254"
              data-name="Path 3254"
              d="M271.591,12.711h-2.31V5.78h.578a.577.577,0,0,0,.577-.578V2.892A2.891,2.891,0,0,0,267.548,0h-5.776a2.891,2.891,0,0,0-2.888,2.888V5.2a.577.577,0,0,0,.577.578h.578v6.931h-2.31A1.735,1.735,0,0,0,256,14.443V30.616a1.729,1.729,0,0,0,.81,1.461,1.712,1.712,0,0,0-.232.85,1.733,1.733,0,1,0,3.359-.578h9.454a1.712,1.712,0,0,0-.107.578,1.733,1.733,0,0,0,3.465,0,1.711,1.711,0,0,0-.232-.85,1.729,1.729,0,0,0,.809-1.461V14.443A1.735,1.735,0,0,0,271.591,12.711ZM260.039,2.892a1.735,1.735,0,0,1,1.733-1.733h5.776a1.735,1.735,0,0,1,1.733,1.733V4.625h-1.155V2.892a.577.577,0,0,0-.577-.578h-5.776a.577.577,0,0,0-.578.578V4.625h-1.155Zm7.509,2.888h.577v6.931h-6.931V5.78h.578a.577.577,0,0,0,.577-.578V3.47h4.621V5.2A.577.577,0,0,0,267.548,5.78ZM258.306,33.5a.578.578,0,1,1,.578-.577A.578.578,0,0,1,258.306,33.5Zm12.707,0a.578.578,0,1,1,.577-.577A.578.578,0,0,1,271.013,33.5Zm1.155-2.888a.578.578,0,0,1-.578.577H257.729a.578.578,0,0,1-.578-.577V14.443a.578.578,0,0,1,.578-.577h13.862a.578.578,0,0,1,.578.577Zm0,0"
              transform="translate(-238.669 -0.004)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3255"
              data-name="Path 3255"
              d="M283.908,221.871a1.719,1.719,0,0,0-1.155.451v-.451H281.6v1.155h.684a1.712,1.712,0,0,0-.107.577v.578H281.6v3.465h.577v7.509a1.733,1.733,0,0,0,3.466,0V223.6A1.735,1.735,0,0,0,283.908,221.871Zm.578,13.284a.578.578,0,1,1-1.155,0V223.6a.578.578,0,0,1,1.155,0Zm0,0"
              transform="translate(-262.537 -206.854)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3256"
              data-name="Path 3256"
              d="M360.127,221.871a1.735,1.735,0,0,0-1.733,1.733v11.552a1.733,1.733,0,0,0,3.466,0V223.6A1.735,1.735,0,0,0,360.127,221.871Zm.578,13.284a.578.578,0,1,1-1.155,0V223.6a.578.578,0,0,1,1.155,0Zm0,0"
              transform="translate(-334.136 -206.854)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3257"
              data-name="Path 3257"
              d="M428.4,221.871a1.735,1.735,0,0,0-1.733,1.733v11.552a1.733,1.733,0,0,0,3.465,0V223.6A1.735,1.735,0,0,0,428.4,221.871Zm.578,13.284a.578.578,0,1,1-1.155,0V223.6a.578.578,0,0,1,1.155,0Zm0,0"
              transform="translate(-397.785 -206.854)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3258"
              data-name="Path 3258"
              d="M16.172,24.836a8.088,8.088,0,0,0-4.621-7.295V4.621h-.044c.778-1.66.847-3.107.043-3.911-.882-.881-2.557-.728-4.528.373L6.241.3C5.395-.544,3.58.512,2.157,1.936S-.323,5.173.524,6.02L1.3,6.8C.2,8.772.05,10.448.932,11.329A2.138,2.138,0,0,0,2.5,11.9a5.462,5.462,0,0,0,2.121-.515v6.153a8.064,8.064,0,0,0-1.3,13.812A1.728,1.728,0,1,0,5.74,32.573a8.04,8.04,0,0,0,4.691,0,1.733,1.733,0,1,0,3.43.35,1.731,1.731,0,0,0-1.009-1.569A8.072,8.072,0,0,0,16.172,24.836ZM6.208,2.264c.043-.086.081-.168.114-.247L7.839,3.534a4.888,4.888,0,0,1-1.6,2.486,5.031,5.031,0,0,1-2.486,1.6L2.238,6.1c.079-.034.161-.072.247-.114a8.632,8.632,0,0,0,2.122-1.6A8.624,8.624,0,0,0,6.208,2.264Zm-4.829,2.9a5.39,5.39,0,0,1,1.595-2.41A5.4,5.4,0,0,1,5.382,1.159c0,.011,0,.019,0,.032s-.008.041-.014.062-.019.073-.033.115-.02.056-.031.086c-.017.045-.038.094-.06.145-.016.035-.032.071-.051.109-.026.054-.057.112-.089.171-.023.043-.046.085-.073.13-.036.063-.079.13-.122.2-.031.048-.06.1-.095.145-.049.072-.106.149-.163.225-.038.051-.072.1-.113.153-.068.087-.145.178-.223.269-.039.046-.074.091-.116.138-.124.14-.259.284-.406.432s-.288.279-.427.4c-.083.074-.163.138-.243.2-.049.041-.1.085-.148.122-.117.093-.231.177-.34.253l-.011.008a3.412,3.412,0,0,1-1.23.6Zm.37,5.35c-.376-.376-.367-1.387.4-2.866l.824.823a1.007,1.007,0,0,0,.169.136c.021.013.044.021.066.033a.969.969,0,0,0,.123.061c.026.01.056.014.083.022a1.131,1.131,0,0,0,.125.033c.031.005.064,0,.1.008s.081.01.123.01h0a1.841,1.841,0,0,0,.325-.035L4.17,8.72a2.742,2.742,0,0,0,.333-.1l.018-.006a3.987,3.987,0,0,0,.367-.158l.092-.046c.121-.061.242-.128.365-.2L5.36,8.2c.127-.078.256-.164.384-.254l.095-.068c.126-.091.252-.186.377-.287l.007-.006c.128-.1.253-.212.378-.323l.092-.083c.124-.113.246-.228.365-.347C8.481,5.414,9.537,3.6,8.692,2.753l-.824-.824c1.478-.768,2.489-.777,2.866-.4.771.771-.288,3.555-2.859,6.126S2.521,11.282,1.749,10.513ZM10.4,6.476V17.091a8.007,8.007,0,0,0-4.621,0V10.779A15.273,15.273,0,0,0,8.691,8.47,16.431,16.431,0,0,0,10.4,6.476ZM4.043,33.5a.578.578,0,1,1,.577-.577A.578.578,0,0,1,4.043,33.5Zm8.086,0a.578.578,0,1,1,.578-.577A.578.578,0,0,1,12.129,33.5ZM8.086,31.768a6.931,6.931,0,1,1,6.931-6.931A6.939,6.939,0,0,1,8.086,31.768Zm0,0"
              transform="translate(0 0)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3259"
              data-name="Path 3259"
              d="M48.508,284.168l.96.643a4.616,4.616,0,0,1,3.843-2.054V281.6A5.77,5.77,0,0,0,48.508,284.168Zm0,0"
              transform="translate(-45.225 -262.541)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3260"
              data-name="Path 3260"
              d="M34.133,340.417h1.155a4.621,4.621,0,0,1,.263-1.54l-1.09-.385A5.778,5.778,0,0,0,34.133,340.417Zm0,0"
              transform="translate(-31.823 -315.581)"
              fill="#043c5d"
            ></path>
          </g>
        </svg>
        <label>Services Included</label>
      </span>

      <span>
        <svg x={"0px"} y={"0px"} viewBox={"0 0 39.584 40.95"}>
          <g id="passport" transform="translate(0)">
            <path
              id="Path_3261"
              data-name="Path 3261"
              d="M39.517,5.384a.684.684,0,0,0-.388-.35l-14.157-5A.683.683,0,0,0,24.1.453l-3.216,9.1H19.478V7.233a2.047,2.047,0,0,0-2.57-1.979L.509,9.576v.012A.673.673,0,0,0,0,10.236V38.9a2.048,2.048,0,0,0,2.048,2.048h19.11A2.048,2.048,0,0,0,23.205,38.9V32.708l5.474,1.932a.683.683,0,0,0,.871-.417l10-28.317A.681.681,0,0,0,39.517,5.384ZM17.256,6.57a.683.683,0,0,1,.857.66V9.553H5.945ZM21.84,38.9a.683.683,0,0,1-.683.683H2.048a.683.683,0,0,1-.683-.683V10.918H21.158a.683.683,0,0,1,.683.682Zm5.61-25.384.873-.414.416.871-3.316,9.385a.684.684,0,0,0,.028.522l.71,1.486-.22.623-1.354-1.4a.682.682,0,0,0-.575-.2l-.809.1V23.57l.582-.279a.684.684,0,0,0,.35-.388l1.365-3.86Zm1.287,4.556L30.123,20.3l-.237.671-1.658-1.452Zm-5.532,3.37V19.566l.672-.028Zm1.16-3.29-1.16.048v-.908l1.671-.583Zm4.124,14.973L23.205,31.26v-5.4l.64-.08,1.886,1.951a.682.682,0,0,0,.491.2.639.639,0,0,0,.145-.016.682.682,0,0,0,.5-.44l.683-1.931a.68.68,0,0,0-.028-.521l-.714-1.485.934-2.645,2.005,1.758a.683.683,0,0,0,.45.169.671.671,0,0,0,.173-.023.683.683,0,0,0,.471-.433l.683-1.931a.682.682,0,0,0-.064-.588L29.32,16.421l.8-2.265a.683.683,0,0,0-.028-.522l-.832-1.741a.683.683,0,0,0-.91-.322l-1.742.833a.681.681,0,0,0-.349.388l-.8,2.268-2.252.786V11.6a2.041,2.041,0,0,0-.979-1.738L23.342,6.7l.25-.709,1.57-4.436L38.033,6.1Zm0,0"
              transform="translate(0 0.002)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3262"
              data-name="Path 3262"
              d="M397.055,108.334l.454-1.287,1.17.413-.454,1.287Zm0,0"
              transform="translate(-363.181 -97.914)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3263"
              data-name="Path 3263"
              d="M287.328,69.6l.455-1.287,1.17.413-.455,1.287Zm0,0"
              transform="translate(-262.815 -62.484)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3264"
              data-name="Path 3264"
              d="M369.621,98.651l.455-1.287,1.17.413-.455,1.287Zm0,0"
              transform="translate(-338.088 -89.057)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3265"
              data-name="Path 3265"
              d="M314.762,79.287,315.216,78l1.17.413-.455,1.287Zm0,0"
              transform="translate(-287.909 -71.345)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3266"
              data-name="Path 3266"
              d="M342.191,88.963l.455-1.287,1.17.413-.455,1.287Zm0,0"
              transform="translate(-312.998 -80.196)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3267"
              data-name="Path 3267"
              d="M59.138,160a6.825,6.825,0,1,0,6.825,6.825A6.825,6.825,0,0,0,59.138,160Zm4.928,4.492-.931-.2c-.41-.09-.819-.162-1.233-.224-.063-.414-.136-.825-.224-1.233l-.2-.931A5.483,5.483,0,0,1,64.066,164.492Zm-10.388,2.333a5.41,5.41,0,0,1,.068-.833l1.688-.376c.259-.057.52-.1.781-.15a18.679,18.679,0,0,0,0,2.718c-.261-.045-.522-.093-.781-.15l-1.688-.375A5.411,5.411,0,0,1,53.678,166.825Zm3.922-1.538a17.3,17.3,0,0,1,3.075,0,17.233,17.233,0,0,1,0,3.075,17.228,17.228,0,0,1-3.075,0A17.233,17.233,0,0,1,57.6,165.287Zm4.459.179c.262.045.522.093.781.15l1.688.376a4.927,4.927,0,0,1,0,1.667l-1.688.375c-.259.057-.519.105-.781.151A18.6,18.6,0,0,0,62.058,165.466Zm-2.088-4.033.375,1.689c.057.259.106.519.151.781a18.6,18.6,0,0,0-2.719,0c.045-.262.093-.522.151-.781l.375-1.689A4.977,4.977,0,0,1,59.97,161.433Zm-3.167.461-.2.931c-.09.41-.162.819-.224,1.233q-.62.093-1.233.224l-.931.2A5.486,5.486,0,0,1,56.8,161.9Zm-2.594,7.262.931.2c.41.09.819.162,1.233.224q.093.62.224,1.233l.2.931a5.484,5.484,0,0,1-2.594-2.59Zm4.1,3.056-.375-1.689c-.058-.258-.106-.519-.151-.78.452.033.906.055,1.36.055s.906-.022,1.359-.055c-.045.261-.094.522-.151.78l-.375,1.689A4.977,4.977,0,0,1,58.3,172.213Zm3.167-.461.2-.931c.091-.41.162-.819.224-1.233.413-.062.825-.136,1.233-.224l.931-.2a5.481,5.481,0,0,1-2.593,2.594Zm0,0"
              transform="translate(-47.85 -146.35)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3268"
              data-name="Path 3268"
              d="M68.313,384h10.92v1.365H68.313Zm0,0"
              transform="translate(-62.485 -351.24)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3269"
              data-name="Path 3269"
              d="M84.313,416H92.5v1.365h-8.19Zm0,0"
              transform="translate(-77.12 -380.51)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3270"
              data-name="Path 3270"
              d="M124.312,352h1.365v1.365h-1.365Zm0,0"
              transform="translate(-113.707 -321.97)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3271"
              data-name="Path 3271"
              d="M92.313,352h1.365v1.365H92.313Zm0,0"
              transform="translate(-84.437 -321.97)"
              fill="#043c5d"
            ></path>
            <path
              id="Path_3272"
              data-name="Path 3272"
              d="M156.313,352h1.365v1.365h-1.365Zm0,0"
              transform="translate(-142.977 -321.97)"
              fill="#043c5d"
            ></path>
          </g>
        </svg>
        <label>Visa</label>
      </span>

      <span>
        <svg x={"0px"} y={"0px"} viewBox={"0 0 512 512"}>
          <g id="Group_122" data-name="Group 122">
            <g id="Group_121" data-name="Group 121">
              <path
                id="Path_135"
                data-name="Path 135"
                d="M437.019,74.98A256,256,0,0,0,74.98,437.019,256,256,0,1,0,437.019,74.98ZM256,482C131.383,482,30,380.617,30,256S131.383,30,256,30,482,131.383,482,256,380.617,482,256,482Z"
                fill="#043c5d"
              ></path>
            </g>
          </g>
          <g id="Group_124" data-name="Group 124">
            <g id="Group_123" data-name="Group 123">
              <path
                id="Path_136"
                data-name="Path 136"
                d="M378.3,173.859a15,15,0,0,0-21.212,0L224.634,306.319l-69.727-69.727a15,15,0,1,0-21.213,21.213l80.333,80.333a15,15,0,0,0,21.212,0L378.3,195.072A15,15,0,0,0,378.3,173.859Z"
                fill="#043c5d"
              ></path>
            </g>
          </g>
        </svg>
        <label>Free Cancellation</label>
      </span>

      <span>
        <svg x={"0px"} y={"0px"} viewBox={"0 0 34.152 34.262"}>
          <g id="cutlery" transform="translate(-0.819 0)">
            <g
              id="Group_336"
              data-name="Group 336"
              transform="translate(0.819 0)"
            >
              <g id="Group_335" data-name="Group 335" transform="translate(0)">
                <path
                  id="Path_3383"
                  data-name="Path 3383"
                  d="M10.216,2.143A4.921,4.921,0,0,0,6.281,0a4.921,4.921,0,0,0-3.935,2.14A8.155,8.155,0,0,0,.819,7.023,8.155,8.155,0,0,0,2.346,11.9a5.512,5.512,0,0,0,2.02,1.7L3.21,30.982a3.078,3.078,0,1,0,6.142,0L8.2,13.607a5.512,5.512,0,0,0,2.02-1.7,8.156,8.156,0,0,0,1.527-4.88A8.155,8.155,0,0,0,10.216,2.143ZM7.381,32.216a1.506,1.506,0,0,1-2.6-1.13l1.135-17.06c.122.01.245.017.369.017s.246-.007.368-.017l1.135,17.06A1.492,1.492,0,0,1,7.381,32.216Zm-1.1-19.744a2.832,2.832,0,0,1-.821-.123c-.022-.008-.044-.016-.067-.022-1.719-.564-3-2.727-3-5.3,0-3,1.745-5.449,3.89-5.449s3.89,2.444,3.89,5.449S8.426,12.473,6.281,12.473Z"
                  transform="translate(-0.819 -0.003)"
                  fill="#043c5d"
                ></path>
              </g>
            </g>
            <g
              id="Group_338"
              data-name="Group 338"
              transform="translate(28.652 0)"
            >
              <g
                id="Group_337"
                data-name="Group 337"
                transform="translate(0 0)"
              >
                <path
                  id="Path_3384"
                  data-name="Path 3384"
                  d="M423.064,20.471V.885l-.007,0a.786.786,0,0,0-1.192-.77,10.73,10.73,0,0,0-5.12,9.183h0V19.593a1.669,1.669,0,0,0,1.617,1.666V31.9a2.351,2.351,0,0,0,4.7,0V20.475S423.064,20.473,423.064,20.471Zm-4.651-.782a.1.1,0,0,1-.1-.1V9.3h0a9.159,9.159,0,0,1,3.176-6.969V19.689Zm3.08,12.21a.78.78,0,0,1-1.559,0V21.261h1.559Z"
                  transform="translate(-416.745 0)"
                  fill="#043c5d"
                ></path>
              </g>
            </g>
            <g
              id="Group_340"
              data-name="Group 340"
              transform="translate(15.101 0)"
            >
              <g id="Group_339" data-name="Group 339">
                <path
                  id="Path_3385"
                  data-name="Path 3385"
                  d="M222.177,0a.786.786,0,0,0-.786.786V9.716h-2V.789a.786.786,0,0,0-1.572,0V9.716h-2V.789a.786.786,0,0,0-1.572,0V12.164a2.326,2.326,0,0,0,2.323,2.323h.14l-1.1,16.572a3.006,3.006,0,1,0,6,0l-1.1-16.572h.14a2.326,2.326,0,0,0,2.323-2.323V.789A.786.786,0,0,0,222.177,0Zm-2.526,32.235a1.434,1.434,0,0,1-2.479-1.075l1.109-16.677h.643l1.109,16.677A1.419,1.419,0,0,1,219.651,32.238Zm1.741-20.075a.752.752,0,0,1-.751.751h-4.073a.752.752,0,0,1-.751-.751v-.877h5.576Z"
                  transform="translate(-214.244 -0.003)"
                  fill="#043c5d"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <label>Breakfast</label>
      </span>
    </div>
  );
};

export default ResultInclusions;
