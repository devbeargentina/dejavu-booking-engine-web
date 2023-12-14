import React from "react";

const BookingStep = ({ activeStep }) => {
  return (
    <div className="booking-steps bg-white ">
      <div className="container">
        <div className="booking-steps-wrap">
          <div>
            <ul>
              <li
                className={
                  activeStep === "Step1"
                    ? "active"
                    : "Step1"
                    ? "active done"
                    : null
                }
              >
                Booking Initiated
              </li>
              <li
                className={
                  activeStep === "Step2"
                    ? "active"
                    : activeStep === "Step3"
                    ? "active done"
                    : activeStep === "Step4"
                    ? "active done"
                    : null
                }
              >
                Add Personal <br />
                Detail
              </li>
              <li
                className={
                  activeStep === "Step3"
                    ? "active"
                    : activeStep === "Step4"
                    ? "active done"
                    : null
                }
              >
                Make Payment
              </li>
              <li className={activeStep === "Step4" ? "active done" : null}>
                Booking Done
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStep;
