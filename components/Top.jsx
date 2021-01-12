import SearchBar from "./SearchBar";
import styles from "./Top.module.css";

const Top = ({ updateData, initialIp }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <SearchBar updateData={updateData} initialIp={initialIp} />
    </div>
  );
};

export default Top;
