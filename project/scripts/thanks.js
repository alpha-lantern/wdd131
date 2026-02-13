// THANKS PAGE AFTER FORM SUBMIT
// counter
const counter = document.querySelector(".counter");

// FORM COUNTER
// Get a submit confirmation
let success = JSON.parse(localStorage.getItem('successful-submit')) || false;
const basePeople = 100

// Display the number of reviews
people = getFamilyNumber();
if (success) {
    counter.innerHTML = `We are ${people} people with you!`;
} else {
    counter.innerHTML = `${people} people waiting for you to join us!`;
};

// Store the number of submits in the local storage
function getFamilyNumber() {

    people = JSON.parse(localStorage.getItem('family-number')) || basePeople;
    // After getting the submit add one to the counter and change the
    // success status to false again.
    if (success) {
      people++;
      localStorage.setItem('successful-submit', false);
    }
    localStorage.setItem('family-number', JSON.stringify(people));

    // Display the review counter
    return people;
}
