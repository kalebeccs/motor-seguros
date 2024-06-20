const email = document.getElementById('email');
const password = document.getElementById('password');

function login() {
    if (email.value in localStorage) {
        if (password.value == localStorage.getItem(email.value)) {
            alert("Login successful");
        }
        else {
            alert("Incorrect password");
        }
    }
    else {
        alert("Email not found");
    }
}