import React from "react";
import { Link } from "react-router-dom";
import { CloudDownloadOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const DetailsHeader = (props) => {
  const file =
    props.packageMedia &&
    props.packageMedia.find((image) => image.fileExtension === "pdf") &&
    props.packageMedia.find((image) => image.fileExtension === "pdf");

  console.log(file);
  debugger;
  return (
    <div className="col-lg-12 d-flex p-0 mb-4">
      <div className="col-lg-10 p-0">
        <div className="col-lg-12 p-0">
          <h3 className="text-primary font-weight-bold mb-0 text-uppercase">
            {props.packageTitle}
          </h3>
        </div>
        <div className="col-lg-12 p-0 d-flex align-item-center">
          <small className="text-secondary">
            {props.destinations
              .map((destination) => destination.destinationName)
              .join("  |  ")}
          </small>
        </div>
      </div>
      <div className="col-lg-2 p-0 text-right ">
        {file && file.fileURL && (
          <a
            className="text-primary"
            href={file}
            rel="noreferrer"
            target="_blank"
            download={`Brochure - ${file.fileName}`}
          >
            <h3>
              <Tooltip title="Download Package Brochure">
                <CloudDownloadOutlined />
              </Tooltip>
            </h3>
            {/* <CloudDownloadOutlined /> Package Brochure */}
          </a>
        )}
      </div>
    </div>
  );
};

export default DetailsHeader;
