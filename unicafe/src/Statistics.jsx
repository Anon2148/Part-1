import Statistic from "./Statistic";

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

  return (
    <>
      <Statistic text="good" total={props.good} />
      <Statistic text="neutral" total={props.neutral} />
      <Statistic text="bad" total={props.bad} />
      <Statistic text="all" total={sumAll()} />
      <Statistic text="average" total={average()} />
      <Statistic text="positive" total={positive()} />
    </>
  );
};

export default Statistics;
