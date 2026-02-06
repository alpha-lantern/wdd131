const counter = document.querySelector(".counter");

// Get a submit confirmation
let success = JSON.parse(localStorage.getItem('successful-submit')) || false;

// Display the number of reviews
reviews = getReviewsNumber();
if (reviews == 1) {
  counter.textContent = `You are the first one!`;
} else {
  counter.innerHTML = `Reviews Completed: ${reviews}`;
};

// Store the number of submits in the local storage
function getReviewsNumber() {

    reviews = JSON.parse(localStorage.getItem('reviews-number')) || 0;
    // After getting the submit add one to the counter and change the
    // success status to false again.
    if (success) {
      reviews++;
      localStorage.setItem('successful-submit', false);
    }
    localStorage.setItem('reviews-number', JSON.stringify(reviews));

    // Display the review counter
    return reviews;
}
