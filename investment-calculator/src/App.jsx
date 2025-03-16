import Header from "./components/Header";
import Table from "./components/Table";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const inputIsValid = (userInput) => userInput.duration > 0;
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 4200,
    expectedReturn: 25,
    duration: 14,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevValue => {
      return {
        ...prevValue,
        [inputIdentifier]: Number(newValue),
      };
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid(userInput) && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid(userInput) && <Table input={userInput} />}
    </>
  );
}

export default App;
