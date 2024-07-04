const StatisticLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.total}</td>
    </>
  );
};

export default StatisticLine;
