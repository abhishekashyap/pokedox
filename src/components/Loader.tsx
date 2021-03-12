import React from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <h1>Loading...</h1>
    </div>
  );
}
