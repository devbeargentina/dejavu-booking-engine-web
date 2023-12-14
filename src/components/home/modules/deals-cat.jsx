import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { Context } from "../../../context/context";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchPackageByCategory,
  FetchPackageByState,
} from "../../../redux/packageSliceNew";
import flight from "../../../assets/images/web/states/gujarat.jpg";

const getImageSrc = async (name) => {
  const image = await import(`../../../assets/images/web/states/${name}.jpg`);
  return image.default;
};
const DealsCategoryWise = (props) => {
  const [images, setImages] = useState([]);
  const { State } = useContext(Context);
  const { Contents } = State;

  const dispatch = useDispatch();

  const { loading, packagesByCategory } = useSelector((state) => state.package);

  useEffect(() => {
    if (!packagesByCategory || packagesByCategory.length === 0) {
      dispatch(FetchPackageByCategory());
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageSources = await Promise.all(
        mappedArray.map((x) => getImageSrc(x.name.toLowerCase()))
      );
      setImages(imageSources);
    };

    fetchImages();
  }, []);

  const css = `
.AF-005 .cp-home-deals-cat img {
  height: 300px;
  max-height: 300px;
}
.AF-005 .populer-deals-cat h5 {
  text-align: center;
  background: #fff0 !important;
  color: #fff !important;
  overflow: hidden;
}.AF-005 .cp-home-deals-cat h5 a {
  color: #fff;
  font-size: 19px;
  font-weight: 600;
}
.populer-deals-cat h5 {
  text-align: left;
  color: #fff !important;
  background: #08080800 !important;
  font-size: 18px !important;
  overflow: hidden;
  text-transform: uppercase;
}

.AF-005 .cp-home-deals-cat .after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .2);
  color: #FFF;
  border-radius: 1rem;
}
`;

  const params = {
    navigation: {
      nextEl: ".swiper-button-next-deal-cat",
      prevEl: ".swiper-button-prev-deal-cat",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };
  const goNext = () => {
    document.querySelector(".swiper-button-next-deal-cat").click();
  };

  const goPrev = () => {
    document.querySelector(".swiper-button-prev-deal-cat").click();
  };

  const mappedArray = Object.entries(packagesByCategory).map(([key, value]) => {
    return { name: key, count: value };
  });
  return (
    <React.Fragment>
      <style>{css}</style>
      <div className="cp-home-deals-cat bg-white ">
        <div className="container">
          <h2 className="deals-title">Explore Trips by Category</h2>
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper-button-prev-custom" onClick={goPrev}></div>
              <div className="swiper-button-next-custom" onClick={goNext}></div>
              <Swiper {...params}>
                {mappedArray &&
                  mappedArray.map((x, key) => (
                    <div key={key} className="">
                      <div className="bg-white populer-deals-cat  overlay_3">
                        <div>
                          <img
                            key={x.name}
                            src={images[key] || flight}
                            alt="sfd"
                            className="img-fluid"
                          />
                          <div className="after"></div>
                          <div className="position-absolute top-50 start-50 translate-middle rows justify-content-center align-items-center overflow-inherit mt-5 w-100 font-weight-bold">
                            <div className="col-lg-12 d-flex justify-content-center align-items-center">
                              <h5>
                                <Link to={"/list/state/" + x.name}>
                                  {x.name}
                                </Link>
                              </h5>
                            </div>
                            <Link
                              to={"/details/" + x.name}
                              className="btn-booknow mt-3"
                            >
                              {`${x.count} TOURS`}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Swiper>
            </div>
          </div>
          <div className="row">
            <div className="d-flex align-items-center justify-content-center mt-2 h-100 ">
              {mappedArray.length > 4 && (
                <Link
                  to={"/list/deals"}
                  className="btn-showmore"
                  style={{ display: "none" }}
                >
                  SHOW MORE
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DealsCategoryWise;
