import styles from "./InfoContainer.module.css";
import React from "react";

const InfoContainer = ({ data }) => {

  return (

    <div className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.infoTitle}>IP ADDRESS</h3>
        <p className={styles.infoContent}>{data.ip ? data.ip : ""}</p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.info}>
        <h3 className={styles.infoTitle}>LOCATION</h3>
        <p className={styles.infoContent}>{data.location ? data.location.region : ""}</p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.info}>
        <h3 className={styles.infoTitle}>TIMEZONE</h3>
        <p className={styles.infoContent}>{data.location ? "UTC " + data.location.timezone : ""}</p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.info}>
        <h3 className={styles.infoTitle}>ISP</h3>
        <p className={styles.infoContent}>{data.isp ? data.isp : ""}</p>
      </div>
    </div>

  );
};
export default InfoContainer;
