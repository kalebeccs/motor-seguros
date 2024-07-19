/*=============== PROFILE ===============*/
// Get the elements in profile.html
const profileName = document.getElementById('profile-name'),
      profileAvatar = document.getElementById('profile-avatar'),
      profileEmail = document.getElementById('profile-email'),
      profilePhone = document.getElementById('profile-phone'),
      profileAddress = document.getElementById('profile-address'),
      navAvatar = document.getElementById('nav-avatar'),
      exitBtn = document.getElementById('nav-exit')

// Get the user from the session storage
const user = JSON.parse(sessionStorage.getItem("user"));

if (user == null) {
    window.location.replace('../../index.html')
}

// Set the values to the elements
navAvatar.src = `https://github.com/${user.username}.png`
profileAvatar.src = `https://github.com/${user.username}.png`
profileName.textContent = `${user.firstname} ${user.lastname}`
profileEmail.textContent = user.email
profilePhone.textContent = user.phone
profileAddress.textContent = user.address

exitBtn.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.replace('../../index.html')
})

/*=============== SIMULATIONS ===============*/
const simulationBtn = document.getElementById('profile-to-simulations'),
      simulationsSection = document.getElementById('simulations')
      
// Simlations Button on Click
simulationBtn.addEventListener('click', () => {
    if (simulationsSection.style.display === 'none' || simulationsSection.style.display === '') {
        simulationsSection.classList.toggle('simulations--active');
    }
})