import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAsPercentage, show, showAllCandidates } from "../../store/actions";
import styles from "./Filter.module.css";

function Filter() {
  const [showAll, setShowAll] = useState(false);
  const candidates = useSelector((state) => state.candidates);
  const isPercentage = useSelector((state) => state.isPercentage);
  const dispatch = useDispatch();

  const filterAll = (showAll) => {
    setShowAll(!showAll);
    dispatch(showAllCandidates(!showAll));
  };

  const filter = (id) => {
    setShowAll(false);
    dispatch(show(id));
  };

  const handleChange = (show) => {
    dispatch(showAsPercentage(show));
  };

  return (
    <div className={styles.container}>
      <h3>Ver</h3>
      <div>
        <div>
          <input
            type="radio"
            id="total"
            checked={!isPercentage}
            onChange={() => handleChange(false)}
          />
          Total
        </div>
        <div>
          <input
            type="radio"
            id="percentage"
            checked={isPercentage}
            onChange={() => handleChange(true)}
          />{" "}
          Percentage (%)
        </div>
      </div>
      <div>
        <h4>Filtrar</h4>
        <label>
          <input
            checked={showAll}
            onChange={() => filterAll(showAll)}
            type="checkbox"
          />
          Todos
        </label>
        {candidates.map((candidate) => (
          <div key={candidate.id}>
            <label>
              <input
                type="checkbox"
                value={candidate.id}
                checked={candidate.show}
                onChange={() => filter(candidate.id)}
              />
              {candidate.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
