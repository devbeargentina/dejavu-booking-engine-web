import React from "react";
import { Link } from "react-router-dom";
import TimerIcon from "../../../assets/images/web/SVG/icons-13.svg";
import StarRating from "./star-rating";
import {
  RiseOutlined,
  CompassOutlined,
  EnvironmentOutlined,
  SafetyCertificateOutlined,
  BankOutlined,
  CoffeeOutlined,
  ExperimentOutlined,
  GoldOutlined,
  AimOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  HeartOutlined,
  CarOutlined,
  ShopOutlined,
  FireOutlined,
  BugOutlined,
  GiftOutlined,
  GlobalOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import dataJSON from "../../../data.json";

const DetailTypes = (props) => {
  return (
    <div className="col-lg-12 p-0 pb-2 mb-2 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        {props.category && (
          <div class="d-flex align-items-center">
            <div className="d-flex pull-left align-items-center mr-1">
              {/* <img src={TimerIcon} alt="" /> */}
              <AimOutlined style={{ fontSize: "22px", color: "#f93a3ae6" }} />
              {/* <RiseOutlined style={{ color: "red", height: "20px" }} />
              {" "}
              <CoffeeOutlined /> <EnvironmentOutlined /> <BugOutlined />
              <CoffeeOutlined /> <ShopOutlined /> <GiftOutlined />
              <FireOutlined />
              <HeartOutlined /> <VideoCameraOutlined /> <CarOutlined />
              <HomeOutlined />
              <StarTwoTone twoToneColor="#eb2f96" /> */}
            </div>
            <div className="">
              <span className="w-100 d-block h-25 text-secondary">
                Category
              </span>
              <span className="w-100 d-block h-25 font-weight-bold">
                {props.category.join(" | ")}
              </span>
            </div>
          </div>
        )}
        {props.packageType && (
          <div class="d-flex align-items-center">
            <div className="d-flex pull-left align-items-center mr-1">
              <GoldOutlined style={{ fontSize: "22px", color: "#f93a3ae6" }} />
            </div>
            <div className="">
              <span className="w-100 d-block h-25 text-secondary">Type</span>
              <span className="w-100 d-block h-25 font-weight-bold">
                {props.packageType.join(" | ")}
              </span>
            </div>
          </div>
        )}
        {props.bestSeasion && (
          <div class="d-flex align-items-center">
            <div className="d-flex pull-left align-items-center mr-1">
              <SafetyCertificateOutlined
                style={{ fontSize: "22px", color: "#f93a3ae6" }}
              />
            </div>
            <div className="">
              <span className="w-100 d-block h-25 text-secondary">Seasion</span>
              <span className="w-100 d-block h-25 font-weight-bold">
                {props.bestSeasion.join(" | ")}
              </span>
            </div>
          </div>
        )}
        {parseInt(props.starRating) && (
          <div class="d-flex align-items-center">
            <div className="d-flex pull-left align-items-center mr-1">
              <CompassOutlined
                style={{ fontSize: "22px", color: "#f93a3ae6" }}
              />
            </div>
            <div className="">
              <span className="w-100 d-block h-25 text-secondary">Rating</span>
              <span className="w-100 d-block h-25">
                <StarRating starRating={parseInt(props.starRating)} />
              </span>
            </div>
          </div>
        )}
        {props.maxAltitude && (
          <div class="d-flex align-items-center">
            <div className="d-flex pull-left align-items-center mr-1">
              <GlobalOutlined
                style={{ fontSize: "22px", color: "#f93a3ae6" }}
              />
            </div>
            <div className="">
              <span className="w-100 d-block h-25 text-secondary">
                Max Altitude
              </span>
              <span className="w-100 d-block h-25 font-weight-bold">
                {props.maxAltitude}
              </span>
            </div>
          </div>
        )}

        {props.difficulty && (
          <div class="d-flex align-items-center">
            <div className="d-flex pull-left align-items-center mr-1">
              <BankOutlined style={{ fontSize: "22px", color: "#f93a3ae6" }} />
            </div>
            <div className="">
              <span className="w-100 d-block h-25 text-secondary">
                Difficulty
              </span>
              <span className="w-100 d-block h-25 font-weight-bold">
                {props.difficulty}
              </span>
            </div>
          </div>
        )}

        {props.distance && (
          <div class="d-flex align-items-center">
            <div className="d-flex pull-left align-items-center mr-1">
              <EnvironmentOutlined
                style={{ fontSize: "22px", color: "#f93a3ae6" }}
              />
            </div>
            <div className="">
              <span className="w-100 d-block h-25 text-secondary">
                Distance
              </span>
              <span className="w-100 d-block h-25 font-weight-bold">
                {props.distance}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailTypes;
