import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  const goodValue = 1;
  const badValue = -1;

  const sumAll = () => {
    return props.good + props.neutral + props.bad;
  };

  const average = () => {
    const total = sumAll();
    return (props.good * goodValue + props.bad * badValue) / total;
  };

  const positive = () => {
    const total = sumAll();
    return (props.good / total) * 100;
  };

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <StatisticLine text="good" total={props.good} />
      <StatisticLine text="neutral" total={props.neutral} />
      <StatisticLine text="bad" total={props.bad} />
      <StatisticLine text="all" total={sumAll()} />
      <StatisticLine text="average" total={average()} />
      <StatisticLine text="positive" total={positive()} />
    </>
  );
};

export default Statistics;
