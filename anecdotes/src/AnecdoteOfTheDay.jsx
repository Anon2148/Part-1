import ChangeAnecdote from "./ChangeAnecdote";
import VoteAnecdote from "./VoteAnecdote";
import ShowAnecdote from "./ShowAnecdote";

const AnecdoteOfTheDay = ({
  anecdotes,
  votes,
  setVotes,
  selected,
  setSelected,
  mostVoted,
  setMostVoted,
}) => {
  return (
    <>
      <ShowAnecdote
        title="Anecdote of the day"
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
      />
      <br />
      <VoteAnecdote
        selected={selected}
        votes={votes}
        setVotes={setVotes}
        mostVoted={mostVoted}
        setMostVoted={setMostVoted}
      />
      <ChangeAnecdote setSelected={setSelected} length={anecdotes.length} />
    </>
  );
};

export default AnecdoteOfTheDay;
