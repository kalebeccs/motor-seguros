// Get the elements in profile.html
const profileName = document.getElementById('profile-name'),
    profileAvatar = document.getElementById('profile-avatar'),
    profileEmail = document.getElementById('profile-email'),
    exitBtn = document.getElementById('nav-exit')

// Get the user from the local storage
const user = JSON.parse(sessionStorage.getItem("user"));

// Set the values to the elements
profileAvatar.src = `https://github.com/${user.username}.png`
profileName.textContent = `${user.firstname} ${user.lastname}`
profileEmail.textContent = user.email;

exitBtn.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.replace('../../index.html')
})