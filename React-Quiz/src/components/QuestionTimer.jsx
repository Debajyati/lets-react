import React from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = React.useState(timeout);

  React.useEffect(() => {
    console.log("SETTING TIMEOUT");
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  React.useEffect(() => {
    console.log("SETTING INTERVAL");
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
