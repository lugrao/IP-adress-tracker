import styles from "./SubmitButton.module.css";

const SubmitButton = () => {
  return (
      <button className={styles.button} type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>

  );
};

export default SubmitButton;
