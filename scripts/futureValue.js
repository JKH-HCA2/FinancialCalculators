"use strict";

// Future Value Calculator - this function can be used to determine the future value
// of a principal dollar amount given the interest rate and term length

function getFutureValue()
{
    // principal is the initial value of the mortgage loan
    let principal = document.getElementById("principalAmount").value;
    principal = parseFloat(principal);

    // interestRate is the expected yearly interest rate
    let interestRate = document.getElementById("interestRate").value;
    interestRate = parseFloat(interestRate);

    // interestPct is the interestRate after being converted to a decimal
    let interestPct = interestRate / 1200;

    // interestPct is the interestRate after being converted to a decimal
    let termLength = document.getElementById("termLength").value;
    termLength = parseFloat(termLength);

    // numPeriods is the number of monthly payments until the loan is paid off
    let numPeriods = termLength * 12;

    // futValue is the future value of the investment
    let futValue = principal * Math.pow(1 + interestPct, numPeriods)

    // netInterest is the difference between the future value and the initial value of the investment
    let netInterest = futValue - principal

    // futValueField is the field where the future value displays on the page
    const futValueField = document.getElementById("futureValue");
    futValueField.value = "$ " + futValue.toFixed(2);

    // netInterestField is the field where the net interest displays on the page
    const netInterestField = document.getElementById("netInterest");
    netInterestField.value = "$ " + netInterest.toFixed(2);
}

window.onload = function()
{
    const btn = document.getElementById("futValCalc")
    btn.onclick = getFutureValue;
}