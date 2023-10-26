"use strict"

window.onload = function()
{
    const estimateButton = document.getElementById("estimateButton");
    estimateButton.onclick = estimateButtonClicked;
}

function estimateButtonClicked()
{
    const rental = {};

    //input
    rental.pickupDate = document.getElementById("pickupDateInput").value;
    rental.numOfDays = document.getElementById("numOfDaysInput").value;

    //rule
    rental.carRentalPerDay = 29.99;
    rental.carRentalCost = calculateCarRentalPerDay(rental)

    //checkboxes for options
    const tollTag = document.getElementById("tollTag");
    const gps = document.getElementById("gps");
    const roadsideAssistance = document.getElementById("roadsideAssistance");

    rental.optionsCost = 0;
    if (tollTag.checked) rental.optionsCost += rental.numOfDays * 3.95;
    if (gps.checked) rental.optionsCost += rental.numOfDays * 2.95;
    if (roadsideAssistance.checked) rental.optionsCost += rental.numOfDays * 2.95;





    

    

    displayOutput(rental);
}

function calculateCarRentalPerDay(rental)
{
    return rental.carRentalPerDay * rental.numOfDays;
}

function displayOutput(rental)
{
    document.getElementById("carRentalCost").innerText = (rental.carRentalCost).toFixed(2);
    document.getElementById("optionsCost").innerText = (rental.optionsCost).toFixed(2);
}