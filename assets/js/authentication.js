// -------------------- AUTHENTICATION -------------------- //
// This script handles the login and sign up functionality //
// ------------------------------------------------------ //

// -----------------  LOGIN ----------------- //
// References to the necessary DOM elements: 
const email = document.getElementById('email'),
    password = document.getElementById('password'),
    loginSubmit = document.getElementById('login__button'),
    statusSpan = document.getElementById('status');

// An event listener is added to the login button to trigger the login process when clicked.
loginSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    authenticate(email.value, password.value);
})

// Fetches user data from data.json. It then procedes to authenticate the user based on the email and password provided.
async function authenticate(email, password) {
    const users = await getData('./assets/json/data.json');

    users.forEach(user => {
        if (email == user.email) {
            if (password == user.password) {
                statusSpan.textContent = "Login successful!";
                window.location.replace('../../profile.html');
                console.log("Login successful!");
            }
            else {
                statusSpan.textContent = "Incorrect password.";
                console.log("Incorrect password.");
            }
        }
        else {
            if (statusSpan.textContent == "Incorrect password.") {
                statusSpan.textContent == "Incorrect password."
            }
            else {
            statusSpan.textContent = "This email is not registered or doesn't exist.";
            console.log("This email is not registered or doesn't exist.");
            }
        }
    });
}

// Fetches data from a JSON file.
async function getData(src) {
    const response = await fetch(src);
    const responseJson = await response.json();
    return responseJson;
}

// -----------------  SIGN UP ----------------- //

// References to the necessary DOM elements:
const fName = document.getElementById('fName'),
    lName = document.getElementById('lName'),
    signUpEmail = document.getElementById('email'),
    signUpPassword = document.getElementById('password'),
    signUpSubmit = document.getElementById('signUp__button');

// An event listener is added to the Sign Up button to trigger the sign up process when clicked.
signSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    trySignUp(signUpEmail.value, signUpPassword.value, fName.value, lName.value);
})

// Authentication for sign up
function trySignUp() {
    if (!("@gmail.com" in email)) {
        statusSpan.textContent = "Wrong email format.";
    }
    if (password.length < 8) {
        statusSpan.textContent = "Password must be at least 8 characters.";
    }
    if (password.length > 16) {
        statusSpan.textContent = "Password must be at most 16 characters.";
    }
    if (password.value.match(/[A-Z]/) == null) {
        statusSpan.textContent = "Password must contain at least one uppercase letter.";
    }
    if (password.value.match(/[a-z]/) == null) {
        statusSpan.textContent = "Password must contain at least one lowercase letter.";
    }
    if (password.value.match(/[0-9]/) == null) {
        statusSpan.textContent = "Password must contain at least one number.";
    }
    if (password.value.match(/[!@#$%^&*]/) == null) {
        statusSpan.textContent = "Password must contain at least one special character.";
    }
    else {
        register_user();
    }
}

// Registers a new user
function register_user (fName, lName, email, password) {

    // User data
    const userData = {
        fName: fName.value,
        lName: lName.value,
        email: email.value,
        password: password.value
    };

    // Fetches the data from the JSON file
    fetch('./assets/json/data.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Converts the data to a JSON string
        body: JSON.stringify(userData)
    })
        // Converts the response to a JSON object and try to log the data
        .then(response => response.json())
        .then(data => {
            statusSpan.textContent = "Sign up successful!";
            window.location.href = "https://motorseguros.pt/login.html";
        })
        .catch(error => {
            statusSpan.textContent = "Error occurred while signing up";
            console.error(error);
        });
}
