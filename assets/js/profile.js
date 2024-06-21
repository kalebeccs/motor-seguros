// Get the elements in profile.html
const profileName = document.getElementById('profile__name'),
    profileEmail = document.getElementById('profile__email');

// Get the user from the local storage
const user = JSON.parse(localStorage.getItem('user'));

// Set the values to the elements
profileName.value = (user.firstName + ' ' + user.lastName).toCapitalize();
profileEmail.value = user.email;