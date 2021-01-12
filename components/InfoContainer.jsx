import styles from "./InfoContainer.module.css";

const InfoContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.infoTitle}>IP ADDRESS</h3>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.info}>
        <h3 className={styles.infoTitle}>LOCATION</h3>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.info}>
        <h3 className={styles.infoTitle}>TIMEZONE</h3>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.info}>
        <h3 className={styles.infoTitle}>ISP</h3>
      </div>
    </div>
  );
};
export default InfoContainer;
