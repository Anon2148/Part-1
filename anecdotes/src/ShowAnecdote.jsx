const ShowAnecdote = ({ title, anecdote, votes }) => {
  return (
    <>
      <h1>{title}</h1>
      {anecdote}
      <br />
      has {votes} votes
    </>
  );
};

export default ShowAnecdote;
