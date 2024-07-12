
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
        })
        .catch(error => {
            statusSpan.textContent = "Error occurred while signing up.";
            console.error(error);
        });
}
