// Get the elements in profile.html
const profileName = document.getElementById('profile-name'),
    profileAvatar = document.getElementById('profile-avatar'),
    profileEmail = document.getElementById('profile-email'),
    profilePhone = document.getElementById('profile-phone'),
    profileAddress = document.getElementById('profile-address'),
    exitBtn = document.getElementById('nav-exit')

// Get the user from the local storage
const user = JSON.parse(sessionStorage.getItem("user"));

if(user == null) {
    window.location.replace('../../index.html')
}

// Set the values to the elements
profileAvatar.src = `https://github.com/${user.username}.png`
profileName.textContent = `${user.firstname} ${user.lastname}`
profileEmail.textContent = user.email
profilePhone.textContent = user.phone
profileAddress.textContent = user.address

exitBtn.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.replace('../../index.html')
})

// Simlations Button on Click
const simsButton = document.getElementById('sims__button');
const simulationsContainer = document.getElementById('simulations-container');

simsButton.addEventListener('click', () => {
    if (simulationsContainer.style.display === 'none' || simulationsContainer.style.display === '') {
        simulationsContainer.classList.toggle('active');
    }
});

//---------- Simulations - NOTE: NOT WORKING YET ---------- //

// Get the elements in simulations.html
const simulationsSection = document.getElementById('simulations-section');

// Function to get simulations by user
function getSimulationsByUser(userId) {
    // Make an API request to get simulations by user
    // Replace the API_URL with the actual API endpoint
    fetch(API_URL + `/simulations?userId=${userId}`)
        .then(response => response.json())
        .then(simulations => {
            // Render the simulations on the page
            renderSimulations(simulations);
        })
        .catch(error => {
            console.error('Error fetching simulations:', error);
        });
}

// Function to render simulations on the page
function renderSimulations(simulations) {
    // Clear the simulations section
    simulationsSection.innerHTML = '';

    // Loop through the simulations and create HTML elements to display them
    simulations.forEach(simulation => {
        const simulationElement = document.createElement('div');
        simulationElement.classList.add('simulation');
        simulationElement.innerHTML = `
            <h3>${simulation.title}</h3>
            <p>${simulation.description}</p>
            <p>Result: ${simulation.result}</p>
        `;
        simulationsSection.appendChild(simulationElement);
    });
}

// Call the function to get simulations by the logged user
getSimulationsByUser(user.id);

