import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].annualInvestment - resultsData[0].interest;
  console.table(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((row) => {
          const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
          const totalAmountInvested = row.valueEndOfYear - totalInterest;
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
