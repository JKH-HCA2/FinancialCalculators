"use strict";

// Mortgage Calculator - this function can be used to determine the monthly payments of
// a mortgage given the principal, interest rate, and term length of a mortgage.
function getMortgage()
{
    // principal is the initial value of the mortgage loan
    let principal = document.getElementById("principalAmount").value;
    principal = parseFloat(principal);

    // interestRate is the expected yearly interest rate
    let interestRate = document.getElementById("interestRate").value;
    interestRate = parseFloat(interestRate);

    // interestPct is the interestRate after being converted to a decimal
    let interestPct = interestRate / 1200;

    // mortgageLength is the desired number of years to payoff the loan
    let mortgageLength = document.getElementById("mortgageLength").value;
    mortgageLength = parseFloat(mortgageLength);

    // numPayments is the number of monthly payments until the loan is paid off
    let numPayments = mortgageLength * 12;

    // mortgagePayment is the value of each monthly payment
    let mortgagePayment = principal * ( ( interestPct * Math.pow((1 + interestPct), numPayments) ) / ( Math.pow( (1 + interestPct), numPayments ) - 1 ) )

    // mortgageField is the field where the mortgage payment displays on the page
    const mortgageField = document.getElementById("mortgagePayments");
    mortgageField.value = "$ " + mortgagePayment.toFixed(2);

    // totalCost is the total dollar value you will pay over the duration of the loan
    let totalCost = numPayments * mortgagePayment;

    // costfield is the field where the totalCost will display on the page
    const costField = document.getElementById("totalCost");
    costField.value = "$ " + totalCost.toFixed(2);
}

window.onload = function()
{
    const btn = document.getElementById("mortgageCalc")
    btn.onclick = getMortgage;
}