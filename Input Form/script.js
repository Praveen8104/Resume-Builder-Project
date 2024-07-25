// Get the form and input elements
const form = document.getElementById('personal-details-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const displayArea = document.getElementById('display-area');

var personalDetailsArray = [];

// Retrieve the personal details array from local storage on page load
window.onload = () => {
    const storedPersonalDetailsArray = localStorage.getItem('personalDetailsArray');
    if (storedPersonalDetailsArray) {
        personalDetailsArray = JSON.parse(storedPersonalDetailsArray);
        console.log(personalDetailsArray[personalDetailsArray.length - 1]);
    }
};


// Add event listener to the submit button
document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault();

    // Get the input values
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const address = addressInput.value;

    // Create an object to store the personal details
    const personalDetails = {
        name,
        email,
        phone,
        address
    };

    // Add the personal details to the array
    if (personalDetailsArray.length > 0) {
        personalDetailsArray.pop();
    }
    personalDetailsArray.push(personalDetails);

    // Store the personal details array in local storage
    localStorage.setItem('personalDetailsArray', JSON.stringify(personalDetailsArray));

    // Clear the form fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';

    // Log the updated personalDetailsArray to the console
    console.log(personalDetailsArray);
});

// Clear the local storage
document.getElementById('clear-btn').addEventListener('click', () => {
    localStorage.clear();
    personalDetailsArray = [];
    console.log('PersonalDetailsArray cleared:', personalDetailsArray);
});