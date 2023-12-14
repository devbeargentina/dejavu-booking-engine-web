import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const tempImg =
  "https://www.dejavutours.in/images/WhatsApp%20Image%202022-09-28%20at%202.34.00%20AM.jpeg";

const ImageGallery = (props) => {
  var divStyle = {
    height: "auto",
    width: "auto",
  };

  return (
    <div className="d-flex col-lg-12 p-0">
      {props.packageMedia?.filter(
        (x) => !x.IsDefaultImage && x.fileExtension !== "pdf"
      ).length !== 0 && (
        <>
          <div className="col-lg-8 p-0 pb-1 ">
            <div className="details-photoslider my-gallery">
              <div className="details-photoslider-wrap border-top-left-radius border-bottom-left-radius">
                <Carousel
                  showStatus={false}
                  showIndicators={false}
                  centerMode={true}
                  centerSlidePercentage={100}
                  thumbWidth={80}
                  showThumbs={false}
                >
                  {props.packageMedia
                    ?.filter(
                      (x) => !x.isDefaultImage && x.fileExtension !== "pdf"
                    )
                    .map((item, key) => {
                      return (
                        <div key={key}>
                          <img
                            src={item.fileURL || item.fileData || tempImg}
                            style={{ divStyle }}
                            alt=""
                          />
                        </div>
                      );
                    })}
                </Carousel>
                {/* <Swiper {...params}>
            {props.images.map((item, key) => {
              return (
                <div key={key}>
                  <img src={item.url} alt="" />
                </div>
              );
            })}
          </Swiper> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 p-0">
            {props.packageMedia
              ?.filter((x) => !x.isDefaultImage && x.fileExtension !== "pdf")
              .slice(-2)
              .map((item, key) => {
                return (
                  <div className="col-lg-12 pl-1 pb-1 pr-0 pt-0" key={key}>
                    <img
                      src={item.fileURL || item.fileData || tempImg}
                      alt={"img"}
                      className={`w-100  ${
                        key === 0 && "border-top-right-radius"
                      } ${key === 1 && "border-bottom-right-radius"}`}
                      style={{ height: "152px" }}
                    />
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
