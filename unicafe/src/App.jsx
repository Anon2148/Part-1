import { useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Statistics from "./Statistics";

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
