import React from "react";
import styles from "./Data.module.css";

const Data = ({messBillData, extrasBillData}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row1}>
          <div className={styles.column1}>{messBillData.breakfastBill}</div>
          <div className={styles.column1}>{messBillData.lunchBill}</div>
          <div className={styles.column1}>{messBillData.dinnerBill}</div>
          <div className={styles.column1}>{messBillData.totalBill}</div>
          <div className={styles.column1}>{extrasBillData.extrasBill}</div>
        </div>

        <div className={styles.row2}>
          <div className={styles.column2}>Breakfast Bill</div>
          <div className={styles.column2}>Lunch Bill</div>
          <div className={styles.column2}>Dinner Bill</div>
          <div className={styles.column2}>Total Mess Amount</div>
          <div className={styles.column2}>Total Extras Amount</div>
        </div>
      </div>
    </>
  );
};

export default Data;