import Input from "./Input";
import SubmitButton from "./SubmitButton";
import styles from "./SearchBar.module.css";

const SearchBar = ({ updateData, initialIp }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value;

    fetch(`api/getData/${value}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        updateData(json)
      })
      .catch(err => console.log(err))
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input initialIp={initialIp}/>
      <SubmitButton />
    </form>

  );
};

export default SearchBar;
