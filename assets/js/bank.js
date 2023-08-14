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
    if (dipositAmmount === "") {
        alert("Error: Balance is required!");

    }

    // else if (typeof dipositAmmount !== "number") {
    //     alert("Error: Please provide valid ammount of balance!");
    // } 

    else {
        dipositCal(parseFloat(dipositAmmount));
        dipositField.value = "";
    }
});


// If withdraw button is clicked
document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-ammount");
    const withdrawAmmount = withdrawField.value;

    // Validation
    if (withdrawAmmount === "") {
        alert("Error: Balance is required!");

    }

    // else if (typeof withdrawAmmount !== "number") {
    //     alert("Error: Please provide valid ammount of balance!");
    // } 

    else {
        withdrawCal(parseFloat(withdrawAmmount));
        withdrawField.value = "";
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
        alert("Error: You can\'t withdraw!");
    } else if (parseFloat(totalBalance.innerText) - withdrawAmmount < 0) {
        alert("Error: You can\'t withdraw this ammount!");
    } else {
        // Calculate and print total diposit
        withdrawBalance.innerText = parseFloat(withdrawBalance.innerText) + withdrawAmmount;

        // Calculate and print total Balance
        totalBalance.innerText = parseFloat(totalBalance.innerText) - withdrawAmmount;
    }
}