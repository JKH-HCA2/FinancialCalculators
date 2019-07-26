"use strict"

// Mortgage Calculator - this function can be used to determine the monthly payments of
// a mortgage given the principal, interest rate, and term length of a mortgage.
function getMortgage()
{
    let principal = document.getElementById("principalAmount").value;
    principal = parseFloat(principal);

    let interestRate = document.getElementById("interestRate").value;
    interestRate = parseFloat(interestRate);

    let interestPct = interestRate / 1200;

    let mortgageLength = document.getElementById("mortgageLength").value;
    mortgageLength = parseFloat(mortgageLength);

    let numPayments = mortgageLength * 12;

    let mortgagePayment = principal * ( ( interestPct * Math.pow((1 + interestPct), numPayments) ) / ( Math.pow( (1 + interestPct), numPayments ) - 1 ) )

    const mortgageField = document.getElementById("mortgagePayments");
    mortgageField.value = mortgagePayment.toFixed(2);
}

window.onload = function()
{
    const btn = document.getElementById("mortgageCalc")
    btn.onclick = getMortgage;
}