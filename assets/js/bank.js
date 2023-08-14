/*
# Banking Calculations
*/


// Global Variables
// Get total balance
var totalBalance = document.getElementById("total-balance");
// Get the current diposit balance
var dipositBalance = document.getElementById("diposit-balance");
// Get the current withdraw balance
var withdrawBalance = document.getElementById("withdraw-balance");


// If deposit button is clicked
document.getElementById("btn-diposit").addEventListener("click", function () {
    const dipositField = document.getElementById("diposit-ammount");
    const dipositAmmount = dipositField.value;

    // Validation
    dipositField.value = "";
    if (dipositAmmount === "") {
        alert("Error: Balance is required!");

    } else if (isNaN(dipositAmmount)) {
        alert("Error: Please provide valid number of ammount!");
    } else {
        dipositCal(parseFloat(dipositAmmount));
    }
});


// If withdraw button is clicked
document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-ammount");
    const withdrawAmmount = withdrawField.value;

    // Validation
    withdrawField.value = "";
    if (withdrawAmmount === "") {
        alert("Error: Balance is required!");
    } else if (isNaN(withdrawAmmount)) {
        alert("Error: Please provide valid number of ammount!");
    } else {
        withdrawCal(parseFloat(withdrawAmmount));
    }
});


// Diposit calculation
function dipositCal(dipositAmmount) {

    // Calculate and print total diposit
    dipositBalance.innerText = parseFloat(dipositBalance.innerText) + dipositAmmount;

    // Calculate and print total Balance
    totalBalance.innerText = parseFloat(totalBalance.innerText) + dipositAmmount;
}


// Withdraw calculation
function withdrawCal(withdrawAmmount) {
    // Validation
    if (parseFloat(totalBalance.innerText) === 0) {
        alert("Error: You don\'t have balance to withdraw!");
    } else if (parseFloat(totalBalance.innerText) - withdrawAmmount < 0) {
        alert("Error: You can\'t withdraw more than total balance!");
    } else {
        // Calculate and print total diposit
        withdrawBalance.innerText = parseFloat(withdrawBalance.innerText) + withdrawAmmount;

        // Calculate and print total Balance
        totalBalance.innerText = parseFloat(totalBalance.innerText) - withdrawAmmount;
    }
}