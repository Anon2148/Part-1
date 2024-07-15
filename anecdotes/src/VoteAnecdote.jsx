const VoteAnecdote = ({ selected, votes, setVotes }) => {
  const addVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
    console.log(votes);
  };
  return <button onClick={addVote}>vote</button>;
};

export default VoteAnecdote;
