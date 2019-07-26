"use strict";

// Present Value Calculator - this function can be used to determine the monthly payments of
// a mortgage given the principal, interest rate, and term length of a mortgage.
function getPresentValue()
{
    let annualPayout = document.getElementById("annualPayout").value;
    annualPayout = parseFloat(annualPayout);

    let interestRate = document.getElementById("interestRate").value;
    interestRate = parseFloat(interestRate);

    let interestPct = interestRate / 100;

    let termLength = document.getElementById("termLength").value;
    termLength = parseInt(termLength);

    let presentValue = annualPayout * ( (1 - Math.pow(1 + interestPct, -termLength)) / interestPct)

    const presValueField = document.getElementById("presentValue");
    presValueField.value = "$ " + presentValue.toFixed(2);
}

window.onload = function()
{
    const btn = document.getElementById("presValCalc")
    btn.onclick = getPresentValue;
}