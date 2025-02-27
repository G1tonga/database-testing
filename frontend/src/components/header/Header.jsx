import React from "react";
import styles from "./Header.module.css";

function Header({ className }) {
  return (
    <>
      <header className={className}>
        <nav>
          <ul className={styles["header-items"]}>
            <li className={styles["logo"]}>Logo </li>
            <li className={styles["company-name"]}>Company Name </li>
            <li className={styles["page-title"]}>Perfect Order Page </li>
            <li className={styles["search-bar"]}>
              <input type="text" placeholder="Search for something" />
            </li>
            <li className={styles["setting-icon"]}>settings </li>
            <li className={styles["notifications-icon"]}>Notifications </li>
            <li className={styles["avatar"]}>Avatar </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
