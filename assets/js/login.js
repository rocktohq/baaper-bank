/**
 * 
 * Login System
 * 
**/

var loginInfo = {
    email: "gorib@gmail.com",
    password: "gorib12345"
};


// If the login button is clicked
document.getElementById("btn-login").addEventListener("click", function () {
    const email = document.getElementById("email");
    const emailValue = email.value;
    const pass = document.getElementById("password");
    const passValue = pass.value;

    if (emailValue === "") {
        alert("Error: Email Field is Empty!");
    } else if (passValue === "") {
        alert("Error: Password Field is Empty!");
    } else {
        login(emailValue, passValue);
    }
});


// Login Function
function login(email, pass) {
    if (email === loginInfo.email && pass === loginInfo.password) {
        // Login success: redirect
        location.href = "bank.html";
    } else {
        alert("Error: Wrong Email or Password!");
    }
}