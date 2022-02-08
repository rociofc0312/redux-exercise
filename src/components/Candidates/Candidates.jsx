import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCandidates } from "../../services/candidates";
import { addVote, loadCandidates, loadFiltered } from "../../store/actions";
import styles from "./Candidates.module.css";

function Candidates() {
  const candidates = useSelector((state) => state.candidates);
  const dispatch = useDispatch();

  useEffect(() => {
    getCandidates().then((data) => {
      dispatch(loadCandidates(data.map((x) => ({ ...x, show: false }))));
    });
  }, []);

  const handleClick = (id) => {
    dispatch(addVote(id));
  };

  return (
    <div className={styles.container}>
      {candidates.map((candidate) => (
        <div key={candidate.id} className={styles.card}>
          <div className={styles.card__header}>
            <img
              className={styles.header__image}
              src={candidate.url}
              alt="item"
            />
            <h5>{candidate.name}</h5>
          </div>
          <div className={styles.card__detail}>
            <button
              onClick={() => handleClick(candidate.id)}
              className={styles.button__detail}
              type="button"
            >
              Vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Candidates;
