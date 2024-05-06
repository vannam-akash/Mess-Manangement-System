import React from "react";
import styles from "./UnenrolledFallback.module.css";


function UnenrolledFallback() {
  return (
    <>
      <div className={styles.fallback}>Not enrolled in a mess.</div>
    </>
  );
}

export default UnenrolledFallback;
