import Input from "./Input";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>IP Adress Tracker</h1>
      <Input />
    </div>
  );
};

export default Top;
