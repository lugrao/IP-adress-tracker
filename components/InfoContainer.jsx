import styles from "./InfoContainer.module.css";

const InfoContainer = ({ data }) => {
  return (
    data && (
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>IP ADDRESS</h3>
          <p className={styles.infoContent}>{data.ip}</p>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>LOCATION</h3>
          <p className={styles.infoContent}>{data.location.region}</p>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>TIMEZONE</h3>
          <p className={styles.infoContent}>UTC {data.location.timezone}</p>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>ISP</h3>
          <p className={styles.infoContent}>{data.isp}</p>
        </div>
      </div>
    )
  );
};
export default InfoContainer;
