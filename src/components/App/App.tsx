import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import type { VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  };

  const resetVotes = () => {
    handleVote(null);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
    </div>
  );
};

export default App;
