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

    

    displayOutput(rental);
}

function calculateCarRentalPerDay(rental)
{
    return rental.carRentalPerDay * rental.numOfDays;
}

function displayOutput(rental)
{
    document.getElementById("carRentalCost").innerText = rental.carRentalCost;
}