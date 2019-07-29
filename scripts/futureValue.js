"use strict";

// This function validates the form data that the user inputs
function formValidation()
{
    let principalCheck = document.forms["mortgageForm"]["principalAmount"].value;
    if (isNaN(principalCheck) == true)
    {
        alert("Principal value must be a number");
        return false;
    }
    else if (principalCheck < 0)
    {
        alert("Principal value must be positive");
        return false;
    }
    let interestCheck = document.forms["mortgageForm"]["interestRate"].value
    if (isNaN(interestCheck) == true)
    {
        alert("Interest value must be a number");
        return false;
    }
    else if (interestCheck < 0)
    {
        alert("Interest rate must be positive");
        return false;
    }
    else if (interestCheck > 100)
    {
        alert("Interest rate must be below 100%");
        return false;
    }
    let termCheck = document.forms["mortgageForm"]["mortgageLength"].value
    if (isNaN(termCheck) == true)
    {
        alert("Term length must be a number");
        return false;
    }
    else if (termCheck < 5)
    {
        alert("Mortgage length must be at least five years");
        return false;
    }
    else if (termCheck > 50)
    {
        alert("Mortgage length cannot be greater than fifty years");
        return false;
    }
}

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