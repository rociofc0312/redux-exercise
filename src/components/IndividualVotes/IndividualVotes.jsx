import React from "react";
import { useSelector } from "react-redux";

function IndividualVotes() {
  const candidates = useSelector((state) => state.candidates);
  const isPercentage = useSelector((state) => state.isPercentage);
  const totalVotes = useSelector((state) => state.totalVotes);

  return (
    <div>
      {candidates
        .filter((candidate) => candidate.show)
        .map((candidate) => (
          <h4 key={candidate.id}>
            {candidate.name}:{" "}
            {isPercentage
              ? ((candidate.votes * 100) / totalVotes).toFixed(2) + "%"
              : candidate.votes}
          </h4>
        ))}
    </div>
  );
}

export default IndividualVotes;
