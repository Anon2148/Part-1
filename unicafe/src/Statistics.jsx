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
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" total={props.good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" total={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" total={props.bad} />
          </tr>
          <tr>
            <StatisticLine text="all" total={sumAll()} />
          </tr>
          <tr>
            <StatisticLine text="average" total={average()} />
          </tr>
          <tr>
            <StatisticLine text="positive" total={positive()} />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
