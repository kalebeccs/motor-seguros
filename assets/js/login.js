/* 
This script handles the login functionality
*/

// References to the necessary DOM elements: 
const email = document.getElementById('email');
let password = document.getElementById('password');
let loginBtn = document.getElementById('login__button');
let status = document.getElementById('status');

// An event listener is added to the login button to trigger the login process when clicked.
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    login(email.value, password.value);
})

// Fetches user data from data.json. It then procedes to authenticate the user based on the email and password provided.
async function login(email, password) {
    const users = await getData('./assets/json/data.json');

    users.forEach(user => {
        if (email == user.email) {
            if (password == user.password) {
                statusSpan.textContent = "Login successful!";
                window.location.replace('../../profile.html');
            }
            else {
                statusSpan.textContent = "Incorrect password.";
            }
        }
        else {
            statusSpan.textContent = "This email is not registered or doesn't exist.";
        }
    });
}

// Fetches data from a JSON file.
async function getData(src) {
    const response = await fetch(src);
    const responseJson = await response.json();
    return responseJson;
}