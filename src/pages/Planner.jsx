import React, { useState, useReducer } from "react";
import styles from "../module-styles/Planner-style.module.css";
import NavBar from "../components/NavBar";
import TodoForm from "../components/TodoForm";

const Planner = () => {
  return (
    <div>
      <div id={styles.header}>
        <h1>TODAY'S TASKS</h1>
      </div>
      <NavBar />
      <TodoForm />
    </div>
  );
};

export default Planner;
