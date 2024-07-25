// Get the form and input elements
const form = document.getElementById('personal-details-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const displayArea = document.getElementById('display-area');

// localStorage.clear();

// Initialize the personal details array
let personalDetailsArray = [];

// Retrieve the personal details array from local storage on page load
window.onload = () => {
    const storedPersonalDetailsArray = localStorage.getItem('personalDetailsArray');
    if (storedPersonalDetailsArray) {
        personalDetailsArray = JSON.parse(storedPersonalDetailsArray);
        console.log('Initial personalDetailsArray:', personalDetailsArray);
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
    if(personalDetailsArray.length > 0){
        // for(let i = 0; i < personalDetailsArray.length; i++){
        //     if(personalDetailsArray[i].email === email){
        //         alert('Email already exists');
        //         return;
        //     }
        //     else if(personalDetailsArray[i].phone === phone){
        //         alert('Phone number already exists');
        //         return;
        //     }
        // }
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
    console.log('Updated personalDetailsArray:', personalDetailsArray);
});