import React from "react";
import styles from "../module-styles/NavBar-style.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div id={styles.nav}>
        <h2>Task24</h2>
        <nav>
          <ul id={styles.navUL}>
            <li className={styles.navLi}>
              <Link to={"/home"}>Home</Link>
            </li>
            <li className={styles.navLi}>
              <Link to={"/planner"}>Planner</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
