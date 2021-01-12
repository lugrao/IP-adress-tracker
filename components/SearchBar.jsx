import Input from "./Input";
import SubmitButton from "./SubmitButton";
import styles from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={styles.container}>
      <Input />
      <SubmitButton />
    </div>
  );
};

export default SearchBar;
