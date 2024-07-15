const VoteAnecdote = ({
  selected,
  votes,
  setVotes,
  mostVoted,
  setMostVoted,
}) => {
  const addVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
    updateMostVoted(copyVotes);
  };
  const updateMostVoted = (copyVotes) => {
    for (let index = 0; index < copyVotes.length; ++index) {
      if (copyVotes[index] > copyVotes[mostVoted]) {
        setMostVoted(index);
      }
    }
  };
  return <button onClick={addVote}>vote</button>;
};

export default VoteAnecdote;
