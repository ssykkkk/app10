import { React,  useContext } from 'react';
import {AuthContext} from '../../share/context';
import styles from "./Content.module.css"
const Content = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className={styles.main}>
      {isAuthenticated ? <h1 className={styles.logout}>Hello, user!</h1> : <h1 className={styles.login}>Please, login!</h1>}
    </div>
  );
};

export default Content;
