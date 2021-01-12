import React from "react";
import styles from "./Input.module.css";

const Input = ({ initialIp }) => {

  const [input, setInput] = React.useState(null);
  React.useEffect(()=> {
    setInput(initialIp)
  }, [initialIp])

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleInput}
      value={input}
      className={styles.searchBar}
    ></input>
  );
};

export default Input;
