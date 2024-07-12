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
                sessionStorage.setItem("user",JSON.stringify(user))
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