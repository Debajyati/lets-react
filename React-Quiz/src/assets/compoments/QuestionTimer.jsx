import React from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingtime, setRemainingtime] = React.useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);

    return () => {
      return;
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingtime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      return;
    };
  }, []);

  return <progress id="question-time"></progress>;
};

export default QuestionTimer;
