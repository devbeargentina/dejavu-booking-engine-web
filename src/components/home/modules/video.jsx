import React from "react";
import Slider1 from "../../../assets/images/no-image.png";
import { Link } from "react-router-dom";
import HtmlParser from "../../../helpers/html-parser";
import { decode } from "html-entities";

const Video = ({ sliderImages, Settings, imageSliderContent }) => {
  return (
    <div className="cp-home-video position-relative">
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center"></div>
      </div>
      <iframe
        className="videoFrame"
        width="100%"
        src="https://www.youtube.com/embed/rc1hXYMKdwg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
