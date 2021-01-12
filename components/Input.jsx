import React from "react";
import styles from "./Input.module.css";

const Input = () => {

  const [input, setInput] = React.useState("");
  
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleInput}
      value={input}
      placeholder={"Search for any IP address or domain"}
      className={styles.searchBar}
    ></input>
  );
};

export default Input;
