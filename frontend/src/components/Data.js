import React from "react";
import styles from "./Data.module.css";

const Data = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row1}>
          <div className={styles.column1}>10</div>
          <div className={styles.column1}>500</div>
          <div className={styles.column1}>3000</div>
        </div>

        <div className={styles.row2}>
          <div className={styles.column2}>Number of meals canceled</div>
          <div className={styles.column2}>Total extras amount</div>
          <div className={styles.column2}>Total mess bill</div>
        </div>
      </div>
    </>
  );
};

export default Data;