import React from "react";
import styles from "./Data.module.css";

const Data = () => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.row1}>
          <div class={styles.column1}>10</div>
          <div class={styles.column1}>500</div>
          <div class={styles.column1}>3000</div>
        </div>

        <div class={styles.row2}>
          <div class={styles.column2}>Number of meals canceled</div>
          <div class={styles.column2}>Total extras amount</div>
          <div class={styles.column2}>Total mess bill</div>
        </div>
      </div>
    </>
  );
};

export default Data;