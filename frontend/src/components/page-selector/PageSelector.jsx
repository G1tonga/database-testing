import React from "react";
import { useNavigate } from "react-router-dom";

function PageSelector() {
  //   const navigate = useNavigate();

  //   const handleChange = (event) => {
  //     const selectedRoute = event.target.value;
  //     if (selectedRoute) {
  //       navigate(selectedRoute);
  //     }
  //   };

  return (
    <>
      <div className="page-selector">
        <label for="page-select">Go to:</label>
        <select id="page-select" onchange={"handleChange"} defaultValue={""}>
          <option value="" disabled selected>
            Perfect Order Rate
          </option>
          <option value="/shipment-page">Shipment date</option>
          <option value="/number-of-shipment-page">
            Number of Shipments Page
          </option>
          <option value="/transportation-cost-page">
            Transportation Cost Page
          </option>
          <option value="/average-delivery-time">Average Delivery Time</option>
        </select>
      </div>
    </>
  );
}

export default PageSelector;
