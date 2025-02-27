import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar({ className }) {
  return (
    <>
      <div className={className}>
        <nav>
          <ul className={styles["side-menu-items"]}>
            <li>Perfect Order Rate</li>
            <li>Shipment date</li>
            <li>Number of Shipments Page </li>
            <li>Transportation Cost Page </li>
            <li>Average Delivery Time</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Sidebar;
