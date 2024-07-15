const ChangeAnecdote = ({ setSelected, length }) => {
  const changeAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * length);
    console.log(randomNumber);
    setSelected(randomNumber);
  };

  return <button onClick={changeAnecdote}>next anecdote</button>;
};

export default ChangeAnecdote;
