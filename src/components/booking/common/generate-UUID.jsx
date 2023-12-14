import React from "react";

const generateUUID = (type) => {
  let dt = new Date().getTime();
  let strXX = type
    ? "xxxxxxx7" + type + "7xxxxxxxxxxx"
    : "xxxxxxx7xxxx7xxxxxxxxxxx";
  let uuid = strXX.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

export default generateUUID;
