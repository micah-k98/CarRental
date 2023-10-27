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

    //under 25 radio button
    const notUnder25 = document.getElementById("notUnder25");
    const under25 = document.getElementById("under25");

    rental.under25SurchargeCost = 0;
    if (under25.checked) rental.under25SurchargeCost = rental.carRentalCost * .30; //30% surcharged based on the instructions

    //total cost
    rental.totalCost = +(rental.carRentalCost + rental.optionsCost + rental.under25SurchargeCost).toFixed(2);

    

    displayOutput(rental);
}

function calculateCarRentalPerDay(rental)
{
    return +(rental.carRentalPerDay * rental.numOfDays).toFixed(2);
}

function displayOutput(rental)
{
    document.getElementById("carRentalCost").innerText = rental.carRentalCost;
    document.getElementById("optionsCost").innerText = (rental.optionsCost).toFixed(2);
    document.getElementById("under25SurchargeCost").innerText = (rental.under25SurchargeCost).toFixed(2);
    document.getElementById("totalCost").innerText = rental.totalCost;
}