import Candidates from "./components/Candidates/Candidates";
import Filter from "./components/Filter/Filter";
import TotalVotes from "./components/TotalVotes/TotalVotes";
import IndividualVotes from "./components/IndividualVotes/IndividualVotes";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Candidates />
      <div className={styles.container}>
        <Filter />
        <div className={styles.votes__container}>
          <TotalVotes />
          <IndividualVotes />
        </div>
      </div>
    </div>
  );
}

export default App;
