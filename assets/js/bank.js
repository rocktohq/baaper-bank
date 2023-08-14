/*
# Banking Calculations
*/


// Global Variables
// Get total balance
var totalBalance = document.getElementById("total-balance");
// Get the diposit balance
var dipositBalance = document.getElementById("diposit-balance");
// Get the withdraw balance
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
        dipositCal(parseInt(dipositAmmount));
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
        withdrawCal(parseInt(withdrawAmmount));
        withdrawField.value = "";
    }
});


// Diposit calculation
function dipositCal(dipositAmmount) {
    // Calculate total diposit
    dipositBalance.innerText = parseInt(dipositBalance.innerText) + dipositAmmount;

    // Calculate total Balance
    totalBalance.innerText = parseInt(totalBalance.innerText) + dipositAmmount;
}

// Withdraw calculation
function withdrawCal(withdrawAmmount) {
    // Validation
    if (parseInt(totalBalance.innerText) === 0) {
        alert("Error: You can\'t withdraw!");
    } else if (parseInt(totalBalance.innerText) - withdrawAmmount < 0) {
        alert("Error: You can\'t withdraw this ammount!");
    } else {
        // Calculate total diposit
        withdrawBalance.innerText = parseInt(withdrawBalance.innerText) + withdrawAmmount;

        // Calculate total Balance
        totalBalance.innerText = parseInt(totalBalance.innerText) - withdrawAmmount;
    }
}