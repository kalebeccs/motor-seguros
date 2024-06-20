const email = document.getElementById('email');
const password = document.getElementById('password');

const output = document.getElementById('output');

function signUp() {
    if (!("@gmail.com" in email)) {
        output.value = "Wrong email format";
    }
    if (password.length < 8) {
        output.value = "Password must be at least 8 characters";
    }
    if (password.length > 16) {
        output.value = "Password must be at most 16 characters";
    }
    if (password.value.match(/[A-Z]/) == null) {
        output.value = "Password must contain at least one uppercase letter";
    }
    if (password.value.match(/[a-z]/) == null) {
        output.value = "Password must contain at least one lowercase letter";
    }
    if (password.value.match(/[0-9]/) == null) {
        output.value = "Password must contain at least one number";
    }
    if (password.value.match(/[!@#$%^&*]/) == null) {
        output.value = "Password must contain at least one special character";
    }
    else {
        output.value = "Sign up successful";
        window.location.href = "https://motorseguros.pt/login.html";
    }
}