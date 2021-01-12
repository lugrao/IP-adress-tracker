import InfoContainer from "./InfoContainer";
import SearchBar from "./SearchBar";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <SearchBar />
    </div>
  );
};

export default Top;
