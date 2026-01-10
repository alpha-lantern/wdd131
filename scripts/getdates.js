// Select the DOM element for output
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

// Date object
const today = new Date();

currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;
