import React from "react";
import { useSelector } from "react-redux";
import styles from "./TotalVotes.module.css";

function TotalVotes() {
  const totalVotes = useSelector((state) => state.totalVotes);

  return (
    <div className={styles.container}>
      <h2>Total votes: {totalVotes}</h2>
    </div>
  );
}

export default TotalVotes;
