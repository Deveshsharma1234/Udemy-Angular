// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { UserInputModle } from "../user-input/user-imput-model";

export function calculateInvestmentResults(data: UserInputModle) {
  const annualData = [];
  const { initalInvestment, expectedReturn, AnnualInvestment, duration } = data;
  let investmentValue = initalInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + AnnualInvestment;
    const totalInterest =
      investmentValue - AnnualInvestment * year - initalInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: AnnualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initalInvestment + AnnualInvestment * year,
    });
  }

  return annualData;
}
