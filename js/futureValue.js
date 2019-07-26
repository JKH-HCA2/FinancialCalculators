"use strict";

// Future Value Calculator - this function can be used to determine the future value
// of a principal dollar amount given the interest rate and term length

function getFutureValue()
{
    let principal = document.getElementById("principalAmount").value;
    principal = parseFloat(principal);

    let interestRate = document.getElementById("interestRate").value;
    interestRate = parseFloat(interestRate);

    let interestPct = interestRate / 1200;

    let termLength = document.getElementById("termLength").value;
    termLength = parseFloat(termLength);

    let numPeriods = termLength * 12;

    let futValue = principal * Math.pow(1 + interestPct, numPeriods)

    let netInterest = futValue - principal

    const futValueField = document.getElementById("futureValue");
    futValueField.value = "$ " + futValue.toFixed(2);

    const netInterestField = document.getElementById("netInterest");
    netInterestField.value = "$ " + netInterest.toFixed(2);
}

window.onload = function()
{
    const btn = document.getElementById("futValCalc")
    btn.onclick = getFutureValue;
}