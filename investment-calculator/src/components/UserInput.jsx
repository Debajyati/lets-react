export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputParagraph
          inputId="initial-investment"
          value={userInput.initialInvestment}
          changeHandler={(event) => {
            onChange("initialInvestment", event.target.value);
          }}
        />
        <InputParagraph
          inputId="annual-investment"
          value={userInput.annualInvestment}
          changeHandler={(event) => {
            onChange("annualInvestment", event.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <InputParagraph
          inputId="expected-return"
          value={userInput.expectedReturn}
          changeHandler={(event) => {
            onChange("expectedReturn", event.target.value);
          }}
        />
        <InputParagraph
          inputId="duration"
          value={userInput.duration}
          changeHandler={(event) => {
            onChange("duration", event.target.value);
          }}
        />
      </div>
    </section>
  );
}

function InputParagraph({ inputId, value, changeHandler }) {
  const inputProps = {
    type: "number",
    value: value,
    id: inputId,
    name: inputId,
    onChange: changeHandler,
    ...(inputId === "initial-investment" ? {} : (inputId === "duration" ? {min: "1"} : { min: "0" }))
  };

  return (
    <p>
      <label htmlFor={inputId}>{inputId.toUpperCase().replace("-", " ")}</label>
      <input {...inputProps} required/>
    </p>
  );
}
