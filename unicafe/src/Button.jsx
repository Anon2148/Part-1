const Button = (props) => {
  const handleClick = () => {
    props.setStat(props.stat + 1);
  };

  return <button onClick={handleClick}>{props.text}</button>;
};

export default Button;
