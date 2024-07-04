import { useState } from "react";
import Title from "./Title";
import Statistic from "./Statistic";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title text="give feedback" />
      <Button stat={good} setStat={setGood} text="good" />
      <Button stat={neutral} setStat={setNeutral} text="neutral" />
      <Button stat={bad} setStat={setBad} text="bad" />
      <Title text="statistics" />
      <Statistic text="good" total={good} />
      <Statistic text="neutral" total={neutral} />
      <Statistic text="bad" total={bad} />
    </div>
  );
};

export default App;
