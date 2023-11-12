import { React, useContext } from "react";
import { AuthContext } from "../../share/context";
import styles from "./Header.module.css";

const Header = () => {
  const { isAuthenticated, toggleAuthentication } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <button className={styles.butt} onClick={toggleAuthentication}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </header>
  );
};

export default Header;
